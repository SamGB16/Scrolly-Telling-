import Link from "next/link";

interface ExhibitCardProps {
  era: string;
  dateRange: string;
  description: string;
  stat: string;
  href: string;
  index: number;
}

export default function ExhibitCard({ era, dateRange, description, stat, href, index }: ExhibitCardProps) {
  return (
    <Link href={href} className="flex flex-col gap-4 border border-foreground/10 p-8 hover:bg-foreground/5 transition-colors">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/25 mb-1">
          {String(index).padStart(2, "0")} — {dateRange}
        </p>
        <h3 className="text-xl font-bold uppercase tracking-tight leading-tight">
          {era}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground/70 flex-1">
        {description}
      </p>
      <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 border-t border-foreground/10 pt-4">
        {stat}
      </p>
    </Link>
  );
}
