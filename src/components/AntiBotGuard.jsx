import { useState, useEffect } from 'react';
import { isBotUserAgent, isHeadlessOrAutomated, checkDatacenterIP, initAntiDevtools } from '../utils/antibot';
import NotFoundPage from '../pages/NotFoundPage';

export default function AntiBotGuard({ children }) {
  const [status, setStatus] = useState(() => {
    // Immediate synchronous check for user-agent & automation indicators
    if (isBotUserAgent() || isHeadlessOrAutomated()) {
      return 'blocked';
    }
    return 'checking';
  });

  useEffect(() => {
    // Enable anti-devtools protection (disables F12 & Ctrl hotkeys)
    initAntiDevtools({ disableRightClick: false, disableHotkeys: true });

    if (status === 'blocked') return;

    let isMounted = true;

    async function runAsyncChecks() {
      // Async Datacenter & Scanner IP check
      const isDatacenter = await checkDatacenterIP();
      if (!isMounted) return;

      if (isDatacenter) {
        setStatus('blocked');
      } else {
        setStatus('allowed');
      }
    }

    runAsyncChecks();

    return () => {
      isMounted = false;
    };
  }, [status]);

  if (status === 'blocked') {
    return <NotFoundPage />;
  }

  // During initial fast async check, allow smooth rendering for clean traffic
  return <>{children}</>;
}
