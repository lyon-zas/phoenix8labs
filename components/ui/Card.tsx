export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-surface-raised p-6 group h-full transition duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_16px_40px_-16px_rgba(200,90,30,0.45)] lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
