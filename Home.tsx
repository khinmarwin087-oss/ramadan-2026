import { Header } from './Header';
import { CountdownTimer } from './CountdownTimer';
import { TodaySchedule } from './TodaySchedule';
import { TasbeehCounter } from './TasbeehCounter';
import { QuickLinks } from './QuickLinks';
import { RamadanCalendar } from './RamadanCalendar';
import { ShareableCard } from './ShareableCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <section><CountdownTimer /></section>
        <section><TodaySchedule /></section>
        <section><QuickLinks /></section>
        <section><TasbeehCounter /></section>
        <section><ShareableCard /></section>
        <section><RamadanCalendar /></section>
        
        <footer className="text-center py-8 text-xs text-white/40 border-t border-emerald-500/10 mt-12">
          <p>May Allah accept from us all. Ramadan Mubarak! 🌙</p>
        </footer>
      </main>
    </div>
  );
}
