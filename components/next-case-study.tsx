import Link from "next/link"
import styles from "./next-case-study.module.css"

type NextCaseStudyProps = {
  href: string
  title: string
}

export function NextCaseStudy({ href, title }: NextCaseStudyProps) {
  return (
    <nav className={styles.nextCaseStudy} data-appear aria-label="Next case study">
      <p className={styles.label}>Next case study</p>
      <Link className={styles.link} href={href}>
        {title}
      </Link>
    </nav>
  )
}
