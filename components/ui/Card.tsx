export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-surface-raised p-6 transition-colors hover:border-graphite lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
