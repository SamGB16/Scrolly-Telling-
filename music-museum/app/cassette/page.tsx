import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CassettePage() {
  return (
    <main>
      {/* Step 1 — Full Screen Era Hero */}
      <section
        className="relative flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: "url(/music-museum/walkman.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 pt-20 md:px-16 md:pt-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight leading-none text-white md:text-8xl">
            Cassette
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">
            1963 – 1990s
          </p>
        </div>
        <div className="relative z-10 px-8 pb-12 md:px-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            Scroll to explore
          </p>
          <span className="mt-2 text-white/50 text-xl">↓</span>
        </div>
      </section>

      {/* Step 2 — Context */}
      <ScrollReveal animation="fade">
        <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#D4A853" }}
          >
            The World Then
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed text-foreground/70">
            Music was freeing itself from the living room. A new generation
            wanted their soundtrack everywhere they went.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 3 — Artifact */}
      <ScrollReveal animation="slide-up">
        <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
            The Device
          </h2>
          <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
            Sony Walkman TPS-L2
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 mb-8">
            The Walkman was an act of radical individualism. It gave listeners a
            private soundtrack to the world around them. Suddenly, commutes were
            concerts and city streets had a score. The mix tape added another
            layer: a handcrafted sequence of songs, carefully chosen and given
            to another person as a gift. No format before or since has been so
            intimate.
          </p>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: "#D4A853" }}
          >
            The Sony Walkman TPS-L2 was released on July 1, 1979 in Japan,
            forever changing how people experienced music in public spaces.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 4 — Social Proof */}
      <ScrollReveal animation="slide-left">
        <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-6">
            The Impact
          </h2>
          <p
            className="text-5xl font-bold uppercase tracking-tight leading-none mb-6 md:text-7xl"
            style={{ color: "#D4A853" }}
          >
            400M+
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            Walkmans sold worldwide — a device that turned personal listening
            into a universal habit and gave an entire generation sovereignty over
            their own sonic world.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 5 — Why This Matters */}
      <ScrollReveal animation="fade">
        <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#D4A853" }}
          >
            Why This Matters
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
            The Walkman did something no technology had done before: it made
            listening private in public. It separated the listener from their
            environment and gave them sovereignty over their own sonic world.
            This shift — from shared listening to personal listening —
            permanently changed the relationship between individuals and music.
            It also democratized creation: the cassette let anyone record, copy,
            and distribute sound, laying the cultural groundwork for the remix
            and sampling culture that followed.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 6 — Navigation */}
      <ScrollReveal animation="fade">
        <section className="w-full px-8 py-12 md:px-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            ← Back to Exhibition
          </Link>
          <Link
            href="/cd"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            Next Era: CD &amp; Discman →
          </Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
