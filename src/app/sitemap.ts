import type { MetadataRoute } from "next";
import { resourceLinks } from "@/lib/resources";
import { services } from "@/lib/site";

const BASE_URL = "https://restore.pepdekker.com";

const staticRoutes = [
  "",
  "/about",
  "/careers",
  "/case-studies",
  "/contact",
  "/insurance-claims",
  "/our-guarantee",
  "/service-area",
  "/services",
  "/resources",
  "/resources/for-adjusters",
  "/resources/for-adjusters/demo",
  "/legal/safety-data-sheets",
  "/legal/terms",
  "/legal/privacy",
  "/legal/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...resourceLinks.filter((r) => r.slug !== "for-adjusters").map((r) => r.href),
  ];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }));
}
