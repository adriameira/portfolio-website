import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { WordRevealObserver } from "./word-reveal"
import { NextCaseStudy } from "./next-case-study"
import {
  OkxBrazilSection,
  OkxCollaborationSection,
  OkxContextSection,
  OkxHandoffSection,
  OkxResearchSection,
  OkxResultsSection,
} from "./okx-case-study-sections"
import styles from "./racial-justice-case-study.module.css"
import okxStyles from "./okx-case-study.module.css"

const projectDetails = [
  { label: "Role", value: "Product Designer " },
  {
    label: "Team",
    value: "Me & 1 content designer & 2 PMs & 8 engineers",
  },
  {
    label: "Scope",
    value:
      "Problem reframing, baseline audit, market analysis, flows, prototyping, cross-team pattern alignment, localization, stakeholder alignment, and success metrics",
  },
  { label: "Tools", value: "Figma" },
]


const contributions = [
  "Led Deposit design from problem framing and baseline audit through flows, localization, and launch QA.",
  "Rewrote the product brief with the PM around market expansion, Okcoin migration, competitive parity, and the user’s path to buying crypto.",
  "Designed and localized the deposit and withdrawal experience for global markets and Brazil’s Pix system.",
  "Aligned patterns with Buy, Sell, and Withdraw designers and worked closely with content, product, and engineering.",
  "Defined engagement, retention, and task-effectiveness measures and connected them to business ROI.",
]

export function OkxCaseStudy() {
  return (
    <div className={`portfolio-page ${styles.caseStudyPage}`}>
      <header className="portfolio-header">
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">
          ADI MEIRA
        </Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <a className="portfolio-nav-about" href="/about">ABOUT</a>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>
      <main className={styles.caseStudyMain} id="top">
        <section className={styles.hero} data-appear aria-labelledby="okx-title">
          <Image
            className={styles.heroLogo}
            src="/logos/okx.svg"
            alt="OKX logo"
            width={72}
            height={38}
            priority
          />
      <h1 className={styles.heroTitle} id="okx-title">
            Fiat in, crypto on
          </h1>
      <div className={styles.heroIntro}>
        <p>
          When crypto exchanges Okcoin and OKX merged, OKX needed a way for
          users to deposit traditional currency. I led the design of that
          deposit experience. It had to be a single global template that could
          launch in any new country the moment OKX got a license, and work for
          users who were about to lose the exchange they knew.
        </p>
      </div>
          <div className={styles.heroDashboard}>
            <video
              className={okxStyles.heroVideo}
              aria-label="Preview of the OKX fiat deposit flow"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/case-studies/okx/okx_video.mp4" type="video/mp4" />
              Your browser does not support this video format.
            </video>
          </div>
        </section>

        <section className={styles.overview} data-appear aria-labelledby="overview-title">
          <div className={styles.sectionHeading}>
            <h2 id="overview-title">Overview</h2>
          </div>
          <div className={styles.story}>
            <div className={styles.storySummary}>
              <p className={styles.eyebrow}>The story</p>
              <h2>I designed OKX’s fiat deposit experience from scratch.</h2>
              <p className={styles.storyLead}>
                One modular template launched USD, GBP, and EUR transfers, then
                Brazil’s Pix. The hardest problems weren’t on the screen. The
                flow ended inside a bank app we didn’t control. Four designers
                had to make four money flows feel like one. And in Brazil,
                Product, Global Management, and I each wanted a different MVP. In
                its first three months, Brazil alone saw $7M+ deposited.
              </p>
              <details className={styles.contributions}>
                <summary>
                  <span>My contributions</span>
                  <span className={styles.contributionToggle} aria-hidden="true" />
                </summary>
                <ul>
                  {contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </details>
            </div>
            <dl className={styles.projectMeta}>
              {projectDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

        </section>

        <OkxContextSection />

        <OkxResearchSection />
        <OkxCollaborationSection />
        <OkxHandoffSection />
        <OkxBrazilSection />
        <OkxResultsSection />

        <NextCaseStudy
          href="/case-studies/racial-justice"
          title="Five hours of charting, now five seconds"
        />
      </main>

      <footer className="contact-section" id="contact" aria-label="Contact and social links">
        <div className="contact-bottomline">
          <nav className="contact-social-links" aria-label="Email and social links">
            <a
              href="mailto:adria_meira@gsd.harvard.edu"
              className="contact-social-link"
              aria-label="Email Adria Meira"
            >
              <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
            </a>
            <a
              href="https://www.linkedin.com/in/adriameira"
              className="contact-social-link"
              aria-label="Adi Meira on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-linkedin-mark" aria-hidden="true">in</span>
            </a>
          </nav>
        </div>
      </footer>
      <WordRevealObserver />
    </div>
  )
}
