import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export function TasbeehCounter() {
  // LocalStorage ကနေ count ကို ပြန်ယူတယ်၊ မရှိရင် 0 ကစမယ်
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('tasbeeh-count');
    return saved ? parseInt(saved, 10) : 0;
  });

  // Count ပြောင်းတိုင်း LocalStorage မှာ သိမ်းမယ်
  useEffect(() => {
    localStorage.setItem('tasbeeh-count', count.toString());
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const reset = () => {
    if (confirm('ရေတွက်ထားသည်များကို သုညပြန်လုပ်မှာ သေချာပါသလား?')) {
      setCount(0);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#121212] p-8 shadow-xl">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h3 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[4px] mb-8">Digital Tasbeeh</h3>
        
        {/* Counter Display */}
        <div className="text-7xl font-light text-emerald-500 tabular-nums mb-8 font-mono bg-black/30 px-6 py-4 rounded-2xl border border-white/5">
          {count.toString().padStart(4, '0')}
        </div>

        {/* Button Group */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Main Counter Button */}
          <button
            onClick={increment}
            className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-emerald-500/20 active:scale-90 transition-all duration-100 flex items-center justify-center border-4 border-[#121212] hover:brightness-110"
          >
            <span className="text-4xl font-bold text-white">+</span>
          </button>

          {/* Reset Button */}
          <button
            onClick={reset}
            className="text-[10px] opacity-40 hover:opacity-100 transition-opacity uppercase font-bold tracking-widest flex items-center gap-2 text-white"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
}
