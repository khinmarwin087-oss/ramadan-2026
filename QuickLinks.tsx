import { Compass, Hand, Heart } from 'lucide-react';

export function QuickLinks() {
  const links = [
    {
      icon: Compass,
      label: 'Qibla',
      description: 'Direction',
      href: 'https://qiblafinder.withgoogle.com/',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    {
      icon: Hand,
      label: 'Duas',
      description: 'Prayers',
      href: 'https://www.islamicfinder.org/duas/',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20'
    },
    {
      icon: Heart,
      label: 'Zakat',
      description: 'Charity',
      href: 'https://www.unicef.org/donate',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20'
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group rounded-2xl overflow-hidden border ${link.borderColor} bg-[#1a1a1a] p-3 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all duration-300 active:scale-95`}
          >
            {/* Hover Background Layer */}
            <div className={`absolute inset-0 ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Icon className={`w-5 h-5 ${link.color}`} />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                {link.label}
              </span>
              <span className="text-[8px] text-white/40 leading-tight">
                {link.description}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
