import type { Metadata } from "next"
import { RacialJusticeCaseStudy } from "../../../components/racial-justice-case-study"

export const metadata: Metadata = {
  title: "Five hours of charting, now five seconds — Adi Meira",
  description:
    "Turned an AI-assisted deed review tool into a self-serve analytics dashboard, raising weekly active users 63% in its first months.",
}

export default function RacialJusticePage() {
  return <RacialJusticeCaseStudy />
}
