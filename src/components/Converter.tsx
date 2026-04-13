import { useState, useCallback } from "react";
import { COIN_ICONS, COIN_COLORS, fmtFull } from "../hooks/useRates";

const WA_LINK = "https://wa.me/message/ONIHLN44TW6MI1";
const COINS = ["BTC", "ETH", "USDT", "BNB", "SOL", "NGN"];

interface ConverterProps {
  getBuyRate: (coin: string) => number;
  getSellRate: (coin: string) => number;
}

export default function Converter({ getBuyRate, getSellRate }: ConverterProps) {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [fromCoin, setFromCoin] = useState("NGN");
  const [toCoin, setToCoin] = useState("BTC");
  const [fromAmt, setFromAmt] = useState("");

  const doConvert = useCallback(() => {
    const amt = parseFloat(fromAmt) || 0;
    if (!amt) return { result: "", rateLabel: "Select coins to see rate" };

    let result = 0;
    let rateLabel = "Select coins to see rate";

    if (fromCoin === "NGN" && toCoin !== "NGN") {
      const rate = mode === "buy" ? getBuyRate(toCoin) : getSellRate(toCoin);
      if (rate) {
        result = amt / rate;
        rateLabel = `1 ${toCoin} = ${fmtFull(rate)}`;
      }
    } else if (fromCoin !== "NGN" && toCoin === "NGN") {
      const rate =
        mode === "sell" ? getBuyRate(fromCoin) : getSellRate(fromCoin);
      if (rate) {
        result = amt * rate;
        rateLabel = `1 ${fromCoin} = ${fmtFull(rate)}`;
      }
    } else if (fromCoin !== "NGN" && toCoin !== "NGN" && fromCoin !== toCoin) {
      const rF = getBuyRate(fromCoin);
      const rT = getSellRate(toCoin);
      if (rF && rT) {
        result = (amt * rF) / rT;
        rateLabel = "Cross-rate via NGN";
      }
    }

    return {
      result: result ? result.toFixed(8).replace(/\.?0+$/, "") : "",
      rateLabel,
    };
  }, [fromAmt, fromCoin, toCoin, mode, getBuyRate, getSellRate]);

  const { result, rateLabel } = doConvert();
  console.log(Number(result).toLocaleString("en-US"));

  const doSwap = () => {
    setFromCoin(toCoin);
    setToCoin(fromCoin);
  };

  return (
    <section className="section" id="converter">
      <p className="s-tag">Rate Converter</p>
      <h2>
        Today&rsquo;s <em>live</em> rates
      </h2>
      <p className="s-sub" style={{ maxWidth: "100%" }}>
        Updated every morning. What you see is what you receive &mdash; no
        deductions.
      </p>
      <div className="conv-layout">
        <div className="conv-card">
          <div className="conv-tabs">
            <button
              className={`conv-tab${mode === "buy" ? " active" : ""}`}
              onClick={() => {
                setMode("buy");
                doSwap();
              }}
            >
              Buy crypto
            </button>
            <button
              className={`conv-tab${mode === "sell" ? " active" : ""}`}
              onClick={() => {
                setMode("sell");
                doSwap();
              }}
            >
              Sell crypto
            </button>
          </div>

          <div className="conv-field">
            <div className="conv-field-label">You pay</div>
            <div className="conv-row">
              <div
                className="cicon"
                style={{
                  background: COIN_COLORS[fromCoin] || "#1A7A4A",
                  color: fromCoin === "BNB" ? "#000" : "#fff",
                }}
              >
                {COIN_ICONS[fromCoin] || fromCoin[0]}
              </div>
              <select
                className="conv-select"
                value={fromCoin}
                onChange={(e) => setFromCoin(e.target.value)}
              >
                {COINS.filter((c) => c !== toCoin).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                className="conv-input"
                type="number"
                placeholder="0"
                value={fromAmt}
                onChange={(e) => setFromAmt(e.target.value)}
              />
            </div>
          </div>

          <div className="conv-swap">
            <button className="conv-swap-btn" onClick={doSwap}>
              ⇄
            </button>
          </div>

          <div className="conv-field">
            <div className="conv-field-label">You receive</div>
            <div className="conv-row">
              <div
                className="cicon"
                style={{
                  background: COIN_COLORS[toCoin] || "#1A7A4A",
                  color: toCoin === "BNB" ? "#000" : "#fff",
                }}
              >
                {COIN_ICONS[toCoin] || toCoin[0]}
              </div>
              <select
                className="conv-select"
                value={toCoin}
                onChange={(e) => setToCoin(e.target.value)}
              >
                {COINS.filter((c) => c !== fromCoin).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                className="conv-input"
                type="text"
                readOnly
                placeholder="0"
                value={Number(result).toLocaleString("en-US")}
              />
            </div>
          </div>

          <div className="rate-row">
            <span className="rate-label">{rateLabel}</span>
            <span className="rate-fee">0% fee</span>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="conv-cta"
          >
            Complete trade on WhatsApp
          </a>
        </div>

        <div className="conv-facts">
          {[
            {
              icon: "→",
              title: "The rate you see is the rate you get",
              desc: "We don\u2019t deduct fees after the trade. No spreads, no surprises, no small print.",
            },
            {
              icon: "↑",
              title: "Benchmarked every morning",
              desc: "We check Nigeria\u2019s market daily and set rates that consistently beat major platforms.",
            },
            {
              icon: "⏱",
              title: "Naira within minutes",
              desc: "Once your crypto clears, the naira transfer happens immediately \u2014 no queues.",
            },
            {
              icon: "⚖",
              title: "Regulated by Nigerian law",
              desc: "CAC registered and SCUML compliant. Your funds are protected under Nigerian statutes.",
            },
          ].map((f, i) => (
            <div className="conv-fact" key={i}>
              <div className="fact-icon">{f.icon}</div>
              <div>
                <div className="fact-title">{f.title}</div>
                <div className="fact-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
