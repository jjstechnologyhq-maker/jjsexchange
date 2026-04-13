const testimonials = [
  { stars: '★★★★★', quote: '"Best USDT rate I\'ve found in Nigeria. Sent my USDT, naira was in my GTB account in under 4 minutes. Zero fee deducted — exactly what the calculator showed."', initials: 'AO', name: 'Adewale O.', handle: 'Lagos · USDT seller' },
  { stars: '★★★★★', quote: '"I was nervous because of all the crypto scams. But they\'re CAC registered, the WhatsApp response is instant, and the rate beat every other platform I checked."', initials: 'CF', name: 'Chioma F.', handle: 'Abuja · BTC seller' },
  { stars: '★★★★★', quote: '"Other apps hold your money and still take fees. JJS paid instantly and kept every kobo. Told my whole crypto group. This is my permanent go-to platform."', initials: 'EI', name: 'Emmanuel I.', handle: 'Port Harcourt · ETH trader' },
];

export default function Testimonials() {
  return (
    <section className="section alt">
      <span className="s-tag">Traders</span>
      <h2>What our traders say.</h2>
      <p className="s-sub">Real feedback from people who've traded with us before the platform officially launches.</p>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div className="testi-card" key={i}>
            <div className="testi-stars">{t.stars}</div>
            <p className="testi-q">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-av">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-handle">{t.handle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
