import { useCountdown } from './useCountdown';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const { hours, minutes, seconds, label, isDuringFast, isBeforeSehri } = useCountdown();

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl bg-[#121212]">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-64">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Clock className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
            {isDuringFast ? 'Fasting Time' : isBeforeSehri ? 'Before Sehri' : 'After Iftar'}
          </span>
        </div>

        {/* Countdown Display */}
        <div className="mb-4 text-center">
          <p className="text-sm text-white/60 mb-3 font-medium tracking-wide">{label}</p>
          <div className="flex items-end justify-center gap-2">
            {/* Hours */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-emerald-500 tabular-nums leading-none">
                {hours}
              </div>
              <p className="text-[10px] text-white/40 mt-2 uppercase tracking-wider font-semibold">Hours</p>
            </div>

            <div className="text-4xl text-emerald-500/40 mb-2 font-light">:</div>

            {/* Minutes */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-emerald-500 tabular-nums leading-none">
                {minutes}
              </div>
              <p className="text-[10px] text-white/40 mt-2 uppercase tracking-wider font-semibold">Minutes</p>
            </div>

            <div className="text-4xl text-emerald-500/40 mb-2 font-light">:</div>

            {/* Seconds */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-400 tabular-nums leading-none">
                {seconds}
              </div>
              <p className="text-[10px] text-white/40 mt-2 uppercase tracking-wider font-semibold">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
