interface SuccessModalProps {
  open: boolean;
  position: number;
  onClose: () => void;
}

export default function SuccessModal({ open, position, onClose }: SuccessModalProps) {
  return (
    <div className={`success-modal${open ? ' open' : ''}`}>
      <div className="success-inner">
        <div className="success-confetti">🎉</div>
        <div className="success-h">You're <em>in!</em></div>
        <p className="success-p">Welcome to JJS Currency early access. Check your inbox for a confirmation — and get ready for launch day.</p>
        <div className="success-position">
          <div className="sp-label">Your waitlist position</div>
          <div className="sp-num">{position}</div>
          <div className="sp-of">out of 10,000 spots · 2× points multiplier locked</div>
        </div>
        <div className="success-steps">
          <div className="ss-step"><div className="ss-num">1</div><div className="ss-text"><strong>Check your inbox</strong> — we've sent a confirmation to your email</div></div>
          <div className="ss-step"><div className="ss-num">2</div><div className="ss-text"><strong>Save our WhatsApp</strong> — <a href="https://wa.me/message/ONIHLN44TW6MI1" target="_blank" rel="noreferrer" style={{ color: '#C4F03C' }}>start a chat now</a> so you're ready to trade</div></div>
          <div className="ss-step"><div className="ss-num">3</div><div className="ss-text"><strong>Share with friends</strong> — every referral earns you bonus points toward the $200k pool</div></div>
        </div>
        <button className="success-close" onClick={onClose}>✓ Got it — take me to my position</button>
      </div>
    </div>
  );
}
