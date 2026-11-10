import type { Metadata } from "next"
import { EddiCaseStudy } from "../../../components/eddi-case-study"

export const metadata: Metadata = {
  title: "From \"you're a match\" to \"ready to submit\" — Adi Meira",
  description: "How I reframed Eddi’s AI grant-matching product into a guided application flow, reducing steps by 40% and building its first design system.",
}

export default function EddiCaseStudyPage() {
  return <EddiCaseStudy />
}
