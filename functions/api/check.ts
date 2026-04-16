interface Env {
  ADMIN_PASSWORD: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const cookieHeader = request.headers.get("Cookie");
  
  if (!cookieHeader || !cookieHeader.includes("admin_session=")) {
    return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
  }

  if (!env.ADMIN_PASSWORD) {
     return new Response(JSON.stringify({ error: "Server missing ADMIN_PASSWORD config" }), { status: 500 });
  }

  const msgBuffer = new TextEncoder().encode(env.ADMIN_PASSWORD);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const expectedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  if (cookieHeader.includes(`admin_session=${expectedHash}`)) {
    return new Response(JSON.stringify({ authenticated: true }), { status: 200 });
  }

  return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
}
