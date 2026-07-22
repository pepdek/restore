import type { FaqItem } from "@/components/Faq";

export type ServiceContent = {
  slug: string;
  name: string;
  metaDescription: string;
  whyItMatters: string;
  process: string[];
  insurance: string;
  faqs: FaqItem[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "water-damage": {
    slug: "water-damage",
    name: "Water Damage Restoration",
    metaDescription:
      "24/7 water damage restoration in the South Puget Sound. Extraction, drying, and insurance-direct billing with documented moisture logs.",
    whyItMatters:
      "Water spreads fast and mold can begin establishing itself within 24-48 hours. The gap between a burst pipe and a technician starting extraction is the single biggest driver of total damage cost — which is why we track and log our response time on every water call.",
    process: [
      "Emergency dispatch and water source containment",
      "Standing water extraction with industrial pumps and vacuums",
      "Moisture mapping of walls, floors, and subfloor with logged readings",
      "Structural drying with commercial air movers and dehumidifiers, monitored daily",
      "Final moisture verification before any rebuild begins",
    ],
    insurance:
      "Most homeowner policies cover sudden and accidental water damage (a burst pipe, a failed appliance). We document moisture readings and extraction volumes from the first hour, which becomes the evidence your adjuster needs to approve the claim quickly. We bill your carrier directly wherever a direction to pay is available.",
    faqs: [
      { q: "Is water damage covered by my homeowners insurance?", a: "Sudden and accidental water damage — a burst pipe, a failed water heater — is typically covered. Gradual leaks or flood damage from an outside water source usually require separate coverage. We'll help you understand which applies before you file." },
      { q: "How long does drying take?", a: "Most structural drying takes 3-5 days, verified with daily moisture readings rather than a fixed schedule. We don't pull equipment until the readings confirm the materials are dry." },
      { q: "Will you bill my insurance company directly?", a: "Yes, wherever your policy allows a direction to pay, we invoice your carrier directly so you aren't fronting restoration costs out of pocket." },
    ],
  },
  "fire-damage": {
    slug: "fire-damage",
    name: "Fire & Smoke Damage Restoration",
    metaDescription:
      "Fire and smoke damage restoration in the South Puget Sound — board-up, soot removal, odor treatment, and full reconstruction.",
    whyItMatters:
      "Soot is acidic and keeps corroding surfaces the longer it sits, and smoke odor embeds deeper into porous materials every day it's untreated. Securing the property and starting cleanup quickly limits how much has to be replaced versus restored.",
    process: [
      "Emergency board-up and structural securing",
      "Soot and residue removal from surfaces, HVAC, and contents",
      "Odor treatment (thermal fogging and air scrubbing, not just masking)",
      "Content cleaning and pack-out for items needing off-site restoration",
      "Reconstruction of damaged structural areas, documented step by step",
    ],
    insurance:
      "Fire damage is one of the more straightforward claims to get approved, but the documentation still matters for content valuation and rebuild scope. We photograph and itemize damage before any cleanup begins, so nothing gets disputed later.",
    faqs: [
      { q: "Can smoke odor really be removed, or just masked?", a: "Thermal fogging and ozone/hydroxyl treatment break down odor-causing particles rather than covering them. Masking sprays don't hold up over time — we don't use them as a primary treatment." },
      { q: "Do you handle the rebuild too, or just cleanup?", a: "Both. Our reconstruction team picks up where cleanup ends, so there's no handoff delay or scope dispute between separate contractors." },
      { q: "How fast can you board up my property after a fire?", a: "Board-up is typically the first thing our crew does on arrival, usually within the hour of dispatch, to secure the property before cleanup starts." },
    ],
  },
  "mold-remediation": {
    slug: "mold-remediation",
    name: "Mold Remediation",
    metaDescription:
      "Mold remediation and containment in the South Puget Sound. IICRC certified removal with documentation for insurers and home sales.",
    whyItMatters:
      "Mold spreads through airborne spores, so cutting corners on containment just relocates the problem to another room. Proper containment and documented clearance testing matter as much for a future home sale or inspection as they do for today's air quality.",
    process: [
      "Containment setup with negative air pressure to stop spore spread",
      "Source moisture correction — mold returns if the underlying leak isn't fixed",
      "Removal of affected materials following IICRC S520 protocols",
      "HEPA air scrubbing and surface treatment",
      "Post-remediation documentation for insurance and future disclosure",
    ],
    insurance:
      "Mold coverage varies more than water or fire, largely because insurers want proof the mold resulted from a covered event rather than long-term neglect. Our documentation ties the mold growth to its source cause, which is the piece adjusters usually ask for.",
    faqs: [
      { q: "Is mold remediation covered by insurance?", a: "It depends on cause — mold resulting from a sudden covered event (like a burst pipe) is more likely to be covered than mold from a long-term, unaddressed leak. We help document the source to support your claim." },
      { q: "Do I need to leave the house during remediation?", a: "For contained, smaller-scope jobs, often not. Larger jobs with extensive containment may require you to stay elsewhere during active remediation — we'll tell you upfront which applies." },
      { q: "Will you give me paperwork for a home sale or refinance?", a: "Yes — post-remediation clearance documentation is standard on every job and is often requested by lenders, buyers, or inspectors." },
    ],
  },
  reconstruction: {
    slug: "reconstruction",
    name: "Restoration Reconstruction",
    metaDescription:
      "Restoration reconstruction and rebuild services in the South Puget Sound — one team from demolition to final walkthrough.",
    whyItMatters:
      "Handing a property off from a cleanup crew to a separate general contractor is where most restoration timelines stall — new scope reviews, new estimates, new insurance back-and-forth. Keeping reconstruction in-house removes that handoff entirely.",
    process: [
      "Post-mitigation scope review and rebuild estimate",
      "Demolition of unsalvageable materials",
      "Framing, drywall, flooring, paint, and finish work",
      "Trade coordination (electrical, plumbing) under one project lead",
      "Final walkthrough and documentation for your insurer",
    ],
    insurance:
      "Reconstruction is typically covered as the second phase of a mitigation claim, using the scope your adjuster already approved. Because we handle both phases, the rebuild estimate lines up directly with the documented mitigation work — nothing gets re-argued.",
    faqs: [
      { q: "Do I have to use the same company for rebuild as for cleanup?", a: "No, but staying with one team avoids a second scope review and a second point of contact with your insurer. Most homeowners find it faster." },
      { q: "How long does a typical rebuild take?", a: "It depends entirely on scope — a single room may take one to two weeks, while a full structural rebuild can take several months. We give you a written timeline before work starts." },
      { q: "Can you match existing finishes and materials?", a: "In most cases yes. Where an exact match isn't available (discontinued flooring, for example), we'll walk you through the closest options before ordering anything." },
    ],
  },
};
