import Image from "next/image"
import styles from "./racial-justice-case-study.module.css"

export function MetricsExplorer() {
  return (
    <div className={styles.metricsExplorer}>
      <div className={styles.metricsIntro}>
        <h2 id="metrics-title">Defining the architecture</h2>
        <p>
          Before any screen, we had to agree on which metrics mattered, and what each review status actually meant.
        </p>
      </div>

      <div className={styles.metricsStatusWide}>
        <ReviewStatusDiagram />
      </div>

      <section
        className={styles.metricsRow}
        aria-labelledby="metrics-choice-title metrics-status-title"
      >
        <div className={styles.metricsTextGroup}>
          <h3 id="metrics-choice-title">What belongs on the dashboard?</h3>
          <p>
            According to the research, users wanted the platform to display a wide range of metrics. Instead of prioritizing them myself, I asked users to do so. Research-side metrics like top grantors and top exclusion types ranked high. On the process side, nearly everything people needed came down to one thing: deed review status.
          </p>
        </div>
        <div className={styles.metricsTextGroup}>
          <h3 id="metrics-status-title">What does “confirmed” actually mean?</h3>
          <p>
            How many reviews make a deed confirmed? What happens when two reviewers disagree? When does a deed become a false positive instead of needing another look? I&apos;ve worked with users and the team to understand the detail of each deed status.
          </p>
        </div>
      </section>
    </div>
  )
}

function ReviewStatusDiagram() {
  return (
    <figure className={styles.metricsStatusFigure}>
      <Image
        className={styles.metricsLogicImage}
        src="/case-studies/Logic.svg"
        alt="Logic diagram showing review decisions, with green checkmarks for yes branches and red X marks for no branches."
        width={1703}
        height={271}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 1024px) 100vw, 1000px"
      />
<figcaption className={styles.metricsDiagramCaption}>
          Deed status flow
        </figcaption>
    </figure>
  )
}
