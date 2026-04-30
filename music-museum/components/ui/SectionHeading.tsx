interface SectionHeadingProps {
  heading: string;
  subtitle?: string;
}

export default function SectionHeading({ heading, subtitle }: SectionHeadingProps) {
  return (
    <div className="border-b border-foreground pb-4 mb-8">
      <h2 className="text-4xl font-bold uppercase tracking-tight leading-none">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-foreground/60 tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
