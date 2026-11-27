import type { Metadata } from "next"
import { AiAgentCaseStudy } from "../../../components/ai-agent-case-study"

export const metadata: Metadata = {
  title: "Compliance at the speed of AI — Adria Meira",
  description:
    "Users asked for an AI to rewrite privacy policies, but research showed trust came first. The AI Compliance Agent analyzes policy risk, explains its scores, and provides actionable insights.",
  alternates: { canonical: "/case-studies/ai-agent" },
  openGraph: {
    title: "Compliance at the speed of AI — Adria Meira",
    description:
      "Users asked for an AI to rewrite privacy policies, but research showed trust came first. The AI Compliance Agent analyzes policy risk, explains its scores, and provides actionable insights.",
    url: "https://a-meira.com/case-studies/ai-agent",
    type: "article",
  },
}

export default function AiAgentPage() {
  return <AiAgentCaseStudy />
}
