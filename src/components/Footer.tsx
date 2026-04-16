import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">
          <div className="footer-logo-mark"><img src={logoImg} alt="JJS" /></div>
          <div className="footer-logo-name">JJS<span>Currency</span></div>
        </div>
        <nav className="footer-nav">
          <a href="#converter">Rates</a>
          <a href="#rewards">Rewards</a>
          <a href="#how">How it works</a>
          <a href="#trust">Trust &amp; Safety</a>
          <a href="#waitlist">Waitlist</a>
          <a href="https://wa.me/message/ONIHLN44TW6MI1" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://linktr.ee/jjs.currency" target="_blank" rel="noreferrer">All links</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <div>© 2025 JJS Technology Limited. All rights reserved.</div>
        <div className="footer-cert">CAC RC 8051071 · SCUML SC 251835045</div>
        <div><a href="https://linktr.ee/jjs.currency" target="_blank" rel="noreferrer" style={{ color: 'rgba(196,240,60,.5)' }}>linktr.ee/jjs.currency</a></div>
      </div>
    </footer>
  );
}
