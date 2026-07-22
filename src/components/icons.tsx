type IconProps = { className?: string };

export function WaterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 4c8 10 14 18.5 14 26a14 14 0 1 1-28 0c0-7.5 6-16 14-26Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M14 30c0 5.5 4.5 9 9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function FireIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 4c1 6-6 9-6 15a6 6 0 0 0 12 0c2 2 4 6 4 10a10 10 0 1 1-20 0c0-9 6-13 10-25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MoldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="30" r="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="30" cy="10" r="3" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="38" cy="20" r="3.5" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 16 24 22M32 14 27 22M36 24 30 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ReconstructionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M6 44 6 20 24 6l18 14v24" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 44V28h12v16" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M30 16h8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 14v10l7 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 5 40 11v11c0 12-7 19.5-16 21-9-1.5-16-9-16-21V11L24 5Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M17 24l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M12 4h16l8 8v32H12V4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M28 4v8h8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 26h12M18 32h12M18 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 8c1-2 4-3 6-2l4 6c1 2 0 3-1 4l-2 2c1 4 5 8 9 9l2-2c1-1 2-2 4-1l6 4c1 2 0 5-2 6-8 4-19-3-24-12-3-5-4-10-2-14Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
