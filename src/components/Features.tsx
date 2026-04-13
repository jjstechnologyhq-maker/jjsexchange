const features = [
  {
    num: "01",
    title: "Zero fees. Not \u201clow fees.\u201d",
    desc: "Every naira is yours. No percentage clips, no spread markups, no hidden charges. What you calculate is what you receive \u2014 always.",
    dk: true,
  },
  {
    num: "02",
    title: "Nigeria\u2019s highest buy rates",
    desc: "We benchmark against Breet, Furex, and other major Nigerian platforms daily. Our rates are consistently at or above the market \u2014 and we can prove it.",
    dk: false,
  },
  {
    num: "03",
    title: "Naira in minutes, not hours",
    desc: "Instant settlement is a promise, not a feature. Once confirmed on-chain, your naira arrives before you finish the conversation.",
    dk: true,
  },
  {
    num: "04",
    title: "Trade from WhatsApp",
    desc: "No app download. No KYC forms. Message us, receive a wallet address, send crypto, collect naira. That\u2019s the entire process.",
    dk: false,
  },
  {
    num: "05",
    title: "Fully regulated",
    desc: "CAC incorporated (RC 8051071) and SCUML certified (SC 251835045). A legal entity accountable to Nigerian regulatory authorities.",
    dk: true,
  },
  {
    num: "06",
    title: "Human support, always",
    desc: "No bots, no ticket queues. A real person responds to your message. Nigerian traders expect that. We deliver it.",
    dk: false,
  },
];

export default function Features() {
  return (
    <section className="section">
      <p className="s-tag">Why JJS Currency</p>
      <h2>
        Built different. <em>On purpose.</em>
      </h2>
      <div className="feat-grid">
        {features.map((f) => (
          <div className={`feat-cell${f.dk ? " dk" : ""}`} key={f.num}>
            <div className="feat-num">{f.num}</div>
            <div className="feat-title">{f.title}</div>
            <p className="feat-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
