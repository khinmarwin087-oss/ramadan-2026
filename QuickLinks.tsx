import { Compass, Hand, Heart } from 'lucide-react';

export function QuickLinks() {
  const links = [
    {
      icon: Compass,
      label: 'Qibla',
      description: 'Find prayer direction',
      href: 'https://qiblafinder.withgoogle.com/',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Hand,
      label: 'Duas',
      description: 'Islamic prayers',
      href: 'https://www.islamicfinder.org/duas/',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Heart,
      label: 'Charity',
      description: 'Give Zakat',
      href: 'https://www.unicef.org/donate',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
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
            className="relative group rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 to-background p-4 flex flex-col items-center justify-center text-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 active:scale-95"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Icon className={`w-5 h-5 ${link.color}`} />
              <span className="text-xs font-bold text-foreground uppercase tracking-wider">{link.label}</span>
              <span className="text-[10px] text-foreground/50 leading-tight">{link.description}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
