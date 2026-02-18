import { getRamadanData, convertTo12Hour } from '@/hooks/useCountdown';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

export function RamadanCalendar() {
  const data = getRamadanData();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = data.filter(day =>
    day.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    day.r.toString().includes(searchTerm)
  );

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
      {/* Header */}
      <div className="bg-primary/10 border-b border-primary/20 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-primary" />
          <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Ramadan Timetable (Yangon)</h3>
        </div>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by day or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-background/50 border border-primary/20 text-xs text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-background/80 border-b border-primary/20 text-primary">
            <tr>
              <th className="p-3 text-center font-bold">ရက်</th>
              <th className="p-3 text-left font-bold">နေ့စွဲ</th>
              <th className="p-3 text-center font-bold">ထမင်းစားပိတ်</th>
              <th className="p-3 text-center font-bold">အိဖ်တာရ်ဖွင့်</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/10">
            {filtered.map((day) => (
              <tr key={day.r} className="hover:bg-primary/5 transition-colors">
                <td className="p-3 text-center font-bold text-primary">{day.r}</td>
                <td className="p-3 text-foreground/70">{day.date}</td>
                <td className="p-3 text-center font-mono text-foreground/80">
                  {day.s} <span className="text-[10px] opacity-50">AM</span>
                </td>
                <td className="p-3 text-center font-mono text-accent">
                  {convertTo12Hour(day.i)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results count */}
      <div className="px-4 py-3 border-t border-primary/10 text-xs text-foreground/50 text-center">
        Showing {filtered.length} of {data.length} days
      </div>
    </div>
  );
}
