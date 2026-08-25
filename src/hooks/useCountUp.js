import { useState, useEffect } from 'react';

/**
 * Hook tạo hiệu ứng số đếm count-up với easing easeOut
 */
export const useCountUp = (targetNumber, duration = 2000, startNow = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;

    let startTime = null;
    const isDecimal = Number(targetNumber) % 1 !== 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo easing function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetNumber;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetNumber, duration, startNow]);

  return count;
};
