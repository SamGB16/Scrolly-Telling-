import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StreamingPage() {
  return (
    <main>
      {/* Step 1 — Full Screen Era Hero */}
      <section
        className="relative flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: "url(/music-museum/streaming.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 pt-20 md:px-16 md:pt-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight leading-none text-white md:text-8xl">
            Streaming
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">
            2008 – Present
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
            Ownership gave way to access. Why buy when you could stream
            everything ever recorded for less than a coffee a day?
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
            Spotify
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 mb-8">
            Streaming did not just change how we listen. It changed what gets
            made, how artists are paid, and which songs the world hears.
            Algorithms surface the obscure and flatten the global. A bedroom
            producer in Lagos and a major label act in New York compete on the
            same playlist. Listening data flows back to labels and artists in
            real time. The curator is now a machine — and it knows your taste
            better than you do.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: "#D4A853" }}
          >
            Spotify launched on October 7, 2008 in Sweden, founded by Daniel Ek
            and Martin Lorentzon. It offered legal, free streaming supported by
            ads — a direct answer to a decade of piracy that had hollowed out
            the music industry.
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
            600M+
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            Spotify users worldwide — making the algorithm the most influential
            tastemaker in history, more powerful than any radio DJ, magazine, or
            record label that came before it.
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
            Streaming is the final room in this museum, but it is not the final
            chapter. It resolved the piracy crisis that the CD inadvertently
            created, but introduced new tensions: artists earn fractions of a
            cent per stream while platforms accumulate enormous cultural power.
            The algorithm has become the most influential tastemaker in history —
            more powerful than any radio DJ, magazine, or record label.
            Understanding how we arrived here, from Edison&apos;s cylinder to
            Spotify&apos;s recommendation engine, is essential to understanding
            what music is, who controls it, and what it might become.
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
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/20">
            End of Exhibition
          </span>
        </section>
      </ScrollReveal>
    </main>
  );
}
