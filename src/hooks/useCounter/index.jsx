import { useState, useEffect } from 'react';

const useCounter = (endValue, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (start) {
      let current = 0;
      const increment = endValue / 100;
      const interval = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          clearInterval(interval);
          setCount(endValue);
        } else {
          setCount(current);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [start, endValue]);

  return Math.round(count);
};

export default useCounter;
