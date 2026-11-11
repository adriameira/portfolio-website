import Image from "next/image"
import caseStudyStyles from "./racial-justice-case-study.module.css"
import styles from "./okx-case-study.module.css"

export function FiatJourneyDiagram() {
  return (
    <figure className={`${caseStudyStyles.caseMedia} ${styles.journeyFrame}`}>
      <Image
        className={styles.journeyDiagram}
        src="/case-studies/okx/fiat-user-journey.svg"
        alt="Flowchart of the complete OKX and Okcoin fiat journey. The Deposit path is highlighted; the rest of the fiat journey is outlined."
        width={3300}
        height={1640}
        sizes="(max-width: 700px) 100vw, 1280px"
        unoptimized
      />
      <figcaption className={caseStudyStyles.mediaCaption}>Complete fiat flow at OKX</figcaption>
    </figure>
  )
}
