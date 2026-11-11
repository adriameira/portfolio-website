import { Mail } from "lucide-react"
import { CaseStudyGrid } from "../components/case-study-grid"
import { CivicDesignSection } from "../components/civic-design-section"
import { WordRevealObserver, WordRevealText } from "../components/word-reveal"

type CompanyLogo =
  | { name: string; kind: "text" }
  | { name: string; kind: "icon" | "wordmark"; src: string; wide?: boolean; showLabel?: boolean }
  | { name: string; kind: "designlab"; src: string }
  | { name: string; kind: "eddi"; src: string }
  | { name: string; kind: "city-boston"; src: string }
  | { name: string; kind: "bkc"; src: string }

const companyLogos: CompanyLogo[] = [
  { name: "OKX", kind: "wordmark", src: "/logos/okx.svg" },
  { name: "OKCoin", kind: "wordmark", src: "/logos/logotype.svg" },
  { name: "Pyxos AI", kind: "wordmark", src: "/logos/logo-white.svg" },
  { name: "Orderful", kind: "icon", src: "https://admin.orderful.com/static/media/orderful-logo-asterisk.1abffb6cb8b75aa4b51d426cd921d25a.svg", showLabel: true },
  { name: "Harvard University", kind: "wordmark", src: "/logos/harvard-university-white.svg", wide: true },
  { name: "MIT", kind: "wordmark", src: "/logos/mit.svg" },
  { name: "Berkman Klein Center", kind: "bkc", src: "/logos/berkman-klein-center.svg" },
  { name: "United Nations", kind: "icon", src: "https://thesvg.org/icons/united-nations/mono.svg", showLabel: true },
  { name: "Designlab", kind: "designlab", src: "/logos/designlab.png" },
  { name: "Eddi", kind: "eddi", src: "/logos/eddi.svg" },
  { name: "City of Boston", kind: "city-boston", src: "/logos/city-of-boston.png" },
  { name: "Nike", kind: "wordmark", src: "/logos/nike.svg?v=2" },
  { name: "L'Occitane en Provence", kind: "wordmark", src: "https://www.loccitane.com/on/demandware.static/Sites-OCC-Site/-/default/dwd9d33844/img/logo.svg" },
  { name: "IORQ", kind: "wordmark", src: "/logos/logo.svg" },
]

export default function Home() {
  const companyLogoItems = companyLogos.map((company) => (
    <li className="company-logo-item" key={company.name}>
      {company.kind === "bkc" ? (
        <span className="company-logo-bkc">
          <img src={company.src} alt={company.name} />
        </span>
      ) : company.kind === "designlab" ? (
        <span className="company-logo-designlab">
          <img src={company.src} alt={company.name} />
        </span>
      ) : company.kind === "eddi" ? (
        <span className="company-logo-eddi">
          <img src={company.src} alt={`${company.name} logo`} />
        </span>
      ) : company.kind === "wordmark" && company.name === "MIT" ? (
        <span className="company-logo-mit">
          <img src={company.src} alt={`${company.name} logo`} />
        </span>
      ) : company.kind === "city-boston" ? (
        <span className="company-logo-city-boston">
          <img src={company.src} alt={company.name} />
        </span>
      ) : company.kind === "text" ? (
        <span className="company-logo-wordmark">{company.name}</span>
      ) : company.kind === "icon" && company.showLabel ? (
        <span className="company-logo-brand">
          <img className="company-logo-image" src={company.src} alt="" aria-hidden="true" />
          <span className="company-logo-wordmark">{company.name}</span>
        </span>
      ) : (
        <img
          className={`company-logo-image${company.wide ? " company-logo-image--wide" : ""}`}
          src={company.src}
          alt={company.name}
        />
      )}
    </li>
  ))

  return (
    <div className="portfolio-page">
      <header className="portfolio-header portfolio-header--over-hero" data-appear>
        <a className="wordmark" href="#top" aria-label="Adi Meira, home">
          ADI MEIRA
        </a>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <a className="portfolio-nav-about" href="/about">ABOUT</a>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>

      <main id="top" className="portfolio-main">
        <section className="portfolio-hero" aria-labelledby="portfolio-hero-title">
          <span className="portfolio-hero-dot" aria-hidden="true" />
          <div className="portfolio-hero-main">
            <h1 className="portfolio-hero-title" id="portfolio-hero-title" data-word-reveal>
              <span className="portfolio-hero-title-visual" aria-hidden="true">
                <span className="contact-title-word portfolio-hero-title-line">
                  <span className="portfolio-hero-title-word--light">Adi designs for</span>
                </span>
                <span className="contact-title-word contact-title-word--second portfolio-hero-title-line">
                  <span className="portfolio-hero-title-word--bold">startups, global companies</span>
                </span>
                <span className="contact-title-word portfolio-hero-title-line portfolio-hero-title-line--third">
                  <span className="portfolio-hero-title-word--medium">and governments</span>
                </span>
              </span>
              <span className="sr-only">Adi designs for startups, global companies and governments</span>
            </h1>
            <div className="portfolio-hero-copy">
              <p className="portfolio-hero-bio">
                <WordRevealText text="Harvard University alumn with 7 years of work experience in digital product design" />
                <br />
                <WordRevealText text="Available to work in the US and worldwide" />
              </p>
            </div>
          </div>
        </section>
        <section className="company-strip" aria-label="Companies Adi has worked with">
          <div className="company-strip-inner">
            <p className="company-strip-tag"><WordRevealText text="teams i've worked with" /></p>
            <div className="logo-marquee" data-appear>
              <div className="logo-marquee-track">
                <ul className="company-logo-list">{companyLogoItems}</ul>
                <ul className="company-logo-list" aria-hidden="true">{companyLogoItems}</ul>
              </div>
            </div>
          </div>
        </section>
        <CaseStudyGrid />
        <CivicDesignSection />
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
              <img src="/logos/linkedin-white.svg" alt="" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </footer>
      <WordRevealObserver />
    </div>
  )
}
