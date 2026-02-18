import { useCountdown, convertTo12Hour } from './useCountdown';
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
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0d0d0d',
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `ramadan-day-${todayData.r}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      alert('Download failed. Please try again.');
    }
  };

  const shareCard = async () => {
    const text = `Ramadan 2026 - Day ${todayData.r}\nSehri: ${sehriTime12}\nIftar: ${iftarTime12}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Ramadan 2026', text, url: window.location.href });
      } catch (e) {}
    } else {
      navigator.clipboard.writeText(text);
      alert('စာသားကို Copy ကူးလိုက်ပါပြီ!');
    }
  };

  return (
    <div className="space-y-4">
      <div
        ref={cardRef}
        className="relative w-full rounded-3xl overflow-hidden border-4 border-orange-400 bg-[#0d0d0d] p-8 text-center"
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-orange-400 mb-4" style={{ fontFamily: "'Reem Kufi', serif" }}>
            بسم الله الرحمن الرحيم
          </h2>
          <div className="mb-6">
            <p className="text-xs text-white/50 mb-1">Day {todayData.r}</p>
            <p className="text-xl font-bold text-emerald-500">{todayData.date}, 2026</p>
          </div>
          <div className="bg-emerald-500/10 rounded-2xl p-6 mb-6 border border-emerald-500/20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase mb-2">Sehri Ends</p>
                <p className="text-2xl font-bold text-emerald-500">{sehriTime12}</p>
              </div>
              <div>
                <p className="text-[10px] text-orange-400 uppercase mb-2">Iftar Starts</p>
                <p className="text-2xl font-bold text-orange-400">{iftarTime12}</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/30">Ramadan Mubarak 2026 • Yangon</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={downloadAsImage} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold active:scale-95 transition-all text-sm">
          <Download className="w-4 h-4" /> Save Image
        </button>
        <button onClick={shareCard} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange-500 text-white font-semibold active:scale-95 transition-all text-sm">
          <Share2 className="w-4 h-4" /> Share Info
        </button>
      </div>
    </div>
  );
}
