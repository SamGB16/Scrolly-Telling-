interface PanelProps {
  children: React.ReactNode;
}

export default function Panel({ children }: PanelProps) {
  return (
    <section className="w-full px-8 py-12 md:px-16 md:py-16">
      {children}
    </section>
  );
}
