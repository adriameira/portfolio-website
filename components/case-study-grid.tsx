import Image from "next/image"

type CaseStudy = {
  organization: string
  organizationLogo?: string
  position: string
  title: string
  description: string
  href?: string
  thumbnail: string
  thumbnailAlt: string
  thumbnailClassName: string
  layout: "featured" | "vertical"
  status?: string
}

const caseStudies: CaseStudy[] = [
  {
    organization: "MIT",
    organizationLogo: "/logos/mit.svg",
    position: "Senior Product Designer",
    title: "Five hours of charting, now five seconds",
    description: "Turned a deed review tool into an analytics dashboard with an AI that turns isolated data into patterns.",
    href: "/case-studies/racial-justice",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TQC4EIp6IJVWnwospVxg7XjZTZtCe1.png",
    thumbnailAlt: "Mass restrictive covenants dashboard shown on a laptop against a mint green background",
    thumbnailClassName: "case-study-thumbnail-racial-justice",
    layout: "vertical",
  },
  {
    organization: "\nEddi",
    organizationLogo: "/logos/eddi-mark.svg",
    position: "Senior Product Designer",
    title: "From \"you're a match\" to \"ready to submit\"",
    description: "Redesigned an AI grant matching and built the company's first design system along the way.",
    href: "/case-studies/eddi",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-09%20at%2022.39.38-57uCM1UNLzYs6jFXGmZ8EmcIGFSbK7.png",
    thumbnailAlt: "Eddi grants dashboard shown on a laptop against a yellow background",
    thumbnailClassName: "case-study-thumbnail-eddi",
    layout: "vertical",
  },
  {
    organization: "Pyxos",
    organizationLogo: "/logos/logo-white.svg",
    position: "Product Designer",
    title: "Compliance at the speed of AI",
    description: "Took Pyxos’s first AI feature from concept to launch: a risk-analysis agent for privacy policies.",
    href: "/case-studies/ai-agent",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dI4iNNaMPIo51VcfFzQhTzyfJ5Z7mH.png",
    thumbnailAlt: "Pyxos policy risk analysis dashboard displayed on a laptop",
    thumbnailClassName: "case-study-thumbnail-ai-agent",
    layout: "vertical",
  },
  {
    organization: "OKX",
    organizationLogo: "/logos/okx.svg",
    position: "Product Designer",
    title: "Fiat in, crypto on",
    description:
      "Designed a single, modular deposit flow that launched bank transfers in USD, GBP, EUR, and BRL.",
    href: "/case-studies/okx",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AVtArC8xrH48m7m312CRyZSbQbT59R.png",
    thumbnailAlt: "OKX domestic wire transfer screen on a phone against a bright green background",
    thumbnailClassName: "case-study-thumbnail-okx",
    layout: "vertical",
  },
]

function CaseStudyCardContent({ study }: { study: CaseStudy }) {
  return (
    <>
      <div className={`case-study-thumbnail ${study.thumbnailClassName}`}>
        <Image
          alt={study.thumbnailAlt}
          className="case-study-thumbnail-image"
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          src={study.thumbnail}
        />
      </div>
      <div className="case-study-card-copy">
        <div className="case-study-card-company">
          {study.organizationLogo ? (
            <span className="case-study-card-company-mark">
              <Image
                alt=""
                className={`case-study-card-company-logo${study.organization === "MIT" ? " case-study-card-company-logo--mit" : ""}`}
                height={56}
                src={study.organizationLogo}
                width={56}
              />
            </span>
          ) : null}
          <div className="case-study-card-company-copy">
            <span className="case-study-card-company-name">{study.organization}</span>
            <span className="case-study-card-company-position">{study.position}</span>
          </div>
          {study.status ? <span className="case-study-card-status">{study.status}</span> : null}
        </div>
        <h2 className="case-study-card-title">{study.title}</h2>
        <p className="case-study-card-description">{study.description}</p>
      </div>
    </>
  )
}

export function CaseStudyGrid() {
  return (
    <section
      className="case-study-grid-section"
      id="work"
      aria-labelledby="case-study-grid-title"
    >
      <h2 className="case-study-grid-title" id="case-study-grid-title">
        Selected works
      </h2>
      <div className="case-study-grid">
        {caseStudies.map((study) => (
          <article className={`case-study-card case-study-card--${study.layout}`} key={study.title} data-appear>
            {study.href ? (
              <a
                className="case-study-card-link"
                href={study.href}
                aria-label={`Read the ${study.title} case study`}
              >
                <CaseStudyCardContent study={study} />
              </a>
            ) : (
              <div className="case-study-card-static">
                <CaseStudyCardContent study={study} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
