import { useCountdown, convertTo12Hour } from '@/hooks/useCountdown';
import { Download, Share2 } from 'lucide-react';
import { useRef } from 'react';

export function ShareableCard() {
  const { todayData } = useCountdown();
  const cardRef = useRef<HTMLDivElement>(null);

  if (!todayData) return null;

  const sehriTime12 = convertTo12Hour(todayData.s);
  const iftarTime12 = convertTo12Hour(todayData.i);

  const downloadAsImage = async () => {
    if (!cardRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#001f18',
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = `ramadan-schedule-day-${todayData.r}-2026.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ramadan 2026 Schedule',
          text: `Day ${todayData.r}: Sehri ${sehriTime12} | Iftar ${iftarTime12}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Share failed:', error);
      }
    } else {
      // Fallback: copy to clipboard
      const text = `Ramadan 2026 - Day ${todayData.r}\nSehri: ${sehriTime12}\nIftar: ${iftarTime12}`;
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="space-y-4">
      {/* Shareable Card Preview */}
      <div
        ref={cardRef}
        className="relative w-full rounded-3xl overflow-hidden border-8 border-accent bg-gradient-to-br from-background via-background to-background/80 p-8 text-center"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 10 L61 39 L90 39 L67 57 L78 86 L50 68 L22 86 L33 57 L10 39 L39 39 Z" fill="%23fbbf24" opacity="0.05"/%3E%3C/svg%3E")',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative z-10">
          {/* Arabic Greeting */}
          <h2 className="text-3xl font-bold text-accent mb-4" style={{ fontFamily: "'Reem Kufi', serif" }}>
            بسم الله الرحمن الرحيم
          </h2>

          {/* Day and Date */}
          <div className="mb-6">
            <p className="text-sm text-foreground/60 mb-1">Day {todayData.r}</p>
            <p className="text-2xl font-bold text-primary">{todayData.date}, 2026</p>
          </div>

          {/* Prayer Times */}
          <div className="bg-primary/10 rounded-2xl p-6 mb-6 border border-primary/20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-foreground/60 uppercase tracking-wider mb-2">Sehri Ends</p>
                <p className="text-3xl font-bold text-primary">{sehriTime12}</p>
              </div>
              <div>
                <p className="text-xs text-accent uppercase tracking-wider mb-2">Iftar Starts</p>
                <p className="text-3xl font-bold text-accent">{iftarTime12}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-foreground/40">Ramadan Mubarak 2026 • Yangon, Myanmar</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={downloadAsImage}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-background font-semibold hover:bg-primary/90 transition-colors active:scale-95"
        >
          <Download className="w-4 h-4" />
          Download Card
        </button>
        <button
          onClick={shareCard}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent/90 transition-colors active:scale-95"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
}
