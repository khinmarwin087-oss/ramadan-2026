import { useEffect, useState } from 'react';

export function useTasbeeh() {
  const [count, setCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ramadan_tasbeeh_count');
    if (saved) {
      setCount(parseInt(saved, 10));
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever count changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ramadan_tasbeeh_count', count.toString());
    }
  }, [count, isLoaded]);

  const increment = () => {
    setCount(prev => prev + 1);
    // Trigger haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const reset = () => {
    if (confirm('Reset Tasbeeh counter?')) {
      setCount(0);
    }
  };

  const addMultiple = (amount: number) => {
    setCount(prev => prev + amount);
  };

  return { count, increment, reset, addMultiple, isLoaded };
}
