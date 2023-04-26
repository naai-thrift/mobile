import { useEffect, useRef } from 'react';

export default function useComponentWillMount(
  callback: (...args: any[]) => any
) {
  const mounted = useRef(false);
  if (!mounted.current) callback();

  useEffect(() => {
    mounted.current = true;
  }, []);
}
