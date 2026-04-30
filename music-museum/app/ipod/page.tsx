import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function IpodPage() {
  return (
    <main>
      {/* Step 1 — Full Screen Era Hero */}
      <section
        className="relative flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: "url(/music-museum/ipod.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-8 pt-20 md:px-16 md:pt-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight leading-none text-white md:text-8xl">
            MP3 &amp; iPod
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-white/60">
            1990s – 2000s
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
            The internet was changing everything. Music was becoming data —
            shareable, downloadable, and dangerously free.
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
            Apple iPod (1st Generation, 2001)
          </h3>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 mb-8">
            The iPod was a design statement as much as a music player. Its
            scroll wheel, its white silhouette, its satisfying click — all
            instantly iconic. But its deeper impact was structural: it
            accelerated the unbundling of the album. When every song cost 99
            cents on iTunes, listeners built playlists instead of collections.
            The album, as the primary unit of music, began its long decline.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200}>
          <p
            className="max-w-2xl text-base leading-relaxed"
            style={{ color: "#D4A853" }}
          >
            &ldquo;1,000 songs in your pocket&rdquo; — Steve Jobs introduced
            the first iPod on October 23, 2001, with 5GB of storage and a
            mechanical scroll wheel that became one of the most iconic interface
            designs in consumer electronics history.
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
            450M+
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/70">
            iPods sold before discontinuation — a device that put the entire
            history of recorded music in a single object that fit in a shirt
            pocket, and atomized the album into individual tracks.
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
            The iPod era did something unprecedented: it put the entire history
            of recorded music in a single device that fit in a shirt pocket. For
            the first time, a listener could carry their complete collection
            everywhere. But it also atomized music into individual tracks and
            handed pricing power to a technology company. The music industry
            sold a trillion songs on iTunes and never fully recovered its
            footing. The iPod generation grew up choosing singles, not albums —
            and that expectation reshaped what artists make and how they release
            it.
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
            href="/streaming"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-[#D4A853] transition-colors"
          >
            Next Era: Streaming →
          </Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
