const faqs = [
  { q: 'How do I convert crypto to naira in Nigeria?', a: 'With JJS Currency, you message us on WhatsApp, tell us the coin and amount, send your crypto to our wallet address, and receive naira directly in your Nigerian bank account within minutes. Zero fees. No P2P delays.' },
  { q: 'What is the best crypto exchange in Nigeria?', a: "JJS Currency offers Nigeria's best crypto to naira rates with zero transaction fees, instant naira settlement, and full CAC and SCUML registration. We benchmark daily against Breet, Furex, and other major platforms." },
  { q: 'What is the best USDT to naira rate today?', a: "JJS Currency updates USDT to naira rates every morning. Our rates are benchmarked against the full Nigerian market daily. Use our rate calculator above to see today's exact rate — what you see is what you receive." },
  { q: 'Can I sell Bitcoin for naira in Nigeria?', a: 'Yes. JJS Currency supports selling Bitcoin (BTC), Ethereum (ETH), USDT, BNB, and Solana (SOL) for naira. All trades settle to your Nigerian bank account within minutes of blockchain confirmation.' },
  { q: 'Is there a crypto app in Nigeria with zero fees?', a: "JJS Currency is Nigeria's only zero-fee crypto exchange. Unlike other apps that charge 0.5–2% per trade, JJS Currency deducts nothing. The naira amount shown in the calculator is the exact amount credited to your account." },
  { q: 'Is JJS Currency registered and safe in Nigeria?', a: "Yes. JJS Technology Limited is fully incorporated by the CAC (RC Number 8051071) and SCUML certified (SC 251835045) under Nigeria's anti-money laundering laws. Unlike anonymous P2P traders, you have full legal recourse." },
];

export default function FAQ() {
  return (
    <section className="section alt" id="faq" style={{ borderTop: '1px solid var(--border)' }}>
      <span className="s-tag">Frequently Asked Questions</span>
      <h2>Everything you need to know about <em>trading crypto in Nigeria.</em></h2>
      <div className="faq-grid">
        {faqs.map((f, i) => (
          <div className="faq-card" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
