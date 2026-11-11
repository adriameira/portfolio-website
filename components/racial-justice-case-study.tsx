import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { DecisionMakingContent } from "./decision-making-tabs"
import { MetricsExplorer } from "./metrics-explorer"
import { PrototypeSlider } from "./prototype-slider"
import { ResultMetrics } from "./result-metrics"
import { WordRevealObserver } from "./word-reveal"
import { NextCaseStudy } from "./next-case-study"
import styles from "./racial-justice-case-study.module.css"

const projectDetails = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Team", value: "Me & 1 Engineer & 1 Product Manager" },
  {
    label: "Scope",
    value: "User research, workflow analysis, metric definition, prototyping, usability testing, data visualization",
  },
  { label: "Tools", value: "Figma, Figma Make, FigJam" },
]

const contributions = [
  "Sole product designer on the dashboard end to end: research, metric definition, visual direction, and the prototype that went into build.",
  "Ran user research and workflow analysis with reviewers and project leads, separating internal workflow metrics from public-facing analytical ones.",
  "Mapped the existing data pipeline — deed review, SQL storage, backend APIs, frontend charts — to locate where friction actually lived.",
  "Facilitated a prioritization session that reframed the dashboard around communicating findings to external partners, so the project could win buy-in.",
  "Ran usability testing in the Crowd-Sourced City workshop at MIT, then rebuilt terminology, palette and chart types on what it surfaced.",
  "Partnered with the engineer on technical constraints and data structures so the design held against the real database.",
]


const insights = [
  {
    source: "uxr insight",
    title: "Fragmented workflows",
    copy: "Users needed to track internal progress and surface public-facing findings.",
  },
  {
    source: "uxr insight",
    title: "No visible patterns",
    copy: "Users could read one deed at a time, but had no way to see the patterns connecting them.",
  },
  {
    source: "uxr insight",
    title: "Geography matters",
    copy: "Most published racial covenant projects represent their data geospatially.",
  },
  {
    source: "uxr insight",
    title: "Data requires context",
    copy: "Popular dataviz platforms lead with the metrics that matter most, rather than raw numbers alone.",
  },
]

export function RacialJusticeCaseStudy() {
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
        <section className={styles.hero} data-appear aria-labelledby="racial-justice-title">
          <span className={styles.mitLogoBadge}>
            <Image
              className={styles.heroLogo}
              src="/logos/mit.svg"
              alt="MIT logo"
              width={72}
              height={38}
              priority
            />
          </span>
          <h1 className={styles.heroTitle} id="racial-justice-title">
            Five hours of charting, now five seconds
          </h1>
          <div className={styles.heroIntro}>
            <p>
              Turned an AI-assisted deed review tool into a self-serve analytics dashboard, raising weekly active users 63% in its first months.
            </p>
          </div>
          <div className={styles.heroDashboard}>
            <video
              className={styles.originalVideo}
              src="/case-studies/racial-justice-overview.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          </div>
        </section>

        <section className={styles.overview} data-appear aria-labelledby="overview-title">
          <div className={styles.sectionHeading}>
            <h2 id="overview-title">Overview</h2>
          </div>
          <div className={styles.story}>
            <div className={styles.storySummary}>
              <p className={styles.eyebrow}>The story</p>
              <h2 id="story-title">
                I turned a deed reviewer into an analytics dashboard.
              </h2>
              <p className={styles.storyLead}>
                MIT’s pipeline used AI to read scanned deeds and flag restrictive language, one deed at a time. While the reading worked, nobody could see what the flags added up to. When did exclusion happen, where, against whom, and who wrote it in?
              </p>
              <p className={styles.storyLead}>
                After running research with users, I designed a dashboard where confirmed flags build themselves into patterns. It cut a five-hour charting task to seconds and lifted weekly active use 63%.
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

        <section className={styles.caseSection} data-appear aria-labelledby="context-title">
          <div className={styles.sectionIndex}>
            <span>Context</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="context-title">The AI’s job ended at the flag</h2>
            <p>
              The team had built a solid pipeline. OCR extracted text from scanned deeds, a model flagged restrictive language, and researchers verified each flag, logging exclusion type, date, location and grantor.
            </p>
            <p>
              All the useful data was there. But the product treated every deed as a task to close, not as evidence. The platform could say how many deeds had come in, been flagged or been reviewed. It couldn’t say what they showed.
            </p>
            <figure className={styles.caseMedia}>
              <video
                className={styles.originalVideo}
                src="/case-studies/racial-justice-context.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
              />
              <figcaption className={styles.mediaCaption}>
                MIT&apos;s original platform for reviewing deeds
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.caseSection} ${styles.researchInsights}`} data-appear aria-labelledby="insights-title">
          <div className={styles.sectionIndex}>
            <span>Insights</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="insights-title">Leadership and users wanted different platforms</h2>
            <p className={styles.reviewersIntro}>
              As more users joined, leadership wanted the platform to be a &quot;data interface with real-time visualizations of existing data and progress on annotating deeds.&quot; Receiving this brief made me curious about what users wanted the platform to be, so I did some research. I wrote interview scripts, ran the sessions, and read through the feedback tickets reviewers had been filing.
              <br />
              <br />
              One of the biggest insight from this stage was understanding that the platform could say how many deeds had come in, been flagged or been reviewed. However, it couldn&apos;t say when and where exclusion happened, who was targeted, or who was responsible.
            </p>
            <div className={styles.insightGrid}>
            {insights.map((insight) => (
              <article className={styles.insightCard} data-appear key={insight.title}>
                <div className={styles.cardHeading}>
                  <h3>{insight.title}</h3>
                  <p className={styles.cardLabel}>{insight.source}</p>
                </div>
                <p>{insight.copy}</p>
              </article>
            ))}
        </div>
            <p className={styles.insightCaption}>Some of insights that emerged from the research</p>
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="system-boundary-title">
          <div className={styles.sectionIndex}>
            <span>System boundary</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="system-boundary-title">Deciding what the system should do</h2>
            <p>
              The AI already did steps 1 and 2 well. My work was deciding what should happen after a person verified a flag, and where the system should stop.
            </p>
            <p>
              The machine reads, people verify, the system aggregates, historians interpret. I drew that boundary on purpose. With racial justice data, a system that draws historical conclusions on its own would be a credibility and ethics risk. The dashboard surfaces patterns and leaves the meaning to the researchers who publish it.
            </p>
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="prioritization-title">
          <div className={styles.sectionIndex}>
            <span>Decision-making</span>
          </div>
          <div className={styles.sectionBody}>
            <DecisionMakingContent />
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="metrics-title">
          <div className={styles.sectionIndex}>
            <span>DATA &amp; ARCHITECTURE</span>
          </div>
          <div className={styles.sectionBody}>
            <MetricsExplorer />
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="testing-title">
          <div className={styles.sectionIndex}>
            <span>iterations</span>
          </div>
          <div className={styles.sectionBody}>
            <div className={styles.testingIntro}>
              <h2 id="testing-title">Trying out the interface</h2>
              <p>
                Three rounds took the dashboard from a structural wireframe to real data, then into usability testing, where the interface and my assumptions were challenged.
              </p>
            </div>
            <div className={styles.testingLayout}>
              <div className={styles.testingCopy}>
                <div className={styles.caseSubsection}>
                  <div className={styles.testingRoundHeading}>
                    <span className={styles.testingRoundLabel}>1</span>
                    <h4>Structure</h4>
                  </div>
                  <p>
                    A low-fidelity wireframe tested the hierarchy, displaying operational metrics on top, and findings below.
                  </p>
                </div>
                <div className={styles.caseSubsection}>
                  <div className={styles.testingRoundHeading}>
                    <span className={styles.testingRoundLabel}>2</span>
                    <h4>Real data</h4>
                  </div>
                  <p>
                    I filled the structure with statuses, a filterable deed table, and timeline charts.
                  </p>
                </div>
                <div className={styles.caseSubsection}>
                  <div className={styles.testingRoundHeading}>
                    <span className={styles.testingRoundLabel}>3</span>
                    <h4>Testing</h4>
                  </div>
                  <p>
                    Users pointed to content issues.
                  </p>
                </div>
              </div>
              <div className={styles.testingVisual}>
                <Image
                  alt="Participants discuss a dashboard during a user-testing workshop."
                  className={styles.testingImage}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  src="/case-studies/racial-justice-usability-testing.jpg"
                />
              </div>
            </div>
            <PrototypeSlider />
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="result-title">
          <div className={styles.sectionIndex}>
            <span>Result</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="result-title">From flagged deeds to findings</h2>
            <p>
              It started as an admin tool for reviewing one deed at a time. It ended as a place to search reviewed deeds and see patterns by grantor and exclusion type, across counties and date ranges.
            </p>
            <p className={styles.sectionFollowup}>
              The dashboard is built around three core visualization modules, plus filters by county and date range, downloadable CSV and static charts, real-time updates from the database, and a modular chart system (bar, line, pie).
            </p>
            <ResultMetrics />
          </div>
          <div className={styles.prototypeFrame}>
            <iframe
              src="https://banjo-prove-00734900.figma.site/"
              title="Racial Covenants dashboard prototype"
              loading="lazy"
            />
          </div>
        </section>

        <NextCaseStudy
          href="/case-studies/eddi"
          title="From “you’re a match” to “ready to submit”"
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
              aria-label="Adria Meira on LinkedIn"
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
