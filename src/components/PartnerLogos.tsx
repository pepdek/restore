const logos = [
  { src: "/logos/epa.svg", alt: "U.S. Environmental Protection Agency" },
  { src: "/logos/nw-clean-air-agency.svg", alt: "Northwest Clean Air Agency" },
  { src: "/logos/orcaa.svg", alt: "Olympic Region Clean Air Agency" },
  { src: "/logos/puget-sound-clean-air-agency.svg", alt: "Puget Sound Clean Air Agency" },
  { src: "/logos/swcaa.svg", alt: "Southwest Clean Air Agency" },
  { src: "/logos/ria.svg", alt: "Restoration Industry Association" },
  { src: "/logos/wa-lni.svg", alt: "Washington State Department of Labor & Industries" },
];

export default function PartnerLogos() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <div key={logo.src} className="flex h-16 items-center rounded-lg bg-jet px-5 py-3">
          <img src={logo.src} alt={logo.alt} className="h-8 w-auto max-w-[140px] object-contain" />
        </div>
      ))}
    </div>
  );
}
