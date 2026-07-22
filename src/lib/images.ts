// ponytail: Unsplash placeholders (free license, no attribution required) — swap each `src`
// for real job/property photography as it becomes available. No other changes needed.
export type HeroImage = {
  src: string;
  alt: string;
};

export const images = {
  home: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop",
    alt: "A well-kept modern home under a clear sky",
  },
  waterDamage: {
    src: "https://images.unsplash.com/photo-1749532125405-70950966b0e5?w=1600&q=80&auto=format&fit=crop",
    alt: "A technician repairing plumbing in a bathroom",
  },
  fireDamage: {
    src: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=1600&q=80&auto=format&fit=crop",
    alt: "A contractor at work in a rebuild project",
  },
  moldRemediation: {
    src: "https://images.unsplash.com/photo-1681812508658-12c52bf91fd8?w=1600&q=80&auto=format&fit=crop",
    alt: "A technician in protective containment gear",
  },
  reconstruction: {
    src: "https://images.unsplash.com/photo-1768321914149-5a6428ec2f82?w=1600&q=80&auto=format&fit=crop",
    alt: "A property mid-reconstruction with exposed framing and drywall",
  },
  about: {
    src: "https://images.unsplash.com/photo-1647735282077-c12699af40be?w=1600&q=80&auto=format&fit=crop",
    alt: "Two tradespeople standing at a job site in Seattle",
  },
  careers: {
    src: "https://images.unsplash.com/photo-1672954766589-49f0dd0e106f?w=1600&q=80&auto=format&fit=crop",
    alt: "A crew of construction workers standing together on site",
  },
  serviceArea: {
    src: "https://images.unsplash.com/photo-1760563264962-87a71351ff8f?w=1600&q=80&auto=format&fit=crop",
    alt: "A tree-lined residential street with parked cars",
  },
} satisfies Record<string, HeroImage>;
