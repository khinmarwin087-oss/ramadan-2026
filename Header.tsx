import { Moon } from 'lucide-react';

export function Header() {
  return (
    <header className="relative py-8 px-4 text-center border-b border-primary/10">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Moon className="w-8 h-8 text-primary animate-pulse" />
        </div>

        {/* Arabic Greeting */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Reem Kufi', serif" }}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            بسم الله الرحمن الرحيم
          </span>
        </h1>

        {/* English subtitle */}
        <p className="text-xs text-primary/60 tracking-[0.3em] uppercase font-semibold">
          Ramadan Kareem 2026
        </p>
      </div>
    </header>
  );
}
