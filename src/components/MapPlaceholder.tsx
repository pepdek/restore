export default function MapPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg bg-midnight ${className ?? "h-56"}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 40 L100 20 L180 60 L260 30 L400 50" className="stroke-cream" strokeWidth="2" fill="none" />
        <path d="M0 120 L120 140 L220 100 L320 150 L400 120" className="stroke-cream" strokeWidth="2" fill="none" />
        <path d="M40 0 L60 200" className="stroke-cream" strokeWidth="2" fill="none" />
        <path d="M300 0 L280 200" className="stroke-cream" strokeWidth="2" fill="none" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-center text-cream">
        <svg viewBox="0 0 24 32" className="h-10 w-10 text-cream" fill="currentColor" aria-hidden>
          <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12Zm0 16.5A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 0 1 0 9Z" />
        </svg>
        <p className="text-sm font-semibold">{label}</p>
      </div>
    </div>
  );
}
