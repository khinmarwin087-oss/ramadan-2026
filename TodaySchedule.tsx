import { useCountdown, convertTo12Hour } from './useCountdown';
import { Calendar, Sunrise, Sunset } from 'lucide-react';

export function TodaySchedule() {
  const { todayData } = useCountdown();

  // Data မရှိသေးရင် ဘာမှမပြဘဲနေမယ်
  if (!todayData) return null;

  const sehriTime12 = convertTo12Hour(todayData.s);
  const iftarTime12 = convertTo12Hour(todayData.i);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#121212] p-6 shadow-lg">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Today's Schedule</span>
        </div>
        <span className="text-[10px] text-white/40 font-medium">{todayData.date}, 2026</span>
      </div>

      {/* Schedule Content */}
      <div className="relative z-10 flex justify-between items-center gap-4">
        {/* Sehri Time */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sunrise className="w-4 h-4 text-emerald-500" />
            <p className="text-[10px] text-white/60 uppercase font-semibold tracking-wider">Sehri Ends</p>
          </div>
          <h2 className="text-3xl font-bold text-emerald-500 tabular-nums">{sehriTime12}</h2>
          <p className="text-[10px] text-white/30 mt-2">ထမင်းစားပိတ်</p>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-white/10" />

        {/* Iftar Time */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sunset className="w-4 h-4 text-orange-400" />
            <p className="text-[10px] text-orange-400 uppercase font-semibold tracking-wider">Iftar Starts</p>
          </div>
          <h2 className="text-3xl font-bold text-orange-400 tabular-nums">{iftarTime12}</h2>
          <p className="text-[10px] text-white/30 mt-2">ဝါကျွတ်ချိန်</p>
        </div>
      </div>
    </div>
  );
}
