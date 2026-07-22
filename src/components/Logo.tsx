const LETTERS = ["R", "E", "S", "T", "O", "R"] as const;

export default function Logo({
  on = "dark",
  className,
}: {
  on?: "dark" | "light";
  className?: string;
}) {
  const letterColor = on === "dark" ? "text-cream" : "text-midnight";

  return (
    <span
      className={`font-logo inline-flex leading-[0.9] tracking-[0.02em] ${letterColor} ${className ?? ""}`}
    >
      {LETTERS.map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
      <span className="cut-a text-green">A</span>
    </span>
  );
}
