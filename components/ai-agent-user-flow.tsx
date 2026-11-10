import styles from "./racial-justice-case-study.module.css"

const insightCategories = [
  "Data collection",
  "Data sharing",
  "Third-party sharing",
  "Security measures",
  "User rights and control",
  "Children’s privacy",
]

export function AiAgentUserFlow() {
  return (
    <figure className={styles.userFlow} aria-labelledby="user-flow-title">
      <figcaption className={styles.userFlowCaption} id="user-flow-title">
        Core analysis flow
      </figcaption>
      <ol className={styles.userFlowSequence} aria-label="Analysis setup">
        <li>Start analysis</li>
        <li>Upload policy</li>
        <li>Choose benchmarks</li>
      </ol>
      <div className={styles.userFlowBranches}>
        <section className={styles.userFlowOutcome} aria-labelledby="risk-meter-title">
          <h3 id="risk-meter-title">Risk meter</h3>
          <ul className={styles.userFlowRiskLevels} aria-label="Risk levels">
            <li>Low</li>
            <li>Medium</li>
            <li>High</li>
          </ul>
        </section>
        <section className={styles.userFlowOutcome} aria-labelledby="insight-categories-title">
          <h3 id="insight-categories-title">Insights</h3>
          <ul className={styles.userFlowCategories}>
            {insightCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section>
      </div>
    </figure>
  )
}
