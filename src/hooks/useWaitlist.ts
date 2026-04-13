import { useState, useEffect, useCallback } from 'react';

const TOTAL_SPOTS = 10000;
const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf8jYgl8NTpRwMi1gtwDxwhyFy877q_KJvj9RzXVoRguOBMPg/formResponse';

export function useWaitlist() {
  const [count, setCount] = useState(
    () => parseInt(localStorage.getItem('jjsWLv7') || '247', 10)
  );
  const [showSuccess, setShowSuccess] = useState(false);

  // Slow organic tick
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const delay = 30000 + Math.random() * 60000;
      timeout = setTimeout(() => {
        setCount((prev) => {
          const next = prev + 1;
          localStorage.setItem('jjsWLv7', String(next));
          return next;
        });
        tick();
      }, delay);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const joinWaitlist = useCallback(
    (name: string, email: string, phone: string) => {
      // Submit to Google Forms
      const body = new FormData();
      body.append('entry.2005620554', name);
      body.append('entry.1045781291', email);
      body.append('entry.1065046570', phone);
      fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body }).catch(() => {});

      // Increment counter
      setCount((prev) => {
        const next = prev + 1;
        localStorage.setItem('jjsWLv7', String(next));
        return next;
      });
      setShowSuccess(true);
    },
    []
  );

  const closeSuccess = useCallback(() => setShowSuccess(false), []);

  const position = count + 1;
  const pct = ((count / TOTAL_SPOTS) * 100).toFixed(2);
  const left = TOTAL_SPOTS - count;

  return {
    count,
    position,
    pct,
    left,
    totalSpots: TOTAL_SPOTS,
    showSuccess,
    joinWaitlist,
    closeSuccess,
  };
}
