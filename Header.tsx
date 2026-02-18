import { Moon } from 'lucide-react';

export function Header() {
  return (
    <header className="relative py-12 px-4 text-center border-b border-emerald-500/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {/* Animated Moon Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Moon className="w-8 h-8 text-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Bismillah with Premium Gradient */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Reem Kufi', serif" }}>
          <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent drop-shadow-sm">
            بسم الله الرحمن الرحيم
          </span>
        </h1>

        {/* Subtitle with spacing */}
        <p className="text-[10px] md:text-xs text-emerald-500/60 tracking-[0.4em] uppercase font-bold">
          Ramadan Kareem 2026
        </p>
      </div>
    </header>
  );
}
