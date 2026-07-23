export type ResourceLink = {
  slug: string;
  href: string;
  title: string;
  audience: "Insurance Professionals" | "Real Estate & Inspectors" | "Property Managers" | "Storm Preparedness";
  description: string;
};

export const resourceLinks: ResourceLink[] = [
  {
    slug: "for-adjusters",
    href: "/resources/for-adjusters",
    title: "For Adjusters",
    audience: "Insurance Professionals",
    description: "Real-time job status links, scope sheet templates, and time-to-mitigation certificates.",
  },
  {
    slug: "for-agents-and-realtors",
    href: "/resources/for-agents-and-realtors",
    title: "For Agents & Realtors",
    audience: "Real Estate & Inspectors",
    description: "Fast-Track Intake with a 24-48 hour assessment turnaround for transaction deadlines.",
  },
  {
    slug: "for-property-managers",
    href: "/resources/for-property-managers",
    title: "For Property Managers",
    audience: "Property Managers",
    description: "A Standing-Response Agreement for pre-negotiated priority dispatch.",
  },
  {
    slug: "first-24-hours",
    href: "/resources/first-24-hours",
    title: "First 24 Hours Guide",
    audience: "Real Estate & Inspectors",
    description: "A co-brandable, printable one-pager: what to do before help arrives for water, fire, and mold.",
  },
  {
    slug: "storm-preparedness",
    href: "/resources/storm-preparedness",
    title: "Storm Preparedness",
    audience: "Storm Preparedness",
    description: "Sign up for priority notification ahead of forecasted storm events.",
  },
];
