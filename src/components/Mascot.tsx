import mascotImg from "../assets/mascot.jpeg";

export default function Mascot() {
  return (
    <section className="section always-dark">
      <div className="mascot-layout">
        <div className="mascot-visual">
          <div style={{ position: "relative", display: "inline-block" }}>
            <div className="orbit oc1">₿</div>
            <div className="orbit oc2">Ξ</div>
            <div className="orbit oc3">$</div>
            <div className="orbit oc4">B</div>
            <img
              src={mascotImg}
              alt="JJS Currency Nigeria crypto exchange mascot"
              className="mascot-img"
            />
            <div className="mascot-glow"></div>
          </div>
        </div>
        <div>
          <p className="s-tag" style={{ color: "rgba(196,240,60,.75)" }}>
            Your Trading Companion
          </p>
          <h2 style={{ color: "#fff", fontFamily: "'Instrument Serif',serif" }}>
            Meet the <em>JJS Bot.</em>
            <br />
            Always working for you.
          </h2>
          <ul className="mascot-pts">
            {[
              {
                n: "01",
                title: "Available around the clock",
                desc: "Our team responds to WhatsApp messages at any hour. No auto-replies \u2014 just a real person, fast.",
              },
              {
                n: "02",
                title: "Precision on every trade",
                desc: "Exact rate, exact naira, exact time. We don\u2019t round down or shave margins. Your money is treated with respect.",
              },
              {
                n: "03",
                title: "Registered and accountable",
                desc: "Unlike anonymous traders, JJS Technology Limited is a registered Nigerian company with legal accountability. You have recourse.",
              },
              {
                n: "04",
                title: "Growing with you",
                desc: "We\u2019re building toward a full platform \u2014 more coins, faster processing, and tools designed for serious Nigerian traders.",
              },
            ].map((p) => (
              <li className="mascot-pt" key={p.n}>
                <div className="mp-n">{p.n}</div>
                <div>
                  <div className="mp-title">{p.title}</div>
                  <div className="mp-desc">{p.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
