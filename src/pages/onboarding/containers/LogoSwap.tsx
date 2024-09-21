import { useState, useEffect, useRef } from 'react';
import { Logo, Tuto1, Tuto2, Tuto3, Tuto4 } from '../../../components/Icon/onboarding/Logo';

export function LogoSwap() {
  const [count, setCount] = useState(0);
  const interval = useRef<number | null>(null); // number와 null을 모두 허용

  useEffect(() => {
    interval.current = window.setInterval(() => {
      // 브라우저 환경에서는 window.setInterval 사용
      setCount((prev) => (prev + 1) % 5);
    }, 3000);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <span className="rotator">
      <span className={count === 0 ? 'active' : 'item'}>
        <Tuto1 />
      </span>
      <span className={count === 1 ? 'active' : 'item'}>
        <Tuto2 />
      </span>
      <span className={count === 2 ? 'active' : 'item'}>
        <Tuto3 />
      </span>
      <span className={count === 3 ? 'active' : 'item'}>
        <Tuto4 />
      </span>
      <span className={count === 4 ? 'active' : 'item'}>
        <Logo />
      </span>
    </span>
  );
}
