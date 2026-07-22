export type CaseStudy = {
  slug: string;
  serviceSlug: "water-damage" | "fire-damage" | "mold-remediation" | "reconstruction";
  propertyType: string;
  lossType: string;
  scope: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "university-place-condo-water",
    serviceSlug: "water-damage",
    propertyType: "3-unit condo building, University Place",
    lossType: "Supply line failure on an upper-floor washing machine, water traveling through two floors",
    scope:
      "Emergency extraction across three units, moisture mapping of shared subfloor and ceiling assemblies, structural drying with daily logged readings, and coordination with the HOA's single insurance claim covering all affected units.",
    outcome:
      "All three units dried and cleared within six days with no secondary mold growth. Moisture logs and the HOA's single point of contact kept the claim from splitting into three separate disputes with the carrier.",
  },
  {
    slug: "tacoma-restaurant-fire",
    serviceSlug: "fire-damage",
    propertyType: "Commercial kitchen, sit-down restaurant, Tacoma",
    lossType: "Grease fire in kitchen exhaust hood, smoke damage throughout dining room",
    scope:
      "Emergency board-up and power shutoff, HVAC and duct soot removal, thermal fogging for smoke odor throughout the dining area, and reconstruction of the damaged kitchen ceiling and exhaust enclosure.",
    outcome:
      "Restaurant reopened five weeks ahead of the contractor's original rebuild estimate for a comparable job, because the same RESTORA crew ran mitigation and reconstruction back to back with no re-scoping between phases.",
  },
  {
    slug: "puyallup-attic-mold",
    serviceSlug: "mold-remediation",
    propertyType: "Single-family home, Puyallup",
    lossType: "Undetected roof leak led to attic mold growth discovered during a pre-sale inspection",
    scope:
      "Containment and negative air setup in the attic, source leak correction coordinated with a roofing contractor, HEPA remediation of affected insulation and framing, and post-remediation clearance testing.",
    outcome:
      "Clearance documentation was accepted by the buyer's inspector and lender without a follow-up visit, keeping the home sale on its original closing date.",
  },
  {
    slug: "gig-harbor-pipe-burst-rebuild",
    serviceSlug: "reconstruction",
    propertyType: "Single-family home, Gig Harbor",
    lossType: "Frozen supply pipe burst behind a kitchen wall during a cold snap, flooding the main floor",
    scope:
      "Water extraction and structural drying, followed directly by kitchen demolition, framing repair, drywall, flooring, and cabinetry reinstallation under one project lead.",
    outcome:
      "Homeowner had a single point of contact from the first extraction call through the final walkthrough — no second contractor to vet, and the rebuild estimate matched the mitigation scope the adjuster had already approved.",
  },
  {
    slug: "federal-way-office-water",
    serviceSlug: "water-damage",
    propertyType: "Two-story office building, Federal Way",
    lossType: "Sprinkler head failure overnight, water damage to first-floor offices and server closet",
    scope:
      "After-hours emergency dispatch, extraction and containment around active IT equipment, structural drying with twice-daily moisture readings during business hours, and direct coordination with the building's property manager and insurer.",
    outcome:
      "Offices reopened for business the next morning with drying equipment staged to avoid disrupting staff, and the property manager received the same documentation packet used on every RESTORA commercial job.",
  },
];
