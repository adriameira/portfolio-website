import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CivicCaseStudy } from "../../../components/civic-case-study"
import { civicWorks } from "../../../components/civic-work-data"

type CivicWorkRouteProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return civicWorks.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CivicWorkRouteProps): Promise<Metadata> {
  const { slug } = await params
  const work = civicWorks.find((entry) => entry.slug === slug)

  if (!work) notFound()

  return {
    title: `${work.title} — Civic Design | Adria Meira`,
    description: work.metaDescription,
    alternates: { canonical: `/civic-work/${work.slug}` },
    openGraph: {
      title: `${work.title} — Civic Design | Adria Meira`,
      description: work.metaDescription,
      url: `https://a-meira.com/civic-work/${work.slug}`,
      type: "article",
    },
  }
}

export default async function CivicWorkPage({ params }: CivicWorkRouteProps) {
  const { slug } = await params
  const work = civicWorks.find((entry) => entry.slug === slug)

  if (!work) notFound()

  return <CivicCaseStudy work={work} />
}
