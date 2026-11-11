import { LayoutGrid, Scale, Users } from "lucide-react"
import styles from "./racial-justice-case-study.module.css"

export function DecisionMakingContent() {
  return (
    <div className={styles.decisionStory}>
      <div className={styles.decisionIntro}>
        <h2 id="prioritization-title">Understanding requirements &amp; constraints</h2>
        <p>
          With under two months and one engineer, we couldn&apos;t build everything the research asked for. This is how I worked with my cross-functional peers to understand the best way to move forward with the project.
        </p>
      </div>

      <div className={styles.decisionGrid}>
        <article className={styles.decisionCard} aria-labelledby="decision-jobs-title">
          <div className={styles.decisionIcon} aria-hidden="true">
            <LayoutGrid size={28} strokeWidth={1.8} />
          </div>
          <h3 id="decision-jobs-title">Turning research into actionable items</h3>
          <p>
            With the PM, I turned the research into more than fifteen jobs to be done and we ranked them by user value. Three came out on top: explore the dataset, turn patterns into visuals, and communicate findings.
          </p>
        </article>

        <article className={styles.decisionCard} aria-labelledby="decision-priorities-title">
          <div className={styles.decisionIcon} aria-hidden="true">
            <Users size={28} strokeWidth={1.8} />
          </div>
          <h3 id="decision-priorities-title">Prioritizing with cross-functional peers</h3>
          <p>
            The team mapped every option against user value and engineering effort. I argued for automating the reporting work the team repeated before every presentation. Showing that automation would save time and make the numbers more reliable got the team aligned.
          </p>
        </article>

        <article className={styles.decisionCard} aria-labelledby="decision-tradeoffs-title">
          <div className={styles.decisionIcon} aria-hidden="true">
            <Scale size={28} strokeWidth={1.8} />
          </div>
          <h3 id="decision-tradeoffs-title">Agreements &amp; trade-offs</h3>
          <p>
            The MVP needed charts that build themselves from live data, filters by county and date range, and exports researchers could drop into a presentation. It didn&apos;t need the map. Patterns over time and by actor came first; geography became the next layer, not a cut idea.
          </p>
        </article>
      </div>
    </div>
  )
}


