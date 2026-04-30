interface ExhibitHeroProps {
  era: string;
  dateRange: string;
  description: string;
}

export default function ExhibitHero({ era, dateRange, description }: ExhibitHeroProps) {
  return (
    <div className="w-full border-b border-foreground px-8 py-20 md:px-16 md:py-28">
      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
        {dateRange}
      </p>
      <h1 className="text-5xl font-bold uppercase tracking-tight leading-none md:text-7xl">
        {era}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
        {description}
      </p>
    </div>
  );
}
