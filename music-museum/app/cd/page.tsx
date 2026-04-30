import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CdPage() {
  return (
    <main>
      {/* Step 1 — Full Screen Era Hero */}
      <section
        className="relative flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: "url(/music-museum/cd.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 pt-20 md:px-16 md:pt-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight leading-none text-white md:text-8xl">
            CD &amp; Discman
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">
            1980s – 2000s
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
            The digital revolution was beginning. Consumers wanted perfect sound
            and the convenience of skipping tracks instantly.
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
            Compact Disc / Sony Discman
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 mb-8">
            The CD rewrote the economics of music. Back catalogues were
            repurchased in the new format, and record labels posted record
            profits through the 1990s. Then the Discman arrived and portable
            digital listening became possible. At its peak in 1999, the industry
            sold 2.4 billion CDs in a single year — a number that will never be
            matched in physical media again.
          </p>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: "#D4A853" }}
          >
            The compact disc was introduced commercially in 1982, co-developed
            by Sony and Philips. It could hold 74 minutes of audio — reportedly
            enough to fit Beethoven&apos;s Ninth Symphony.
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
            2.4B
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            CDs sold in peak year 1999 — a volume of physical media that will
            never be surpassed, and a digital format that unwittingly seeded
            its own disruption.
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
            The CD marked the moment music became fully digital — and digital
            meant copyable. That was its gift and its undoing. The same clarity
            and precision that made the format so compelling also made it
            trivially easy to rip, copy, and eventually share over the internet.
            The CD era produced the highest revenues in music history, but it
            also planted the seed of the industry&apos;s disruption. Without the
            CD, there is no MP3. Without MP3, no Napster. Without Napster, no
            streaming. Every revolution in this museum walks through this room.
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
            href="/ipod"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            Next Era: MP3 &amp; iPod →
          </Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
