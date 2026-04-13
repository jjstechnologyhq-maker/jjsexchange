export default function Trust() {
  return (
    <section className="section always-dark" id="trust">
      <p className="s-tag" style={{ color: 'rgba(196,240,60,.75)' }}>Compliance &amp; Registration</p>
      <h2 style={{ color: '#fff', fontFamily: "'Instrument Serif',serif" }}>
        Fully registered.<br /><em>Properly regulated.</em>
      </h2>
      <p className="s-sub" style={{ color: 'rgba(255,255,255,.45)' }}>Unlike anonymous traders or unregistered platforms, JJS Technology Limited is a legal Nigerian entity with full regulatory accountability.</p>
      <div className="trust-grid">
        <div className="trust-card">
          <div className="trust-icon">🏛️</div>
          <div className="trust-title">CAC Incorporation</div>
          <div className="trust-sub">Corporate Affairs Commission</div>
          <p className="trust-desc">JJS Technology Limited was incorporated on 4 November 2024 under the Companies and Allied Matters Act 2020 as a private company limited by shares, registered in Abuja, Nigeria.</p>
          <div className="trust-badge">RC Number · 8051071</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon">🛡️</div>
          <div className="trust-title">SCUML Registration</div>
          <div className="trust-sub">Anti-Money Laundering · EFCC</div>
          <p className="trust-desc">Registered under Section 17(2)(a) of the Money Laundering (Prevention and Prohibition) Act 2022. Certificate issued 16 January 2025 by EFCC-supervised SCUML.</p>
          <div className="trust-badge">Reg No · SC 251835045</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon">⚖</div>
          <div className="trust-title">Your protection</div>
          <div className="trust-sub">What regulation means for traders</div>
          <p className="trust-desc">Every trade you make is backed by a registered, regulated legal entity. If anything ever goes wrong, you have legal recourse &mdash; a guarantee no anonymous P2P trader can offer.</p>
          <div className="trust-badge">Regulated · Accountable · Verified</div>
        </div>
      </div>
    </section>
  );
}
