import { useCountdown, convertTo12Hour } from '@/hooks/useCountdown';
import { Calendar, Sunrise, Sunset } from 'lucide-react';

export function TodaySchedule() {
  const { todayData } = useCountdown();

  if (!todayData) return null;

  const sehriTime12 = convertTo12Hour(todayData.s);
  const iftarTime12 = convertTo12Hour(todayData.i);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/10">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-xs text-primary font-bold uppercase tracking-widest">Today's Schedule</span>
        </div>
        <span className="text-xs text-foreground/50 font-medium">{todayData.date}, 2026</span>
      </div>

      {/* Schedule Content */}
      <div className="flex justify-between items-center gap-4">
        {/* Sehri Time */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sunrise className="w-4 h-4 text-primary" />
            <p className="text-xs text-foreground/60 uppercase font-semibold tracking-wider">Sehri Ends</p>
          </div>
          <h2 className="text-4xl font-bold text-primary">{sehriTime12}</h2>
          <p className="text-xs text-foreground/40 mt-2">ထမင်းစားပိတ်ချိန်</p>
        </div>

        {/* Divider */}
        <div className="h-16 w-px bg-primary/10" />

        {/* Iftar Time */}
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sunset className="w-4 h-4 text-accent" />
            <p className="text-xs text-accent uppercase font-semibold tracking-wider">Iftar Starts</p>
          </div>
          <h2 className="text-4xl font-bold text-accent">{iftarTime12}</h2>
          <p className="text-xs text-foreground/40 mt-2">အိဖ်တာရ်ဖွင့်ချိန်</p>
        </div>
      </div>
    </div>
  );
}
