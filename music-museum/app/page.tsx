import EraHero from "@/components/content/EraHero";
import ExhibitCard from "@/components/content/ExhibitCard";
import Panel from "@/components/ui/Panel";
import SectionHeading from "@/components/ui/SectionHeading";

const eras = [
  {
    era: "Vinyl",
    dateRange: "1877 – 1970s",
    description:
      "Before playlists and platforms, there were grooves. The phonograph crackled to life in 1877 and the LP record gave the twentieth century its soundtrack. Every needle drop was an event.",
    stat: "Over 100M records sold annually at peak",
    href: "/vinyl",
  },
  {
    era: "Cassette & Walkman",
    dateRange: "1963 – 1990s",
    description:
      "Music went portable and personal. The Walkman put a private concert in your pocket and the mix tape became a love language. Listening was never a passive act again.",
    stat: "400M+ Walkmans sold worldwide",
    href: "/cassette",
  },
  {
    era: "CD & Discman",
    dateRange: "1980s – 2000s",
    description:
      "Crystal-clear digital audio arrived in a silver disc the size of your palm. The Discman followed the Walkman's lead, and the world entered its most prolific era of music buying.",
    stat: "2.4B CDs sold in peak year 1999",
    href: "/cd",
  },
  {
    era: "MP3 & iPod",
    dateRange: "1990s – 2000s",
    description:
      "A thousand songs in your pocket. The MP3 compressed the world's music libraries into hard drives, and the iPod made carrying them elegant. The album began its long goodbye.",
    stat: "450M+ iPods sold before discontinuation",
    href: "/ipod",
  },
  {
    era: "Streaming",
    dateRange: "2008 – Present",
    description:
      "Every song ever recorded, available everywhere, instantly. Ownership gave way to access. The curator replaced the collector. We are still living this revolution.",
    stat: "600M+ Spotify users worldwide",
    href: "/streaming",
  },
];

export default function Home() {
  return (
    <main>
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/hero.jpg"
          alt="A vintage gramophone, the earliest device for playing recorded music"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <EraHero
        title="Music Consumption Museum"
        welcome="Step inside. Five rooms, five revolutions. Each exhibit traces a technology that rewired the way humanity hears itself — from the first grooved cylinder to the infinite stream. Your journey begins here."
      />
      <Panel>
        <SectionHeading
          heading="The Exhibitions"
          subtitle="Five eras. Five rooms. Follow the sequence or explore freely."
        />
        <div className="grid grid-cols-1 gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {eras.map((item, i) => (
            <div key={item.era} className="bg-background">
              <ExhibitCard
                era={item.era}
                dateRange={item.dateRange}
                description={item.description}
                stat={item.stat}
                href={item.href}
                index={i + 1}
              />
            </div>
          ))}
        </div>
      </Panel>
    </main>
  );
}
