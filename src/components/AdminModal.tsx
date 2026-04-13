import { useState } from "react";
import { fmtFull } from "../hooks/useRates";

interface AdminModalProps {
  ngnPerUsd: number;
  spread: number;
  getBuyRate: (coin: string) => number;
  getSellRate: (coin: string) => number;
  updateAdminRates: (ngn: number, spread: number) => Promise<void>;
}

const COINS = ["BTC", "ETH", "USDT", "BNB", "SOL"];

export default function AdminModal({
  ngnPerUsd,
  spread,
  getBuyRate,
  getSellRate,
  updateAdminRates,
}: AdminModalProps) {
  const [open, setOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [ngnVal, setNgnVal] = useState(String(ngnPerUsd));
  const [spVal, setSpVal] = useState(String(spread));

  const handleOpen = () => {
    setNgnVal(String(ngnPerUsd));
    setSpVal(String(spread));
    setOpen(true);
  };

  const handleLogin = () => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleSave = async () => {
    const n = parseFloat(ngnVal);
    const s = parseFloat(spVal);
    if (!n || n < 100) {
      alert("Please enter a valid NGN/USD rate (e.g. 1620)");
      return;
    }
    await updateAdminRates(n, isNaN(s) ? 1.5 : s);
    setOpen(false);
    alert(`Rates updated. All visitors now see $1 = ₦${n.toLocaleString()}`);
  };

  return (
    <>
      <button className="admin-btn" onClick={handleOpen} title="Update rates">
        ⚙
      </button>
      <div className={`modal-bg${open ? " open" : ""}`}>
        <div className="modal">
          <div className="modal-header">
            <div className="modal-title">
              {authenticated ? "📅 Update daily rates" : "🔒 Admin Login"}
            </div>
            <button
              className="modal-close"
              onClick={() => {
                setOpen(false);
                setAuthenticated(false);
                setPassword("");
              }}
            >
              ✕
            </button>
          </div>
          {!authenticated ? (
            <div className="rate-entry">
              <div className="rate-inputs" style={{ flexDirection: "column" }}>
                <div className="rate-input-group" style={{ width: "100%" }}>
                  <label>Admin Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  />
                </div>
              </div>
              <button
                className="save-btn"
                onClick={handleLogin}
                style={{ marginTop: "1rem" }}
              >
                Login
              </button>
            </div>
          ) : (
            <>
              <div className="rate-entry">
                <div className="rate-entry-label">Exchange rate settings</div>
                <div className="rate-inputs">
                  <div className="rate-input-group">
                    <label>NGN per USD</label>
                    <input
                      type="number"
                      value={ngnVal}
                      onChange={(e) => setNgnVal(e.target.value)}
                    />
                  </div>
                  <div className="rate-input-group">
                    <label>Spread %</label>
                    <input
                      type="number"
                      step="0.1"
                      value={spVal}
                      onChange={(e) => setSpVal(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="rate-entry">
                <div className="rate-entry-label">Preview</div>
                {COINS.map((c) => {
                  const buy = getBuyRate(c);
                  const sell = getSellRate(c);
                  if (!buy) return null;
                  return (
                    <div
                      key={c}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: ".4rem 0",
                        borderBottom: "1px solid var(--border)",
                        fontSize: ".78rem",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                        {c}
                      </span>
                      <span style={{ color: "var(--green)" }}>
                        Buy: {fmtFull(buy)}
                      </span>
                      <span style={{ color: "var(--ink3)" }}>
                        Sell: {fmtFull(sell)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button className="save-btn" onClick={handleSave}>
                Save &amp; apply rates
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
