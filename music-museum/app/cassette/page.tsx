import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function CassettePage() {
  return (
    <main>
      <ExhibitHero
        era="Cassette & Walkman"
        dateRange="1963 – 1990s"
        description="Music escaped the living room. The compact cassette made recording and carrying music possible for everyone, and the Walkman turned listening into a personal, portable act. The mix tape became the most intimate form of communication a generation had ever known."
      />
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/walkman.jpg"
          alt="Sony Walkman TPS-L2, the first portable cassette player, released in 1979"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <Panel>
        <ArtifactDisplay
          name="Sony Walkman TPS-L2"
          keyFact="The Sony Walkman TPS-L2 was released on July 1, 1979 in Japan, forever changing how people experienced music in public spaces."
          description="The Walkman was an act of radical individualism. It gave listeners a private soundtrack to the world around them. Suddenly, commutes were concerts and city streets had a score. The mix tape added another layer: a handcrafted sequence of songs, carefully chosen and given to another person as a gift. No format before or since has been so intimate."
          stat="400M+ Walkmans sold worldwide"
          whyItMatters="The Walkman did something no technology had done before: it made listening private in public. It separated the listener from their environment and gave them sovereignty over their own sonic world. This shift — from shared listening to personal listening — permanently changed the relationship between individuals and music. It also democratized creation: the cassette let anyone record, copy, and distribute sound, laying the cultural groundwork for the remix and sampling culture that followed."
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
