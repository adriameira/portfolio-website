export default function Loading() {
  return (
    <main className="portfolio-loading" aria-busy="true">
      <div className="portfolio-loading__status" role="status" aria-live="polite">
        <span className="portfolio-loading__indicator" aria-hidden="true" />
        <span>Loading page</span>
      </div>
    </main>
  )
}
