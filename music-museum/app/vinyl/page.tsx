import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function VinylPage() {
  return (
    <main>
      <ExhibitHero
        era="Vinyl"
        dateRange="1877 – 1970s"
        description="Before playlists, before streaming, before the click of a button — there was the groove. The phonograph gave the world its first encounter with recorded sound, and the LP record became the canvas of the twentieth century."
      />
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/vinyl.jpg"
          alt="A vinyl record and phonograph needle, circa mid-twentieth century"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <Panel>
        <ArtifactDisplay
          name="The Phonograph / LP Record"
          keyFact="Thomas Edison invented the phonograph in 1877, making it possible to record and replay sound for the first time in human history."
          description="From Edison's tinfoil cylinder to the 33⅓ rpm long-playing record introduced in 1948, vinyl defined music listening for nearly a century. Albums were objects — collected, displayed, and cherished. The crackle of the needle was part of the ritual. Album art became fine art. The listening room became a sanctuary."
          stat="Over 100M records sold annually at peak"
          whyItMatters="Vinyl established the idea that music is a cultural object, not just an experience. It gave listeners a physical relationship with sound — something to hold, display, and pass down. The LP format shaped how artists thought about sequencing and narrative, giving birth to the concept album and the idea that a collection of songs could tell a story. Every format that followed has been, in some way, a response to what vinyl made possible."
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
