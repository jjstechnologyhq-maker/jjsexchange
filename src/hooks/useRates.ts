import { useState, useEffect, useCallback, useRef } from 'react';

export const COIN_IDS: Record<string, string> = {
  BTC: 'bitcoin',
  ETH: 'ethereum',
  USDT: 'tether',
  BNB: 'binancecoin',
  SOL: 'solana',
};

export const COIN_ICONS: Record<string, string> = {
  BTC: '₿',
  ETH: 'Ξ',
  USDT: '$',
  BNB: 'B',
  SOL: '◎',
  NGN: '₦',
};

export const COIN_COLORS: Record<string, string> = {
  BTC: '#F7931A',
  ETH: '#627EEA',
  USDT: '#26A17B',
  BNB: '#F3BA2F',
  SOL: '#9945FF',
  NGN: '#1A7A4A',
};

const DEFAULT_NGN_PER_USD = 1620;
const DEFAULT_SPREAD = 1.5;

const RATE_API =
  'https://script.google.com/macros/s/AKfycbxxhGB7ka35PLlo3r2099Ko_or5I89Zq_zkCHwk0c3mz94tJDASjM2hoPNf6cFguVQtkg/exec';

export function fmtNaira(n: number): string {
  if (n >= 1000000)
    return (
      '₦' +
      (n / 1000000).toFixed(n >= 10000000 ? 0 : 1).replace(/\.0$/, '') +
      'M'
    );
  if (n >= 1000) return '₦' + Math.round(n).toLocaleString();
  return '₦' + n.toFixed(2);
}

export function fmtFull(n: number): string {
  return '₦' + Math.round(n).toLocaleString();
}

export function useRates() {
  const [usdPrices, setUsdPrices] = useState<Record<string, number>>({
    BTC: 0,
    ETH: 0,
    USDT: 1,
    BNB: 0,
    SOL: 0,
  });
  const [ngnPerUsd, setNgnPerUsd] = useState(
    () => parseFloat(localStorage.getItem('jjsNgnRate') || '') || DEFAULT_NGN_PER_USD
  );
  const [spread, setSpread] = useState(
    () => parseFloat(localStorage.getItem('jjsSpread') || '') || DEFAULT_SPREAD
  );
  const lastFetch = useRef(0);

  const fetchGlobalRate = useCallback(async () => {
    try {
      const res = await fetch(RATE_API, {
        signal: AbortSignal.timeout(4000),
      });
      const data = await res.json();
      if (data?.ngnPerUsd) {
        const newNgn = parseFloat(data.ngnPerUsd);
        const newSpread = parseFloat(data.spread || DEFAULT_SPREAD);
        setNgnPerUsd(newNgn);
        setSpread(newSpread);
        localStorage.setItem('jjsNgnRate', String(newNgn));
        localStorage.setItem('jjsSpread', String(newSpread));
      }
    } catch {
      // Offline or not configured
    }
  }, []);

  const fetchLivePrices = useCallback(async () => {
    const now = Date.now();
    if (now - lastFetch.current < 60000) return;
    try {
      const ids = Object.values(COIN_IDS).join(',');
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
        { signal: AbortSignal.timeout(5000) }
      );
      const data = await res.json();
      setUsdPrices({
        BTC: data.bitcoin?.usd || 0,
        ETH: data.ethereum?.usd || 0,
        USDT: data.tether?.usd || 1,
        BNB: data.binancecoin?.usd || 0,
        SOL: data.solana?.usd || 0,
      });
      lastFetch.current = now;
    } catch {
      setUsdPrices((prev) => {
        if (!prev.BTC) return { BTC: 62000, ETH: 3200, USDT: 1, BNB: 550, SOL: 140 };
        return prev;
      });
    }
  }, []);

  const getBuyRate = useCallback(
    (coin: string) => {
      if (coin === 'NGN') return 1;
      const usdPrice = usdPrices[coin] || 0;
      if (!usdPrice) return 0;
      return Math.round(usdPrice * ngnPerUsd * (1 - spread / 100));
    },
    [usdPrices, ngnPerUsd, spread]
  );

  const getSellRate = useCallback(
    (coin: string) => {
      if (coin === 'NGN') return 1;
      const usdPrice = usdPrices[coin] || 0;
      if (!usdPrice) return 0;
      return Math.round(usdPrice * ngnPerUsd * (1 + spread / 100));
    },
    [usdPrices, ngnPerUsd, spread]
  );

  const updateAdminRates = useCallback(
    async (newNgn: number, newSpread: number) => {
      setNgnPerUsd(newNgn);
      setSpread(newSpread);
      localStorage.setItem('jjsNgnRate', String(newNgn));
      localStorage.setItem('jjsSpread', String(newSpread));
      try {
        await fetch(`${RATE_API}?ngnPerUsd=${newNgn}&spread=${newSpread}&write=1`, {
          signal: AbortSignal.timeout(5000),
        });
      } catch {
        /* silent */
      }
    },
    []
  );

  useEffect(() => {
    fetchGlobalRate().then(() => fetchLivePrices());
    const interval = setInterval(fetchLivePrices, 60000);
    return () => clearInterval(interval);
  }, [fetchGlobalRate, fetchLivePrices]);

  return {
    usdPrices,
    ngnPerUsd,
    spread,
    getBuyRate,
    getSellRate,
    fetchLivePrices,
    updateAdminRates,
  };
}
