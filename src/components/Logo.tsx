const LETTERS = ["R", "E", "S", "T", "O", "R"] as const;

type LogoProps = {
  /** Background the mark sits on. "dark" = solid white (navy would be invisible on navy). */
  on?: "dark" | "light";
  /** Small/constrained placements (favicon, tiny footer use) — solid navy, no two-tone. */
  compact?: boolean;
  className?: string;
};

export default function Logo({ on = "dark", compact = false, className }: LogoProps) {
  const letterColor = on === "dark" ? "text-white" : "text-midnight";
  const aColor = on === "dark" ? "text-white" : compact ? "text-midnight" : "text-green";

  return (
    <span
      className={`font-logo inline-flex leading-[0.9] tracking-[0.02em] ${letterColor} ${className ?? ""}`}
    >
      {LETTERS.map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
      <span className={`cut-a ${aColor}`}>A</span>
    </span>
  );
}
