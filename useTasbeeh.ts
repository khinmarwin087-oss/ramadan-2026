import { useEffect, useState } from 'react';

export function useTasbeeh() {
  const [count, setCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // စဖွင့်ချင်း localStorage ကနေ အဟောင်းကို ပြန်ယူမယ်
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ramadan_tasbeeh_count');
      if (saved) {
        setCount(parseInt(saved, 10));
      }
    } catch (e) {
      console.error("Failed to load tasbeeh count", e);
    }
    setIsLoaded(true);
  }, []);

  // Count တိုးတိုင်း localStorage မှာ သိမ်းမယ်
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ramadan_tasbeeh_count', count.toString());
    }
  }, [count, isLoaded]);

  const increment = () => {
    setCount(prev => prev + 1);
    
    // ဖုန်းနဲ့နှိပ်ရင် တုန်ခါမှုပေးဖို့ (ပိုပြီး လက်တွေ့ဆန်အောင်)
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const reset = () => {
    if (window.confirm('ရေတွက်ထားသည်များကို သုညပြန်လုပ်မှာ သေချာပါသလား?')) {
      setCount(0);
    }
  };

  const addMultiple = (amount: number) => {
    setCount(prev => prev + amount);
  };

  return { count, increment, reset, addMultiple, isLoaded };
}
