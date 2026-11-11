import type { Metadata } from "next"
import { AboutPage } from "../../components/about-page"

export const metadata: Metadata = {
  title: "About — Adi Meira",
  description:
    "Designer × Civic Tech × Digital Government. Harvard GSD 26' | Ex-fintech, AI, political campaigns.",
}

export default function AboutRoute() {
  return <AboutPage />
}
