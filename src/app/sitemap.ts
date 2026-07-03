import type { MetadataRoute } from "next";
import { members } from "@/data/members";

const SITE_URL = "https://triples-into-the-dimension.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/integrantes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/subunidades`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const memberRoutes: MetadataRoute.Sitemap = members.map((member) => ({
    url: `${SITE_URL}/integrantes/${member.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...memberRoutes];
}
