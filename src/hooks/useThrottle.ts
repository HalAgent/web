import { useCallback, useRef } from 'react';

export function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef<number>(0);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall.current;

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    if (timeSinceLastCall >= delay) {
      callback(...args);
      lastCall.current = now;
    } else {
      timeoutId.current = setTimeout(() => {
        callback(...args);
        lastCall.current = Date.now();
      }, delay - timeSinceLastCall);
    }
  }, [callback, delay]) as T;
} 