import type { Metadata } from "next"
import { AiAgentCaseStudy } from "../../../components/ai-agent-case-study"

export const metadata: Metadata = {
  title: "Compliance at the speed of AI — Adi Meira",
  description:
    "Users asked for an AI to rewrite privacy policies, but research showed trust came first. The AI Compliance Agent analyzes policy risk, explains its scores, and provides actionable insights.",
}

export default function AiAgentPage() {
  return <AiAgentCaseStudy />
}
