interface Env {
  ADMIN_PASSWORD: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const cookieHeader = request.headers.get("Cookie");
  
  if (!cookieHeader || !cookieHeader.includes("admin_session=")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  if (!env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: "Server configuration missing" }), { status: 500 });
  }

  const msgBuffer = new TextEncoder().encode(env.ADMIN_PASSWORD);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const expectedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  if (!cookieHeader.includes(`admin_session=${expectedHash}`)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  try {
    const { ngnPerUsd, spread } = await request.json<{ ngnPerUsd: number, spread: number }>();
    if (!ngnPerUsd || !spread) {
      return new Response(JSON.stringify({ error: "Bad Request: missing rates" }), { status: 400 });
    }

    // The Google Apps Script URL with write proxy
    const RATE_API = 'https://script.google.com/macros/s/AKfycbxxhGB7ka35PLlo3r2099Ko_or5I89Zq_zkCHwk0c3mz94tJDASjM2hoPNf6cFguVQtkg/exec';
    
    // Perform the write to Apps Script securely from the backend
    await fetch(`${RATE_API}?ngnPerUsd=${ngnPerUsd}&spread=${spread}&write=1`);
    
    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
