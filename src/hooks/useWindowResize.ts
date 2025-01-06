import { useEffect } from 'react';
import { useThrottle } from './useThrottle';

export function useWindowResize(callback: () => void, delay = 200): void {
  const throttledCallback = useThrottle(callback, delay);

  useEffect(() => {
    window.addEventListener('resize', throttledCallback);
    return () => window.removeEventListener('resize', throttledCallback);
  }, [throttledCallback]);
} 