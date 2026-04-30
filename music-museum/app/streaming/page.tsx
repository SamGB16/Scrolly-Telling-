import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function StreamingPage() {
  return (
    <main>
      <ExhibitHero
        era="Streaming"
        dateRange="2008 – Present"
        description="Every song ever recorded. Available everywhere. Instantly. Ownership gave way to access, the album gave way to the algorithm, and the collector gave way to the curator. We are still living this revolution — and its end is not yet in sight."
      />
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/streaming.jpg"
          alt="A person listening to music on a smartphone, representing the streaming era from 2008 to present"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <Panel>
        <ArtifactDisplay
          name="Spotify"
          keyFact="Spotify launched on October 7, 2008 in Sweden, founded by Daniel Ek and Martin Lorentzon. It offered legal, free streaming supported by ads — a direct answer to a decade of piracy that had hollowed out the music industry."
          description="Streaming did not just change how we listen. It changed what gets made, how artists are paid, and which songs the world hears. Algorithms surface the obscure and flatten the global. A bedroom producer in Lagos and a major label act in New York compete on the same playlist. Listening data flows back to labels and artists in real time. The curator is now a machine — and it knows your taste better than you do."
          stat="600M+ Spotify users worldwide"
          whyItMatters="Streaming is the final room in this museum, but it is not the final chapter. It resolved the piracy crisis that the CD inadvertently created, but introduced new tensions: artists earn fractions of a cent per stream while platforms accumulate enormous cultural power. The algorithm has become the most influential tastemaker in history — more powerful than any radio DJ, magazine, or record label. Understanding how we arrived here, from Edison's cylinder to Spotify's recommendation engine, is essential to understanding what music is, who controls it, and what it might become."
        />
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            ← Back to Exhibition
          </Link>
        </div>
      </Panel>
    </main>
  );
}
