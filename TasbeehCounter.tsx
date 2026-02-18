import { useTasbeeh } from './useTasbeeh';
import { RotateCcw } from 'lucide-react';

export function TasbeehCounter() {
  const { count, increment, reset } = useTasbeeh();

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-8">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h3 className="text-xs font-bold text-primary uppercase tracking-[4px] mb-8">Digital Tasbeeh</h3>
        
        {/* Counter Display */}
        <div className="text-8xl font-light text-primary tabular-nums mb-8 font-mono">
          {count.toString().padStart(4, '0')}
        </div>

        {/* Button Group */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Main Counter Button */}
          <button
            onClick={increment}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl shadow-primary/30 active:scale-95 transition-transform duration-150 flex items-center justify-center border-4 border-background hover:shadow-3xl hover:shadow-primary/40"
          >
            <span className="text-5xl font-bold text-background">+</span>
          </button>

          {/* Reset Button */}
          <button
            onClick={reset}
            className="text-xs opacity-50 hover:opacity-100 transition-opacity uppercase font-bold tracking-widest flex items-center gap-2 text-foreground/60 hover:text-foreground"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
}
