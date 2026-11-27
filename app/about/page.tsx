import type { Metadata } from "next"
import { AboutPage } from "../../components/about-page"

export const metadata: Metadata = {
  title: "About Adria Meira — Senior Product Designer in Boston",
  description:
    "Meet Adria Meira, a Boston-based senior product designer specializing in fintech, AI, compliance UX, and civic technology. View her work and download her CV.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Adria Meira — Senior Product Designer in Boston",
    description:
      "Meet Adria Meira, a Boston-based senior product designer specializing in fintech, AI, compliance UX, and civic technology. View her work and download her CV.",
    url: "https://a-meira.com/about",
    type: "website",
  },
}

export default function AboutRoute() {
  return <AboutPage />
}
