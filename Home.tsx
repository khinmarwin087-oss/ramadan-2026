import { Header } from '@/components/Header';
import { CountdownTimer } from '@/components/CountdownTimer';
import { TodaySchedule } from '@/components/TodaySchedule';
import { TasbeehCounter } from '@/components/TasbeehCounter';
import { QuickLinks } from '@/components/QuickLinks';
import { RamadanCalendar } from '@/components/RamadanCalendar';
import { ShareableCard } from '@/components/ShareableCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Countdown Timer */}
        <section>
          <CountdownTimer />
        </section>

        {/* Today's Schedule */}
        <section>
          <TodaySchedule />
        </section>

        {/* Quick Links */}
        <section>
          <QuickLinks />
        </section>

        {/* Digital Tasbeeh */}
        <section>
          <TasbeehCounter />
        </section>

        {/* Shareable Card */}
        <section>
          <ShareableCard />
        </section>

        {/* Ramadan Calendar */}
        <section>
          <RamadanCalendar />
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-xs text-foreground/40 border-t border-primary/10 mt-12">
          <p>May Allah accept from us all. Ramadan Mubarak! 🌙</p>
        </footer>
      </main>
    </div>
  );
}
