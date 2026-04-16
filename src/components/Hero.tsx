import logoImg from "../assets/logo.png";
import { useRates, fmtFull, fmtNaira, COIN_COLORS } from "../hooks/useRates";

const WA_LINK = "https://wa.me/message/ONIHLN44TW6MI1";

interface HeroProps {
  getBuyRate: ReturnType<typeof useRates>["getBuyRate"];
}

export default function Hero({ getBuyRate }: HeroProps) {
  return (
    <>
      {/* Reward Banner */}
      <div className="reward-banner">
        <span className="rb-icon">🎉</span>
        <span className="rb-text">
          Be among the first <strong>10,000 users</strong> to share from the{" "}
          <strong>$200,000</strong> prize pool when the app goes live
        </span>
        <span className="rb-badge">Trade → Earn Points → Get Paid</span>
      </div>

      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
        </div>
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>MVP Launching Soon · Nigeria's
            First Zero-Fee Exchange
          </div>
          <h1>
            Nigeria's {/* <br /> */}
            <em>zero-fee</em> crypto
            <br />
            exchange.
            <br />
            <span className="h1-pill">Swift naira.</span>
          </h1>
          <p className="hero-sub">
            Every Nigerian trader loses money to hidden fees and P2P delays. JJS
            Currency is Nigeria's best crypto to naira exchange — convert
            Bitcoin, USDT, Ethereum and more at the best rates in Nigeria, with
            instant naira settlement and zero fees deducted. Ever.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn-primary">
              Be among the first 100 users <span className="arr">→</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.527 5.845L.057 23.272a.75.75 0 00.92.92l5.427-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.722 9.722 0 01-4.95-1.355l-.355-.212-3.683.997.98-3.585-.232-.37A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Trade on WhatsApp
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-val">₦0</div>
              <div className="stat-label">Transaction Fees</div>
            </div>
            <div className="stat">
              <div className="stat-val">&lt; 5 min</div>
              <div className="stat-label">Settlement</div>
            </div>
            <div className="stat">
              <div className="stat-val">5+</div>
              <div className="stat-label">Coins supported</div>
            </div>
          </div>
        </div>

        {/* Hero Rate Card */}
        <div className="hero-card">
          <div className="hc-top">
            <div className="hc-brand">
              <div className="hc-mark">
                <img src={logoImg} alt="JJS" />
              </div>
              <span className="hc-name">JJS Currency</span>
            </div>
            <div className="hc-live">
              <span className="hc-dot"></span> Live rates
            </div>
          </div>
          <div className="hc-feat">
            <div className="hcf-label">USDT · Best rate today</div>
            <div className="hcf-rate">{fmtFull(getBuyRate("USDT"))}</div>
            <div className="hcf-tag">Zero fees on all trades</div>
          </div>
          <div className="hc-rates">
            {[
              { coin: "BTC", name: "Bitcoin", sym: "BTC", icon: "₿" },
              { coin: "ETH", name: "Ethereum", sym: "ETH", icon: "Ξ" },
              { coin: "SOL", name: "Solana", sym: "SOL", icon: "◎" },
            ].map((c) => (
              <div className="hcr" key={c.coin}>
                <div className="hcr-left">
                  <div
                    className="hcr-icon"
                    style={{
                      background: COIN_COLORS[c.coin],
                      color: "#fff",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="hcr-name">{c.name}</div>
                    <div className="hcr-sym">{c.sym}</div>
                  </div>
                </div>
                <div className="hcr-rate">{fmtNaira(getBuyRate(c.coin))}</div>
              </div>
            ))}
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="hc-cta">
            Start trading now
          </a>
        </div>
      </section>
    </>
  );
}
