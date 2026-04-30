interface EraHeroProps {
  title: string;
  welcome: string;
}

export default function EraHero({ title, welcome }: EraHeroProps) {
  return (
    <div className="w-full border-b border-foreground px-8 py-20 md:px-16 md:py-28">
      <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
        Exhibition
      </p>
      <h1 className="text-5xl font-bold uppercase tracking-tight leading-none md:text-7xl">
        {title}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
        {welcome}
      </p>
    </div>
  );
}
