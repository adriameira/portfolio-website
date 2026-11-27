import type { Metadata } from "next"
import { RacialJusticeCaseStudy } from "../../../components/racial-justice-case-study"

export const metadata: Metadata = {
  title: "Five hours of charting, now five seconds — Adria Meira",
  description:
    "Turned an AI-assisted deed review tool into a self-serve analytics dashboard, raising weekly active users 63% in its first months.",
  alternates: { canonical: "/case-studies/racial-justice" },
  openGraph: {
    title: "Five hours of charting, now five seconds — Adria Meira",
    description:
      "Turned an AI-assisted deed review tool into a self-serve analytics dashboard, raising weekly active users 63% in its first months.",
    url: "https://a-meira.com/case-studies/racial-justice",
    type: "article",
  },
}

export default function RacialJusticePage() {
  return <RacialJusticeCaseStudy />
}
