import { useCountdown } from './useCountdown';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const { hours, minutes, seconds, label, isDuringFast, isBeforeSehri } = useCountdown();

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-64">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {isDuringFast ? 'Fasting Time' : isBeforeSehri ? 'Before Sehri' : 'After Iftar'}
          </span>
        </div>

        {/* Countdown Display */}
        <div className="mb-4 text-center">
          <p className="text-sm text-foreground/60 mb-3 font-medium tracking-wide">{label}</p>
          <div className="flex items-end justify-center gap-2">
            {/* Hours */}
            <div className="text-center">
              <div className="text-6xl font-bold text-primary tabular-nums leading-none">
                {hours}
              </div>
              <p className="text-xs text-foreground/50 mt-2 uppercase tracking-wider font-semibold">Hours</p>
            </div>

            {/* Separator */}
            <div className="text-4xl text-primary/40 mb-2 font-light">:</div>

            {/* Minutes */}
            <div className="text-center">
              <div className="text-6xl font-bold text-primary tabular-nums leading-none">
                {minutes}
              </div>
              <p className="text-xs text-foreground/50 mt-2 uppercase tracking-wider font-semibold">Minutes</p>
            </div>

            {/* Separator */}
            <div className="text-4xl text-primary/40 mb-2 font-light">:</div>

            {/* Seconds */}
            <div className="text-center">
              <div className="text-6xl font-bold text-accent tabular-nums leading-none">
                {seconds}
              </div>
              <p className="text-xs text-foreground/50 mt-2 uppercase tracking-wider font-semibold">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
