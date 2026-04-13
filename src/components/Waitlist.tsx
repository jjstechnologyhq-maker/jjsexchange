import { useState } from 'react';

interface WaitlistProps {
  position: number;
  pct: string;
  left: number;
  count: number;
  joinWaitlist: (name: string, email: string, phone: string) => void;
}

export default function Waitlist({ position, pct, left, count, joinWaitlist }: WaitlistProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) { alert('Please enter your full name.'); return; }
    if (!email.trim()) { alert('Please enter your email address.'); return; }
    joinWaitlist(name.trim(), email.trim(), phone.trim());
    setName(''); setEmail(''); setPhone('');
  };

  return (
    <section className="wl-section always-dark" id="waitlist">
      <div className="wl-layout">
        <div>
          <p className="s-tag" style={{ color: 'rgba(196,240,60,.75)' }}>Early Access</p>
          <h2 style={{ color: '#fff', fontFamily: "'Instrument Serif',serif" }}>
            Be first when<br />we go <em>live.</em>
          </h2>
          <div className="wl-counter-block">
            <div className="wl-position-line">
              <span className="wl-pos-label">Position</span>
              <span className="wl-pos-num">{position}</span>
              <span className="wl-pos-total">/ 10,000</span>
            </div>
            <div className="wl-progress-wrap">
              <div className="wl-progress-fill" style={{ width: `${pct}%` }}></div>
            </div>
            <div className="wl-progress-label">
              <span>0</span>
              <span>{position} joined · {left.toLocaleString()} spots left</span>
              <span>10,000</span>
            </div>
          </div>
          <ul className="wl-perks">
            <li className="wl-perk"><div className="perk-check"></div>Priority platform access before public launch</li>
            <li className="wl-perk"><div className="perk-check"></div>Exclusive launch-day rate guarantee</li>
            <li className="wl-perk"><div className="perk-check"></div>Direct line to our trading desk on WhatsApp</li>
            <li className="wl-perk"><div className="perk-check"></div>First notification when new coins are added</li>
            <li className="wl-perk"><div className="perk-check"></div><strong style={{ color: '#C4F03C' }}>2× points multiplier</strong>&nbsp;— early users earn double at launch</li>
            <li className="wl-perk"><div className="perk-check"></div>Share from the $200,000 prize pool</li>
          </ul>
        </div>
        <div>
          <div className="wl-form-card">
            <div className="wl-form-title">Reserve your spot</div>
            <div className="wl-form-sub">Free. No spam. One message when we launch.</div>
            <div className="wl-form">
              <input className="wl-input" type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="wl-input" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="wl-input" type="tel" placeholder="WhatsApp number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <button className="wl-btn" onClick={handleSubmit}>Reserve my spot →</button>
              <p className="wl-note">We only contact you at launch. No marketing emails.</p>
            </div>
            <div className="wl-proof">
              <div className="proof-avs">
                <div className="proof-av">AO</div>
                <div className="proof-av">CF</div>
                <div className="proof-av">EI</div>
                <div className="proof-av">TK</div>
              </div>
              <div className="proof-text">Join <strong>{count} others</strong> already on the waitlist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
