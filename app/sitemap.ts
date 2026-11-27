import type { MetadataRoute } from "next"
import { civicWorks } from "../components/civic-work-data"

const siteUrl = "https://a-meira.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    "",
    "/about",
    "/case-studies/ai-agent",
    "/case-studies/eddi",
    "/case-studies/okx",
    "/case-studies/racial-justice",
  ]

  return [
    ...mainRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
    })),
    ...civicWorks.map((work) => ({
      url: `${siteUrl}/civic-work/${work.slug}`,
    })),
  ]
}
