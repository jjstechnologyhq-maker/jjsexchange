interface RewardsProps {
  left: number;
  pct: string;
  position: number;
}

export default function Rewards({ left, pct, position }: RewardsProps) {
  return (
    <section className="rewards-section" id="rewards">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="s-tag" style={{ color: 'rgba(196,240,60,.75)' }}>🏆 $200,000 Prize Pool</p>
        <h2 style={{ color: '#fff', fontFamily: "'Instrument Serif',serif" }}>
          Trade to earn points.<br /><em>Get paid at launch.</em>
        </h2>
        <p className="s-sub" style={{ color: 'rgba(255,255,255,.45)' }}>
          Be among the first 10,000 users to share from $200,000 when JJS Currency officially launches. Every trade earns you points. More points = bigger share.
        </p>
        <div className="pts-chips">
          <span className="pts-chip"><span className="pts-chip-icon">₿</span> Trade crypto → earn points</span>
          <span className="pts-chip"><span className="pts-chip-icon">👥</span> Refer friends → bonus points</span>
          <span className="pts-chip"><span className="pts-chip-icon">✅</span> Early signup → 2x multiplier</span>
          <span className="pts-chip"><span className="pts-chip-icon">🎉</span> Top 10,000 share $200k</span>
        </div>
      </div>
      <div className="rewards-grid">
        <div className="reward-visual">
          <div className="reward-card-big">
            <div className="rw-prize">$200,000</div>
            <div className="rw-prize-label">Total prize pool at launch</div>
            <div className="rw-spots">
              <div className="rw-spots-val">{left.toLocaleString()}</div>
              <div className="rw-spots-label">spots remaining</div>
            </div>
            <div className="rw-bar-wrap">
              <div className="rw-bar-fill" style={{ width: `${pct}%` }}></div>
            </div>
            <div className="rw-bar-label">{position.toLocaleString()} / 10,000 spots taken</div>
          </div>
        </div>
        <div className="reward-steps">
          {[
            { n: '1', title: 'Join the waitlist now', desc: 'Secure your spot and lock in your 2\u00d7 early-user points multiplier. First come, first served.' },
            { n: '2', title: 'Trade when we launch', desc: 'Every crypto trade earns you JJS Points. Bigger trades, more points. Buy or sell \u2014 both count.' },
            { n: '3', title: 'Refer friends', desc: 'Each person you bring in earns you bonus points on every trade they make. The more you refer, the more you earn.' },
            { n: '4', title: 'Collect your share', desc: 'At the end of the launch period, the top 10,000 users share $200,000 proportional to their points.' },
          ].map((s) => (
            <div className="reward-step" key={s.n}>
              <div className="rs-num">{s.n}</div>
              <div>
                <div className="rs-title">{s.title}</div>
                <div className="rs-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
