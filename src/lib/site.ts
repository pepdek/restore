export const site = {
  name: "Restora",
  tagline: "The South Sound's fastest restoration team",
  phone: "(253) 555-0142",
  phoneHref: "tel:+12535550142",
  email: "help@restorasouthsound.com",
  address: "Tacoma, WA",
  license: "WA Contractor Lic. #RESTOR*891K2",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "water-damage",
    name: "Water Damage Restoration",
    short: "Water Damage",
    blurb: "Burst pipes, flooding, and leaks — extracted and dried before mold has a chance to start.",
  },
  {
    slug: "fire-damage",
    name: "Fire & Smoke Damage Restoration",
    short: "Fire Damage",
    blurb: "Soot, smoke odor, and structural damage handled from board-up through rebuild.",
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    short: "Mold Remediation",
    blurb: "Containment, removal, and documentation that satisfies insurers and future buyers alike.",
  },
  {
    slug: "reconstruction",
    name: "Restoration Reconstruction",
    short: "Reconstruction",
    blurb: "One team from demolition to drywall — no handoff between the cleanup crew and the builder.",
  },
];

export const serviceAreaCities = [
  "Tacoma",
  "Lakewood",
  "University Place",
  "Puyallup",
  "Federal Way",
  "Gig Harbor",
  "Auburn",
  "Sumner",
  "DuPont",
  "Fife",
  "Bonney Lake",
  "Spanaway",
];

export const navLinks = [
  { href: "/service-area", label: "Service Area" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];
