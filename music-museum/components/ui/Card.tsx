interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function Card({ title, subtitle, description }: CardProps) {
  return (
    <div className="border border-foreground/10 p-6 flex flex-col gap-2">
      <h3 className="text-base font-bold uppercase tracking-widest leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm font-medium text-foreground/60 tracking-wide">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-sm leading-relaxed text-foreground/80 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
