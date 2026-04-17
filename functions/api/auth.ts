interface Env {
  ADMIN_PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    
    // Check if the environment variable is actually set
    if (!env.ADMIN_PASSWORD) {
       return new Response(JSON.stringify({ error: "Server missing ADMIN_PASSWORD config" }), { status: 500 });
    }

    const { password } = await request.json<{ password?: string }>();

    if (password !== env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const msgBuffer = new TextEncoder().encode(env.ADMIN_PASSWORD);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const cookie = `admin_session=${hashHex}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Set-Cookie': cookie,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Bad Request" }), { status: 400 });
  }
}
