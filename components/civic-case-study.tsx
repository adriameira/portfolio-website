import Link from "next/link"
import { Mail } from "lucide-react"
import type { CivicWork } from "./civic-work-data"
import styles from "./civic-case-study.module.css"

export function CivicCaseStudy({ work }: { work: CivicWork }) {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">
          ADI MEIRA
        </Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <Link className="portfolio-nav-about" href="/about">ABOUT</Link>
          <a className="portfolio-nav-cv" href="/adria-meira-cv.pdf" download aria-label="Download Adria Meira CV">
            CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>

      <main className={`portfolio-main ${styles.main}`}>
        <article className={styles.article} aria-labelledby="civic-case-title">
          <Link className={styles.backLink} href="/#civic-work">← Civic work</Link>
          <p className={styles.eyebrow}>{work.category}</p>
          <p className={styles.metadata}>{work.location} <span aria-hidden="true">·</span> {work.year}</p>
          <h1 className={styles.title} id="civic-case-title">{work.title}</h1>
          <p className={styles.byline}>A civic design case study by Adria Meira, Senior Product Designer.</p>

          <div className={styles.sections}>
            <section className={styles.section} aria-labelledby="civic-challenge-title">
              <h2 id="civic-challenge-title">The challenge</h2>
              <p>{work.challenge}</p>
            </section>
            <section className={styles.section} aria-labelledby="civic-approach-title">
              <h2 id="civic-approach-title">My approach</h2>
              <p>{work.approach}</p>
            </section>
            <section className={styles.section} aria-labelledby="civic-outcome-title">
              <h2 id="civic-outcome-title">Outcome</h2>
              <p>{work.outcome}</p>
            </section>
          </div>
          <nav className={styles.projectLinks} aria-label="More portfolio work">
            <Link href="/#civic-work">More civic design and technology work</Link>
            <Link href="/#work">Product design case studies</Link>
          </nav>
        </article>
      </main>

      <footer className="contact-section" id="contact" aria-label="Contact and social links">
        <div className="contact-bottomline">
          <nav className="contact-social-links" aria-label="Email and social links">
            <a href="mailto:adria_meira@gsd.harvard.edu" className="contact-social-link" aria-label="Email Adria Meira">
              <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
            </a>
            <a href="https://www.linkedin.com/in/adriameira/" className="contact-social-link" aria-label="Adria Meira on LinkedIn" target="_blank" rel="noreferrer">
              <img src="/logos/linkedin-white.svg" alt="" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
