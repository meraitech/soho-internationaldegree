import { qualificationTypes } from "@/data/programs";

export default async function sitemap() {
  const baseUrl = "https://international.degree";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/programs`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const qualificationPages = qualificationTypes
    .filter((q) => q.isPublished)
    .map((q) => ({
      url: `${baseUrl}/programs/${q.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...qualificationPages];
}
