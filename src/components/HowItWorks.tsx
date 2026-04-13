const steps = [
  { n: '1', title: 'Check the rate', desc: 'Use the converter above to see exactly how much naira you\u2019ll receive for your crypto today.', active: true },
  { n: '2', title: 'Message us', desc: 'Tap WhatsApp. Tell us the coin, the amount, and your bank details. We respond immediately.', active: false },
  { n: '3', title: 'Send your crypto', desc: 'We send you a wallet address. Transfer your crypto. We confirm receipt on-chain.', active: false },
  { n: '4', title: 'Receive naira', desc: 'Your bank account is credited within minutes of confirmation. Full amount. Zero deductions.', active: false },
];

export default function HowItWorks() {
  return (
    <section className="section alt" id="how">
      <p className="s-tag">Process</p>
      <h2>Four steps. <em>Done.</em></h2>
      <p className="s-sub">From first message to naira in your account &mdash; the whole thing takes minutes.</p>
      <div className="steps-grid">
        {steps.map((s) => (
          <div className={`step${s.active ? ' active' : ''}`} key={s.n}>
            <div className="step-circle">{s.n}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
