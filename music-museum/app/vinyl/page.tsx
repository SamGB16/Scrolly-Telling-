import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function VinylPage() {
  return (
    <main>
      {/* Step 1 — Full Screen Era Hero */}
      <section
        className="relative flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: "url(/music-museum/vinyl.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 pt-20 md:px-16 md:pt-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight leading-none text-white md:text-8xl">
            Vinyl
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">
            1877 – 1970s
          </p>
        </div>
        <div className="relative z-10 px-8 pb-12 md:px-16 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">
            Scroll to explore
          </p>
          <span
            className="mt-2 animate-bounce text-xl"
            style={{ color: "#D4A853" }}
          >
            ↓
          </span>
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
            The world had never heard recorded sound. Music existed only in the
            moment — live, fleeting, and unrepeatable.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 3 — Artifact */}
      <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
        <ScrollReveal animation="slide-up" delay={0}>
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#D4A853" }}
          >
            The Device
          </h2>
          <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
            The Phonograph / LP Record
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 mb-8">
            From Edison&apos;s tinfoil cylinder to the 33⅓ rpm long-playing
            record introduced in 1948, vinyl defined music listening for nearly
            a century. Albums were objects — collected, displayed, and
            cherished. The crackle of the needle was part of the ritual. Album
            art became fine art. The listening room became a sanctuary.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: "#D4A853" }}
          >
            Thomas Edison invented the phonograph in 1877, making it possible
            to record and replay sound for the first time in human history.
          </p>
        </ScrollReveal>
      </section>

      {/* Step 4 — Social Proof */}
      <section className="w-full px-8 py-16 md:px-16 md:py-24 border-b border-foreground/10">
        <ScrollReveal animation="slide-left" delay={0}>
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#D4A853" }}
          >
            The Impact
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={150}>
          <p
            className="text-5xl font-bold uppercase tracking-tight leading-none mb-6 md:text-7xl"
            style={{ color: "#D4A853" }}
          >
            Over 100M
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            Records sold annually at the height of vinyl&apos;s dominance — a
            physical medium that defined how a century understood music as a
            cultural object.
          </p>
        </ScrollReveal>
      </section>

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
            Vinyl established the idea that music is a cultural object, not just
            an experience. It gave listeners a physical relationship with sound —
            something to hold, display, and pass down. The LP format shaped how
            artists thought about sequencing and narrative, giving birth to the
            concept album and the idea that a collection of songs could tell a
            story. Every format that followed has been, in some way, a response
            to what vinyl made possible.
          </p>
        </section>
      </ScrollReveal>

      {/* Step 6 — Navigation */}
      <ScrollReveal animation="fade">
        <section className="w-full px-8 py-12 md:px-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-[#D4A853] transition-colors"
          >
            ← Back to Exhibition
          </Link>
          <Link
            href="/cassette"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-[#D4A853] transition-colors"
          >
            Next Era: Cassette &amp; Walkman →
          </Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
