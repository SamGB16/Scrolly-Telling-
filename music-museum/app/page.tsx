import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const eras = [
  {
    era: 'Vinyl',
    dateRange: '1877 – 1970s',
    stat: 'Over 100M records sold annually at peak',
    href: '/vinyl',
    direction: 'left',
  },
  {
    era: 'Cassette',
    dateRange: '1963 – 1990s',
    stat: '400M+ Walkmans sold worldwide',
    href: '/cassette',
    direction: 'right',
  },
  {
    era: 'CD',
    dateRange: '1980s – 2000s',
    stat: '2.4B CDs sold in peak year 1999',
    href: '/cd',
    direction: 'left',
  },
  {
    era: 'iPod',
    dateRange: '1990s – 2000s',
    stat: '450M+ iPods sold before discontinuation',
    href: '/ipod',
    direction: 'right',
  },
  {
    era: 'Streaming',
    dateRange: '2008 – Present',
    stat: '600M+ Spotify users worldwide',
    href: '/streaming',
    direction: 'left',
  },
];

export default function Home() {
  return (
    <main>
      {/* Step 1 — Full screen hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#111111] px-8 text-center text-white">
        <h1 className="mb-6 max-w-4xl text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl">
          Music Consumption<br />Museum
        </h1>
        <p className="text-sm font-light uppercase tracking-[0.3em] text-white/50">
          Five eras. One journey. Scroll to begin.
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 9l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Step 2 — Introduction */}
      <section className="mx-auto max-w-[var(--grid-max)] px-8 py-24 md:px-16">
        <ScrollReveal animation="fade">
          <p className="max-w-2xl text-xl leading-relaxed md:text-2xl">
            Every decade brought a new technology that rewired the way humanity listens.
            This museum traces five revolutions — and asks what{' '}
            <span style={{ color: 'var(--color-accent)' }}>each one cost us, and gave us</span>.
          </p>
        </ScrollReveal>
      </section>

      {/* Step 3 — Era previews */}
      <section className="border-t border-foreground/10">
        {eras.map((item, i) => (
          <ScrollReveal
            key={item.era}
            animation={item.direction === 'left' ? 'slide-left' : 'fade'}
            className={item.direction === 'right' ? 'slide-right' : ''}
          >
            <Link
              href={item.href}
              className="group flex flex-col gap-4 border-b border-foreground/10 px-8 py-12 transition-colors hover:bg-foreground/5 md:flex-row md:items-center md:justify-between md:px-16"
            >
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-foreground/40">
                  Era {String(i + 1).padStart(2, '0')}
                </p>
                <h2
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.era}
                </h2>
                <p className="mt-1 text-sm text-foreground/60">{item.dateRange}</p>
              </div>
              <div className="md:text-right">
                <p className="text-sm text-foreground/70">{item.stat}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-foreground/30 transition-colors group-hover:text-[#D4A853]">
                  Enter exhibit →
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      {/* Step 4 — Call to action */}
      <section className="flex flex-col items-center px-8 py-24 text-center">
        <ScrollReveal animation="fade">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to begin?
          </h2>
          <p className="mb-10 text-foreground/60">
            Start your journey at the very beginning — the age of vinyl.
          </p>
          <Link
            href="/vinyl"
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            Enter the Exhibition
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
