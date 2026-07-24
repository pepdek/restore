import { site } from "@/lib/site";

export function CallCta({
  label = "Call to Schedule",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={site.phoneHref}
      className={`shine inline-flex flex-col items-center justify-center gap-0.5 rounded-md bg-green px-6 py-3 text-midnight hover:bg-green-dark hover:text-white ${className}`}
    >
      <span className="text-xl font-bold uppercase tracking-wide">{label}</span>
      {/* text-[19px]: smallest size that still clears WCAG large-text bold threshold (18.66px) for navy-on-green's 4.47:1 ratio */}
      <span className="text-[19px] font-bold">{site.phone}</span>
    </a>
  );
}

export function RequestOnlineCta({
  href = "/schedule#request-service",
  label = "Request Online",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`shine inline-flex items-center justify-center rounded-md bg-green px-6 py-3 text-xl font-bold text-midnight hover:bg-green-dark hover:text-white ${className}`}
    >
      {label}
    </a>
  );
}

export function RequestServicesCta({
  href = "/schedule#request-service",
  label = "Request Services",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="shine inline-flex items-center justify-center rounded-md bg-midnight px-6 py-3 text-xl font-bold text-white hover:bg-midnight-dark"
    >
      {label}
    </a>
  );
}
