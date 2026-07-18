export default function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[110px] opacity-[0.16] ${className}`}
      style={{ background: "radial-gradient(closest-side, var(--gold-3), transparent 70%)" }}
    />
  );
}
