import type { FaqItem } from "@/components/Faq";

export type ServiceContent = {
  slug: string;
  name: string;
  keyword: string;
  metaDescription: string;
  whyItMatters: string;
  quickAnswer: string;
  whatIsBody: string[];
  doList: string[];
  dontList: string[];
  process: string[];
  insurance: string;
  offerName: string;
  offerBullets: string[];
  guaranteeName: string;
  guaranteeBody: string;
  faqs: FaqItem[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "water-damage": {
    slug: "water-damage",
    name: "Water Damage Restoration",
    keyword: "water damage restoration",
    metaDescription:
      "Water damage restoration in the South Puget Sound from the same local, IICRC certified team every time — extraction, drying, and insurance-direct billing with documented moisture logs.",
    whyItMatters:
      "Water spreads fast and mold can begin establishing itself within 24-48 hours, so the crew that shows up and how well they document their work matters more than almost any other job type. You get the same local RESTORA technicians every time, not a rotating subcontractor — and we log moisture readings and response time on every call so there's a record, not just a promise.",
    quickAnswer:
      "Water damage restoration is the process of removing standing water, drying out a structure, and repairing anything the water touched before it causes secondary damage like mold or rot. If you have active water in your home or business, extraction and drying need to start within hours, not days. This page covers what water damage restoration involves, what to do while you wait for help, and how RESTORA handles the process from the first call to the final invoice.",
    whatIsBody: [
      "Water damage restoration is the combination of water extraction, structural drying, and repair work needed to return a property to pre-loss condition after a leak, burst pipe, appliance failure, or flooding event. It is a distinct trade from general plumbing or cleanup — water damage restoration specifically addresses what happens to a building's materials once water has already gotten in: saturated drywall, soaked subfloor, waterlogged insulation, and the moisture trapped behind walls that isn't visible from the surface.",
      "Not all water damage is the same. Category 1 water (a clean supply line break) is treated differently than Category 3 water (sewage backup or floodwater), and the restoration approach — what gets dried versus what gets removed and replaced — depends on that classification. A qualified water damage restoration team assesses category and class of loss before deciding whether a wall cavity can be dried in place or needs to be opened up.",
      "The biggest risk in any water damage situation isn't the water itself — it's what happens if drying doesn't reach every wet material. Water travels by capillary action up drywall and along subfloor far past where it's visible, which is why professional water damage restoration relies on moisture meters and thermal imaging rather than a visual check. Materials that read wet on a meter but look dry to the eye are exactly where mold gets started.",
    ],
    doList: [
      "Shut off the water source if you can safely locate it (main shutoff valve or the fixture supply line)",
      "Shut off electricity to any affected rooms at the breaker if water is near outlets or fixtures",
      "Remove valuables and move furniture off wet flooring where it's safe to do so",
      "Take photos and video of the damage before anything is moved or dried, for your insurance claim",
      "Call a water damage restoration team as soon as possible — drying started within hours limits how much has to be replaced",
    ],
    dontList: [
      "Don't use a household vacuum to remove standing water — it's an electrocution risk and won't extract enough volume",
      "Don't walk into standing water if there's any chance it's in contact with electrical outlets or appliances",
      "Don't leave wet carpet or drywall in place waiting for it to \"air dry\" — trapped moisture is how mold starts",
      "Don't run a fan or dehumidifier as your only response to a large loss — spot drying without moisture readings can dry the surface while leaving the material underneath wet",
      "Don't skip photos before cleanup starts — once materials are removed, your insurer has nothing to evaluate",
    ],
    process: [
      "Emergency dispatch and water source containment",
      "Initial assessment: category and class of water damage, moisture mapping of walls, floors, and subfloor",
      "Standing water extraction with industrial pumps and truck-mounted vacuums",
      "Removal of unsalvageable materials (soaked carpet pad, drywall below the flood line) where drying isn't viable",
      "Structural drying with commercial air movers and dehumidifiers, monitored daily with logged moisture readings",
      "Final moisture verification — every material confirmed dry before any rebuild begins",
      "Documentation packet delivered for your insurance file",
    ],
    insurance:
      "Most homeowner policies cover sudden and accidental water damage (a burst pipe, a failed appliance). We document moisture readings and extraction volumes from the first hour, which becomes the evidence your adjuster needs to approve the claim quickly. We bill your carrier directly wherever a direction to pay is available.",
    offerName: "The Verified Dry Package",
    offerBullets: [
      "Full extraction and structural drying of every affected material",
      "Third-party moisture verification bundled in — not sold as an add-on after the fact",
      "Complete insurance claim handling and paperwork, so you never have to call your adjuster yourself",
    ],
    guaranteeName: "Verified Dry Guarantee",
    guaranteeBody:
      "If your final moisture verification doesn't pass, we come back and keep drying at no additional charge until it does.",
    faqs: [
      { q: "Is water damage covered by my homeowners insurance?", a: "Sudden and accidental water damage — a burst pipe, a failed water heater — is typically covered. Gradual leaks or flood damage from an outside water source usually require separate coverage. We'll help you understand which applies before you file." },
      { q: "How long does water damage restoration take?", a: "Most structural drying takes 3-5 days, verified with daily moisture readings rather than a fixed schedule. We don't pull equipment until the readings confirm the materials are dry." },
      { q: "Will you bill my insurance company directly?", a: "Yes, wherever your policy allows a direction to pay, we invoice your carrier directly so you aren't fronting restoration costs out of pocket." },
      { q: "How do I know I'm getting a reliable crew, not just whoever's available?", a: "RESTORA is locally owned and operated — the technicians on your job are our own employees, not subcontractors pulled from a national franchise network. You get the same team and the same documented process on every call." },
      { q: "What does the Verified Dry Guarantee cover?", a: "It covers the specific materials and areas we treated on your job — if verification testing doesn't pass, we return and complete additional drying at no charge until it does. It does not cover new water intrusion from a different or unresolved source, such as an ongoing roof leak or plumbing issue you haven't had repaired." },
    ],
  },
  "fire-damage": {
    slug: "fire-damage",
    name: "Fire & Smoke Damage Restoration",
    keyword: "fire damage restoration",
    metaDescription:
      "Fire and smoke damage restoration in the South Puget Sound from one accountable local team — board-up, soot removal, odor treatment, and full reconstruction, fully documented.",
    whyItMatters:
      "Soot is acidic and keeps corroding surfaces the longer it sits, and smoke odor embeds deeper into porous materials every day it's untreated — which is exactly when homeowners are most likely to get handed off between a mitigation crew, a contents company, and a separate rebuild contractor. RESTORA runs board-up through final rebuild as one team, with every step photographed and logged, so nothing gets lost in a handoff.",
    quickAnswer:
      "Fire damage restoration covers everything from securing a property after a fire to removing soot and smoke odor to rebuilding what was lost. Smoke damage and soot residue keep spreading and corroding surfaces for as long as they're left untreated, so fire damage restoration should start as soon as the fire department clears the property. This page covers what fire and smoke damage restoration involves, what to do (and avoid) before help arrives, and how RESTORA handles the full process under one roof.",
    whatIsBody: [
      "Fire damage restoration is the process of securing a fire-damaged property, removing soot and smoke residue, treating smoke odor at its source, and rebuilding any structural or cosmetic damage. It sits at the intersection of two trades most companies split apart: fire and smoke cleanup, and construction rebuild — which is exactly where handoffs and scope disputes tend to happen.",
      "Smoke damage isn't limited to the room where the fire occurred. Smoke particles travel through HVAC systems and settle on surfaces throughout a property, which is why a thorough fire damage restoration assessment checks rooms well beyond the visible burn area for soot residue and smoke odor. Fabric, drywall, and other porous materials absorb smoke odor deeply enough that surface cleaning alone won't resolve it.",
      "Soot itself is acidic and corrosive — left untreated, it continues etching into metal, grout, and finishes for weeks after the fire itself is out. That's part of why fire damage restoration is time-sensitive even after the immediate danger has passed: the fire damage you see the day of the fire is rarely the full extent of the damage without professional intervention.",
    ],
    doList: [
      "Wait for the fire department to clear the property as structurally safe before re-entering",
      "Contact your insurance company to open a claim and get a claim number",
      "Photograph visible fire and smoke damage before any cleanup or board-up begins",
      "Arrange temporary housing if the property isn't safe or livable, and keep those receipts for your claim",
      "Call a fire damage restoration company to secure the property (board-up, tarping) as soon as it's cleared",
    ],
    dontList: [
      "Don't attempt to clean soot yourself — wiping dry soot often grinds it deeper into surfaces and fabric",
      "Don't turn on the HVAC system before it's inspected — it will circulate soot and smoke odor throughout the property",
      "Don't throw away damaged items before they're documented for your insurance claim",
      "Don't use ordinary household cleaners on soot-covered surfaces — the wrong cleaner can set the stain permanently",
      "Don't wait to start fire damage restoration — every day of delay lets acidic soot residue etch further into metal and finishes",
    ],
    process: [
      "Emergency board-up and structural securing to protect the property",
      "Fire and smoke damage assessment, including rooms beyond the visible burn area",
      "Soot and residue removal from surfaces, HVAC ductwork, and contents",
      "Smoke odor treatment (thermal fogging and air scrubbing, not surface masking)",
      "Content cleaning and pack-out for items needing off-site restoration",
      "Reconstruction of damaged structural areas, documented step by step",
      "Final walkthrough and documentation packet for your insurer",
    ],
    insurance:
      "Fire damage is one of the more straightforward claims to get approved, but the documentation still matters for content valuation and rebuild scope. We photograph and itemize damage before any cleanup begins, so nothing gets disputed later.",
    offerName: "The Fully Restored Package",
    offerBullets: [
      "Complete soot removal and smoke odor treatment through final rebuild, one team start to finish",
      "Third-party clearance verification for smoke odor bundled in, not sold separately",
      "Complete insurance claim handling and paperwork, so you never have to call your adjuster yourself",
    ],
    guaranteeName: "Smoke Clearance Guarantee",
    guaranteeBody:
      "If post-treatment testing shows smoke odor hasn't cleared in the areas we treated, we return and re-treat at no additional charge until it does.",
    faqs: [
      { q: "Can smoke odor really be removed, or just masked?", a: "Thermal fogging and ozone/hydroxyl treatment break down odor-causing particles rather than covering them. Masking sprays don't hold up over time — we don't use them as a primary treatment." },
      { q: "Do you handle the rebuild too, or just cleanup?", a: "Both. Our reconstruction team picks up where cleanup ends, so there's no handoff delay or scope dispute between separate contractors." },
      { q: "How fast can you board up my property after a fire?", a: "Board-up is typically the first thing our crew does on arrival, usually within the hour of dispatch, to secure the property before cleanup starts." },
      { q: "Will the same team handle my job from start to finish?", a: "Yes — one RESTORA crew and one project lead follow the job from board-up through the final rebuild. You're not re-explaining your situation to a new contractor at each phase." },
      { q: "What does the Smoke Clearance Guarantee cover?", a: "It covers the specific areas we treated for smoke odor on your job — if clearance testing doesn't pass, we return and re-treat at no charge until it does. It does not cover odor from a new fire event or from untreated areas outside the original scope of work." },
    ],
  },
  "mold-remediation": {
    slug: "mold-remediation",
    name: "Mold Remediation",
    keyword: "mold remediation",
    metaDescription:
      "Mold remediation and mold removal in the South Puget Sound from the same certified local team every time — documented mold clearance testing for insurers and home sales.",
    whyItMatters:
      "Mold spreads through airborne spores, so cutting corners on containment just relocates the mold problem to another room — which is exactly the risk with an unfamiliar subcontracted crew cutting corners you'd never see. RESTORA's own IICRC certified technicians run every mold containment and mold clearance test the same documented way, every time, whether the paperwork is headed to your insurer or a future buyer's inspector.",
    quickAnswer:
      "Mold remediation is the process of containing, removing, and verifying the removal of mold growth in a home or business, along with correcting the moisture source that let mold establish itself in the first place. Mold spores are already present in nearly every environment, but visible mold growth, a musty odor, or mold-related health symptoms mean mold colonies have found the moisture they need to spread. This page covers what mold remediation involves, what to do about a mold problem while you wait for help, and how RESTORA's mold removal and mold remediation process works from inspection to clearance.",
    whatIsBody: [
      "Mold remediation is the professional process of removing mold growth from a property and correcting the underlying moisture problem that allowed the mold to grow, rather than simply cleaning visible mold off a surface. Mold removal without addressing the moisture source is a temporary fix — mold spores are everywhere in the air, and any surface with the right combination of moisture and organic material (drywall paper, wood, dust) will support new mold growth within 24 to 48 hours.",
      "Mold is a naturally occurring organism that reproduces through microscopic spores, which is why mold spreads so easily between rooms once a colony establishes itself. Mold growth typically starts wherever moisture is trapped: behind a shower wall, under a window with condensation, in an attic with a slow roof leak, or in a basement without adequate ventilation. Black mold, green mold, and the fuzzy white mold often found on damp wood are different species, but the remediation approach is the same regardless of color — contain it, remove the affected material, correct the moisture, and verify the space is clear.",
      "Not every mold problem requires the same scope of mold remediation work. A small, contained patch of surface mold on a bathroom ceiling is a very different job than mold growth that's spread through wall cavities and insulation after a hidden leak went unaddressed for months. A proper mold inspection identifies how far mold has spread — often further than what's visible — before a remediation plan is scoped, since undersized containment is one of the most common reasons mold remediation fails and mold returns.",
      "Mold exposure is also a documented health consideration, particularly for people with asthma, allergies, or compromised immune systems, which is part of why mold remediation follows IICRC S520 protocols rather than general cleaning practices. Those protocols specify containment barriers, negative air pressure, personal protective equipment, and HEPA filtration specifically because mold spores are lightweight enough to spread through a property the moment containment is breached.",
    ],
    doList: [
      "Identify and fix the moisture source if you can safely do so (a leaking pipe, a clogged gutter, poor bathroom ventilation)",
      "Increase ventilation in the affected area — open a window or run a fan if it won't spread spores to other rooms",
      "Photograph the visible mold growth and any water damage or musty odor for your records",
      "Keep pets and household members with respiratory sensitivities away from the affected area",
      "Call a mold remediation company for an inspection — visible mold is often smaller than what's actually growing behind the surface",
      "Ask whether the mold removal scope includes post-removal clearance testing, not just visible cleanup",
    ],
    dontList: [
      "Don't scrub, sand, or disturb visible mold growth yourself — disturbing mold colonies releases spores that spread the mold problem to other rooms",
      "Don't use bleach on porous materials like drywall or wood — it can kill surface mold while leaving the root structure intact underneath",
      "Don't run your central HVAC system if you suspect mold has spread to the ductwork — it will circulate mold spores throughout the property",
      "Don't ignore a musty odor without visible mold — the smell often means mold growth is present behind a wall, under flooring, or in an HVAC system where you can't see it",
      "Don't paint over mold — a fresh coat of paint hides mold growth without remediating it, and it will resurface",
      "Don't hire a mold removal crew that won't put the clearance standard in writing before work starts",
    ],
    process: [
      "Mold inspection and moisture assessment to determine the true extent of mold growth, including areas not visible on the surface",
      "Containment setup with physical barriers and negative air pressure to stop mold spores from spreading during remediation",
      "Source moisture correction — mold returns if the underlying leak or humidity problem isn't fixed",
      "Removal of mold-affected materials following IICRC S520 mold remediation protocols",
      "HEPA air scrubbing and antimicrobial surface treatment of the contained area",
      "Post-remediation clearance testing to verify mold spore counts have returned to a normal range",
      "Documentation packet delivered for insurance, home sale disclosure, or refinance requirements",
    ],
    insurance:
      "Mold coverage varies more than water or fire, largely because insurers want proof the mold resulted from a covered event rather than long-term neglect. Our documentation ties the mold growth to its source cause, which is the piece adjusters usually ask for.",
    offerName: "The Certified Clean Package",
    offerBullets: [
      "Full mold remediation and mold removal, from containment through the affected materials",
      "Third-party post-remediation clearance testing bundled into your mold removal scope — not sold as an add-on after the fact",
      "Complete insurance claim handling and paperwork, so you never have to call your adjuster yourself about your mold claim",
    ],
    guaranteeName: "Clearance Test Guarantee",
    guaranteeBody:
      "If your post-remediation clearance test doesn't pass, we come back and complete additional mold remediation work at no charge until it does.",
    faqs: [
      { q: "Is mold remediation covered by insurance?", a: "It depends on cause — mold resulting from a sudden covered event (like a burst pipe) is more likely to be covered than mold from a long-term, unaddressed leak. We help document the source to support your claim." },
      { q: "Do I need to leave the house during mold remediation?", a: "For contained, smaller-scope mold removal jobs, often not. Larger mold remediation jobs with extensive containment may require you to stay elsewhere during active work — we'll tell you upfront which applies." },
      { q: "Will you give me paperwork for a home sale or refinance?", a: "Yes — post-remediation clearance documentation is standard on every mold remediation job and is often requested by lenders, buyers, or inspectors." },
      { q: "How do I know your mold remediation actually worked?", a: "Post-remediation verification (PRV) testing is done by protocol, not by eye — the same documented clearance standard on every job, so you have proof the mold problem is resolved, not just our word for it." },
      { q: "What's the difference between mold remediation and mold removal?", a: "Mold removal refers specifically to physically removing mold-affected material. Mold remediation is the broader process — inspection, containment, removal, moisture correction, and clearance testing — that ensures the mold doesn't come back after removal is complete." },
      { q: "Can I just do the mold removal myself and skip remediation?", a: "You can remove small, contained surface mold yourself, but DIY mold removal without addressing the moisture source and without clearance testing is why mold problems come back. Professional mold remediation exists specifically to break that cycle." },
      { q: "What does the Clearance Test Guarantee cover?", a: "It covers the specific source and area we treated on your job — if clearance testing doesn't pass, we return and complete additional remediation at no charge until it does. It does not cover new mold growth caused by a different or unresolved moisture source you haven't had addressed, such as an ongoing roof leak or plumbing issue outside the original scope of work." },
    ],
  },
  reconstruction: {
    slug: "reconstruction",
    name: "Restoration Reconstruction",
    keyword: "restoration reconstruction",
    metaDescription:
      "Restoration reconstruction and home reconstruction services in the South Puget Sound — the same accountable local team from demolition to final walkthrough, no handoff to a stranger.",
    whyItMatters:
      "Handing a property off from a cleanup crew to a separate general contractor is where most restoration timelines stall — new scope reviews, new estimates, new insurance back-and-forth, and a new company you have to learn to trust all over again. Keeping reconstruction in-house with the same RESTORA team removes that handoff entirely.",
    quickAnswer:
      "Restoration reconstruction is the rebuild phase that follows water, fire, or mold mitigation — framing, drywall, flooring, and finish work needed to return a property to its pre-loss condition. Home reconstruction after a loss goes faster and stays on-budget when the same team that documented the mitigation work also handles the rebuild, since there's no second scope review or second company to coordinate with your insurer. This page covers what restoration reconstruction involves, how to prepare, and how RESTORA runs mitigation and reconstruction as one continuous project.",
    whatIsBody: [
      "Restoration reconstruction is the rebuild work that happens after water, fire, or mold mitigation is complete — framing repairs, drywall, flooring, painting, and finish work needed to bring a damaged property back to its condition before the loss occurred. It's distinct from general home renovation because restoration reconstruction has to match an insurance-approved scope of work, not just a homeowner's preferences.",
      "Most restoration jobs involve two phases: mitigation (stopping and cleaning up the damage) and reconstruction (rebuilding what was removed or destroyed). When those two phases are handled by separate companies, the reconstruction contractor has to independently verify the mitigation scope before writing a rebuild estimate — which is where timelines commonly stall waiting on a second company's schedule, a second set of insurance paperwork, and a second point of contact learning your job from scratch.",
      "Home reconstruction after a covered loss is typically approved as a second phase of the same insurance claim, using the documented scope from mitigation as the basis for the rebuild estimate. When one team runs both phases, the reconstruction estimate lines up directly with what was already documented and approved, rather than requiring a fresh round of scope negotiation with the adjuster.",
    ],
    doList: [
      "Get a written mitigation scope before reconstruction estimates are finalized, so the rebuild matches what was actually removed",
      "Ask whether your insurance adjuster needs to inspect before reconstruction begins",
      "Save all documentation (photos, moisture logs, itemized damage lists) from the mitigation phase for the reconstruction estimate",
      "Discuss material and finish options early — some products (discontinued flooring, custom trim) have long lead times",
      "Confirm in writing whether one company is handling both mitigation and reconstruction, or if you'll need to coordinate a second contractor",
    ],
    dontList: [
      "Don't sign a reconstruction contract before mitigation is fully documented — the rebuild scope should match what was actually damaged and removed",
      "Don't assume your mitigation company automatically handles reconstruction — confirm it in writing before work starts",
      "Don't skip the final mitigation walkthrough before reconstruction begins — undetected moisture behind a wall becomes a problem again once it's closed up",
      "Don't make major material or layout changes without checking whether they're covered under your insurance scope",
      "Don't wait to start the reconstruction estimate until mitigation is finished — early coordination keeps the timeline moving",
    ],
    process: [
      "Post-mitigation scope review and rebuild estimate, matched to the documented mitigation work",
      "Demolition of unsalvageable materials that mitigation didn't already remove",
      "Framing and structural repair where damage affected the building's structure",
      "Drywall, flooring, paint, and finish work to restore the space",
      "Trade coordination (electrical, plumbing) under one project lead, not separate subcontractor scheduling",
      "Final walkthrough and documentation for your insurer",
    ],
    insurance:
      "Reconstruction is typically covered as the second phase of a mitigation claim, using the scope your adjuster already approved. Because we handle both phases, the rebuild estimate lines up directly with the documented mitigation work — nothing gets re-argued.",
    offerName: "The One-Team Rebuild Package",
    offerBullets: [
      "Reconstruction estimate built directly from your documented mitigation scope, no re-scoping delay",
      "Third-party final walkthrough verification bundled in, not sold as an add-on",
      "Complete insurance claim handling and paperwork, so you never have to call your adjuster yourself",
    ],
    guaranteeName: "Workmanship Guarantee",
    guaranteeBody:
      "If your final reconstruction walkthrough identifies workmanship issues in our completed scope, we return and correct them at no additional charge.",
    faqs: [
      { q: "Do I have to use the same company for rebuild as for cleanup?", a: "No, but staying with one team means you're working with people who already know your job — no re-explaining the damage to a new contractor, and no second company to vet and trust." },
      { q: "How long does a typical reconstruction project take?", a: "It depends entirely on scope — a single room may take one to two weeks, while a full structural rebuild can take several months. We give you a written timeline before work starts." },
      { q: "Can you match existing finishes and materials?", a: "In most cases yes. Where an exact match isn't available (discontinued flooring, for example), we'll walk you through the closest options before ordering anything." },
      { q: "Does reconstruction start automatically after mitigation finishes?", a: "No — reconstruction requires its own scope review and, typically, separate insurance approval as the second phase of your claim. We handle that transition directly since we already have the mitigation documentation on file." },
      { q: "What does the Workmanship Guarantee cover?", a: "It covers workmanship on the specific reconstruction scope we completed — if the final walkthrough finds an issue with our work, we correct it at no charge. It does not cover new damage from an unrelated cause or issues with materials or work outside our original scope." },
    ],
  },
};
