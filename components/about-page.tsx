import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { WordRevealObserver } from "./word-reveal"
import styles from "./about-page.module.css"

type ResumeEntry = {
  period: string
  title: string
  organization: string
  organizationPrefix?: string
}

const education: ResumeEntry[] = [
  {
    period: "May 2026",
    title: "Master in Design Studies",
    organization: "Harvard University\nGraduate School of Design",
  },
  {
    period: "May 2024",
    title: "Visiting Student",
    organization: "University College London",
  },
  {
    period: "Aug 2016 ",
    title: "Bachelor of Arts, Communications &\nMedia Studies",
    organization: "Universidade Estadual de Campinas, Brazil",
  },
]

const workExperience: ResumeEntry[] = [
  {
    period: "2025 - Present",
    title: "Research Assistant",
    organization: "Harvard University\nGraduate School of Design",
  },
  {
    period: "2026",
    title: "Senior Product Designer",
    organization: "Eddi AI",
  },
  {
    period: "2025",
    title: "Researcher",
    organization: "City of Somerville",
  },
  {
    period: "2025",
    title: "Senior Product Designer",
    organization: "IORQ",
  },
  {
    period: "2024 - 2025",
    title: "Communications Assistant",
    organization: "Harvard Berkman Klein Center",
  },
  {
    period: "2024",
    title: "UX Designer",
    organization: "Pyxos AI",
  },
  {
    period: "2022 - 2024",
    title: "Product Design Mentor",
    organization: "DesignLab",
  },
  {
    period: "2022",
    title: "Product Design Mentor",
    organization: "Awari",
  },
  {
    period: "2022 - 2024",
    title: "Product Designer",
    organization: "OKX",
  },
  {
    period: "2019 - 2022",
    title: "UX/UI → Product Designer",
    organization: "Cobli",
  },
  {
    period: "2017",
    title: "Graphic Designer",
    organization: "United Nations",
  },
  {
    period: "2014 - 2019",
    title: "Graphic + Web Designer",
    organization: "Multiple Companies",
  },
]

const trainings: ResumeEntry[] = [
  {
    period: "2025",
    title: "Designing for Local Government",
    organization: "Stanford University",
  },
  {
    period: "2023",
    title: "Successful Stakeholder Relationships\nPersuasive and Emotional Design\nMeasuring UX and ROI",
    organization: "Nielsen Norman Group",
  },
]

const extra: ResumeEntry[] = [
  {
    period: "2026",
    title: "Co-Chair, Design Research Forum",
    organization: "Harvard University\nGraduate School of Design",
    organizationPrefix: "@\u00a0",
  },
  {
    period: "2025 - 2026",
    title: "Communications Chair, Student Forum",
    organization: "Harvard University\nGraduate School of Design",
    organizationPrefix: "@ ",
  },
  {
    period: "2025 - 2026",
    title: "Curator, Quotes Gallery",
    organization: "Harvard University\nGraduate School of Design",
    organizationPrefix: "@ ",
  },
  {
    period: "2025 - 2026",
    title: "Translator (English → Brazilian Portuguese)",
    organization: "Harvard University\nGraduate School of Design",
    organizationPrefix: "@ ",
  },
  {
    period: "2025",
    title: "Head of Social Impact",
    organization: "Harvard Brazilian Association of Students and Scholars",
    organizationPrefix: "@ ",
  },
  {
    period: "2025",
    title: "Staff",
    organization: "3rd Harvard x Design Conference",
  },
  {
    period: "2025",
    title: "Staff",
    organization: "Harvard's Afro-Brazilian Religions Lecture",
  },
  {
    period: "2022 - 2024",
    title: "Product Design Mentor",
    organization: "ADPList",
    organizationPrefix: "@",
  },
  {
    period: "2017",
    title: "Graphic Design Volunteer",
    organization: "COP23, United Nations",
    organizationPrefix: "@ ",
  },
]

function ResumeSection({
  title,
  entries,
}: {
  title: string
  entries: ResumeEntry[]
}) {
  const headingId = `about-${title.toLowerCase().replaceAll(" ", "-")}`

  return (
    <section className={styles.resumeSection} data-appear aria-labelledby={headingId}>
      <div className={styles.resumeSectionHeading}>
        <h2 id={headingId}>{title}</h2>
      </div>
      <div className={styles.entries}>
        {entries.map((entry) => (
          <article
            className={styles.entry}
            data-appear
            key={`${entry.period}-${entry.title}-${entry.organization}`}
          >
            <p className={styles.period}>{entry.period}</p>
            <div className={styles.entryCopy}>
              <h3>{entry.title}</h3>
              <p>{entry.organizationPrefix ?? "@ "}{entry.organization}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <div className={`portfolio-page ${styles.page}`}>
      <header className="portfolio-header">
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">
          ADI MEIRA
        </Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <a className="portfolio-nav-about" href="/about" aria-current="page">ABOUT</a>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>

      <main id="top" className={`portfolio-main ${styles.main}`}>
        <section className={styles.intro} data-appear aria-labelledby="about-title">
          <header className={styles.introHeader}>
            <p className={styles.heroDescriptor}>
              Harvard GSD &apos;26<br />Ex-fintech, AI, politics
            </p>
            <div className={styles.introTitleColumn}>
              <h1 id="about-title">Oi, I&apos;m Adi! :)</h1>
              <nav className={styles.introLinks} aria-label="Contact Adi">
                <a href="mailto:meira.adria@gmail.com">
                  <Mail aria-hidden="true" size={15} strokeWidth={2} />
                  E-MAIL
                </a>
                <a
                  href="https://www.linkedin.com/in/adriameira/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.linkedinMark} aria-hidden="true">in</span>
                  LINKEDIN
                </a>
              </nav>
            </div>
            <div className={styles.introCopy}>
              <p>I’m a Brazilian senior product designer with 7+ years of experience shipping products in fintech, AI and B2B SaaS. Most recently, I earned a Master in Design Studies from the Harvard Graduate School of Design.</p>
              <p>I started in graphic and web design, which gave me a strong visual foundation. Over time I moved toward the harder problems: how products work, why people get stuck, and what makes them trust what they see.</p>
              <p>I&apos;m always curious about framing problems, aligning stakeholders, and shipping products fast. I&apos;ve been the only designer in a project, built design systems from scratch, and designed flows used across global markets.</p>
            </div>
          </header>

          <div className={styles.photoGrid} aria-label="Photos from Adi&apos;s life">
            <div className={`${styles.photoColumn} ${styles.firstColumn}`}>
              <figure className={`${styles.photo} ${styles.catPhoto}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polaroid%20SX-70%20Format-1-MSYfEWS0W4HMPF2551wLtwgLJDgdpt.png"
                  alt="Adi&apos;s cat relaxing on the floor"
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </figure>
              <blockquote className={styles.quote}>
                <p>
                  <strong>12 years of work experience</strong>
                  <br />
                  <strong>05</strong> in graphic and web design +<br />
  <strong>07</strong> in digital product design
                </p>
              </blockquote>
            </div>
            <figure className={`${styles.photo} ${styles.adiPhoto}`}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5242-KTZM2qRHj4GCgg6xBPeiMO9EjHs8xg.jpg"
                alt="Adi standing beneath the Harvard University banner"
                fill
                loading="eager"
                sizes="(max-width: 760px) 100vw, 33vw"
              />
            </figure>
            <div className={`${styles.photoColumn} ${styles.lastColumn}`}>
              <div className={styles.outsideCopy}>
                <p>I mentor designers through ADPList, helping them grow their craft, sharpen their storytelling, and navigate their careers.</p>
                <p><a href="https://adplist.org/mentors/adria" target="_blank" rel="noreferrer">Book a time with me →</a></p>
              </div>
              <figure className={`${styles.photo} ${styles.bikePhoto}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polaroid%20SX-70%20Format-2-jXkjKfrIhH8EpLxRTlocURSV2g9WOn.png"
                  alt="Adi&apos;s bicycle parked on a wooden dock beside the water"
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </figure>
            </div>
          </div>
        </section>

        <div className={styles.resume}>
          <ResumeSection title="Education" entries={education} />
          <ResumeSection title="Work Experience" entries={workExperience} />
          <ResumeSection title="Trainings" entries={trainings} />
          <ResumeSection title="Extra" entries={extra} />
        </div>
      </main>

      <footer className={`contact-section ${styles.footer}`} data-appear id="contact">
        <h2>Ready to collaborate?</h2>
        <nav aria-label="Email and social links">
          <a href="mailto:meira.adria@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/adriameira/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </footer>
      <WordRevealObserver />
    </div>
  )
}
