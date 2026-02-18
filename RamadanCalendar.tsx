import { getRamadanData, convertTo12Hour } from './useCountdown';
import { Calendar, Search } from 'lucide-react';
import { useState } from 'react';

export function RamadanCalendar() {
  const data = getRamadanData();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = data.filter(day =>
    day.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    day.r.toString().includes(searchTerm)
  );

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-emerald-500/20 bg-[#121212] shadow-xl">
      {/* Header Section */}
      <div className="bg-emerald-500/10 border-b border-emerald-500/20 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-emerald-500" />
          <h3 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Ramadan Timetable (Yangon)</h3>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search by day or date (e.g. Feb 20)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/40 border border-emerald-500/20 text-xs text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
          />
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto custom-scrollbar">
        <table className="w-full text-[11px] text-left border-collapse">
          <thead className="sticky top-0 bg-[#1a1a1a] z-20 shadow-sm">
            <tr className="text-emerald-500 border-b border-emerald-500/20">
              <th className="p-4 text-center font-bold">ရက်</th>
              <th className="p-4 font-bold">နေ့စွဲ</th>
              <th className="p-4 text-center font-bold">ထမင်းစားပိတ်</th>
              <th className="p-4 text-center font-bold">အိဖ်တာရ်ဖွင့်</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.length > 0 ? (
              filtered.map((day) => (
                <tr key={day.r} className="hover:bg-emerald-500/5 transition-colors group">
                  <td className="p-4 text-center font-bold text-emerald-500 bg-emerald-500/5">{day.r}</td>
                  <td className="p-4 text-white/80">{day.date}</td>
                  <td className="p-4 text-center font-mono text-white/70">
                    {day.s} <span className="text-[9px] opacity-40 uppercase">AM</span>
                  </td>
                  <td className="p-4 text-center font-mono text-orange-400 font-bold">
                    {convertTo12Hour(day.i)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-10 text-center text-white/30 italic">ရှာဖွေမှုမတွေ့ရှိပါ...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <div className="px-5 py-3 border-t border-white/5 bg-black/20 text-[10px] text-white/30 flex justify-between items-center">
        <span>Showing {filtered.length} days</span>
        <span className="italic">Yangon Standard Time</span>
      </div>
    </div>
  );
}
