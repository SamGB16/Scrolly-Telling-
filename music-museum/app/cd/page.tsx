import Link from "next/link";
import ExhibitHero from "@/components/content/ExhibitHero";
import ArtifactDisplay from "@/components/content/ArtifactDisplay";
import Panel from "@/components/ui/Panel";

export default function CdPage() {
  return (
    <main>
      <ExhibitHero
        era="CD & Discman"
        dateRange="1980s – 2000s"
        description="Digital audio arrived in a silver disc the size of your palm. No hiss, no warping, no side B — just perfect sound, on demand. The CD triggered the greatest consumer music boom in history and the Discman carried it out the door."
      />
      <div className="w-full border-b border-foreground/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/music-museum/cd.jpg"
          alt="A compact disc reflecting light, introduced commercially in 1982"
          className="w-full object-cover max-h-[480px]"
        />
      </div>
      <Panel>
        <ArtifactDisplay
          name="Compact Disc / Sony Discman"
          keyFact="The compact disc was introduced commercially in 1982, co-developed by Sony and Philips. It could hold 74 minutes of audio — reportedly enough to fit Beethoven's Ninth Symphony."
          description="The CD rewrote the economics of music. Back catalogues were repurchased in the new format, and record labels posted record profits through the 1990s. Then the Discman arrived and portable digital listening became possible. At its peak in 1999, the industry sold 2.4 billion CDs in a single year — a number that will never be matched in physical media again."
          stat="2.4B CDs sold in peak year 1999"
          whyItMatters="The CD marked the moment music became fully digital — and digital meant copyable. That was its gift and its undoing. The same clarity and precision that made the format so compelling also made it trivially easy to rip, copy, and eventually share over the internet. The CD era produced the highest revenues in music history, but it also planted the seed of the industry's disruption. Without the CD, there is no MP3. Without MP3, no Napster. Without Napster, no streaming. Every revolution in this museum walks through this room."
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
