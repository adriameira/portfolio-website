import Link from "next/link"
import { civicWorks } from "./civic-work-data"
import styles from "./civic-design-section.module.css"

export function CivicDesignSection() {
  return (
    <section className={styles.section} aria-labelledby="civic-design-title" id="civic-work">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>CIVIC DESIGN &amp; TECH</p>
          <h2 className={styles.heading} id="civic-design-title">
            <span className={styles.headingSub}>Designing with cities, communities &amp; campaigns</span>
          </h2>
          <p className={styles.headingBody}>Explore a short public case study for each project below.</p>
        </header>

        <div className={styles.list}>
          {civicWorks.map((work) => (
            <details className={styles.item} name="civic-work" key={`${work.year}-${work.title}`}>
              <summary className={styles.summary}>
                <span className={styles.title}>{work.title}</span>
                <svg
                  aria-hidden="true"
                  className={styles.chevron}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </summary>
              <div className={styles.body}>
                <p>{work.challenge} {work.approach} {work.outcome}</p>
                <Link className={styles.caseStudyLink} href={`/civic-work/${work.slug}`}>
                  Read the case study
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
