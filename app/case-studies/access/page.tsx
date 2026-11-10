import Link from "next/link"
import styles from "./access.module.css"

export const metadata = {
  title: "Private Case Studies | Adi Meira",
  robots: { index: false, follow: false },
}

export default async function CaseStudyAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; returnTo?: string }>
}) {
  const { error, returnTo } = await searchParams
  const destination =
    returnTo?.startsWith("/case-studies/") && !returnTo.startsWith("//")
      ? returnTo
      : "/case-studies/ai-agent"
  const message =
    error === "invalid"
      ? "That password didn’t match. Please try again."
      : error === "setup"
        ? "Password access is not configured yet. Set the server-side CASE_STUDY_PASSWORD to enable access."
        : null

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">
          ADI MEIRA
        </Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <Link className="portfolio-nav-about" href="/about">ABOUT</Link>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>
      <div className={styles.content}>
        <section className={styles.panel} aria-labelledby="access-title">
          <p className={styles.eyebrow}>PRIVATE CASE STUDIES</p>
          <h1 className={styles.title} id="access-title">Enter the password</h1>
          <p className={styles.description}>These project details are shared privately. Enter the password to continue.</p>
          <form className={styles.form} action="/api/case-study-access" method="post">
            <input type="hidden" name="returnTo" value={destination} />
            <label className={styles.label} htmlFor="case-study-password">Password</label>
            <input
              className={styles.input}
              id="case-study-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
            {message ? <p className={styles.message} role="alert">{message}</p> : null}
            <button className={styles.button} type="submit">Continue</button>
          </form>
        </section>
      </div>
    </main>
  )
}
