import type { Metadata } from "next"
import { OkxCaseStudy } from "../../../components/okx-case-study"

export const metadata: Metadata = {
  title: "Fiat Deposits at Global Scale — Adria Meira",
  description:
    "Fiat in, crypto on: the modular OKX deposit experience for USD, GBP, EUR, and Brazil’s Pix. $7M+ deposited in Brazil with a 99.3% success rate in the first three months.",
  alternates: { canonical: "/case-studies/okx" },
  openGraph: {
    title: "Fiat Deposits at Global Scale — Adria Meira",
    description:
      "Fiat in, crypto on: the modular OKX deposit experience for USD, GBP, EUR, and Brazil’s Pix. $7M+ deposited in Brazil with a 99.3% success rate in the first three months.",
    url: "https://a-meira.com/case-studies/okx",
    type: "article",
  },
}

export default function OkxPage() {
  return <OkxCaseStudy />
}
