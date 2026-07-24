import { site } from "@/lib/site";

export function CallCta({ label = "Call to Schedule" }: { label?: string }) {
  return (
    <a
      href={site.phoneHref}
      className="shine inline-flex flex-col items-center justify-center gap-0.5 rounded-md bg-green px-6 py-3 text-midnight hover:bg-green-dark hover:text-white"
    >
      <span className="text-xl font-bold uppercase tracking-wide">{label}</span>
      <span className="text-xl font-bold">{site.phone}</span>
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
