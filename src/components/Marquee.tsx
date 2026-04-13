import { fmtFull } from '../hooks/useRates';

const COINS = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];

interface MarqueeProps {
  getBuyRate: (coin: string) => number;
  getSellRate: (coin: string) => number;
}

export default function Marquee({ getBuyRate, getSellRate }: MarqueeProps) {
  const coinItems = COINS.map((c) => ({
    type: 'coin' as const,
    coin: c,
    buy: fmtFull(getBuyRate(c)),
    sell: fmtFull(getSellRate(c)),
  }));

  const extraItems = [
    { type: 'text' as const, text: '🏅 $200,000 prize pool at launch' },
    { type: 'text' as const, text: 'Trade → Earn Points → Get Paid' },
    { type: 'text' as const, text: 'CAC Registered · RC 8051071' },
    { type: 'text' as const, text: 'SCUML Certified · SC 251835045' },
  ];

  const allItems = [...coinItems.map(i => ({ ...i })), ...extraItems];
  // Duplicate for seamless loop
  const doubled = [...allItems, ...allItems];

  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span className="mitem" key={i}>
            {item.type === 'coin' ? (
              <>
                <span className="mcoin">{item.coin}/NGN</span>
                &nbsp;Buy {item.buy} · Sell {item.sell}
              </>
            ) : (
              item.text
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
