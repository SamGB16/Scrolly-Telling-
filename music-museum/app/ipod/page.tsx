import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function IpodPage() {
  return (
    <main>
      <ExhibitHero
        era="MP3 & iPod"
        dateRange="1990s – 2000s"
        description="A thousand songs in your pocket. The MP3 format compressed an album to megabytes, Napster proved the world was ready to share them all, and Apple arrived to make the chaos elegant. The iPod did not just change music — it changed Apple, and Apple changed everything."
      />
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/ipod.jpg"
          alt="Apple iPod first generation with its iconic white design and scroll wheel, 2001"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <Panel>
        <ArtifactDisplay
          name="Apple iPod (1st Generation, 2001)"
          keyFact='"1,000 songs in your pocket" — Steve Jobs introduced the first iPod on October 23, 2001, with 5GB of storage and a mechanical scroll wheel that became one of the most iconic interface designs in consumer electronics history.'
          description="The iPod was a design statement as much as a music player. Its scroll wheel, its white silhouette, its satisfying click — all instantly iconic. But its deeper impact was structural: it accelerated the unbundling of the album. When every song cost 99 cents on iTunes, listeners built playlists instead of collections. The album, as the primary unit of music, began its long decline."
          stat="450M+ iPods sold before discontinuation"
          whyItMatters="The iPod era did something unprecedented: it put the entire history of recorded music in a single device that fit in a shirt pocket. For the first time, a listener could carry their complete collection everywhere. But it also atomized music into individual tracks and handed pricing power to a technology company. The music industry sold a trillion songs on iTunes and never fully recovered its footing. The iPod generation grew up choosing singles, not albums — and that expectation reshaped what artists make and how they release it."
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
