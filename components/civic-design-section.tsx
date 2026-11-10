import styles from "./civic-design-section.module.css"

type CivicWork = {
  category: "Civic Design" | "Civic Tech"
  location: string
  year: string
  title: string
  description: string
}

const civicWorks: CivicWork[] = [
  {
    category: "Civic Design",
    location: "Cerro de Pasco, Peru",
    year: "2025",
    title: "A development plan for Cerro de Pasco (Peru)",
    description:
      "Cerro de Pasco grew around a mine. Over time, the mining company bought parcels across the city that it can’t legally expand into, so many sit abandoned, adding to waste and insecurity. Working with the municipality, I led the stakeholder mapping, defined how to engage each one, and connected  the city’s Plan de Desarrollo Urbano 2033 to a development framework.",
  },
  {
    category: "Civic Design",
    location: "City of Boston Planning Department",
    year: "2025",
    title: "Story Swap: A card game to build trust between the City of Boston and its residents",
    description:
      "Boston’s Squares + Streets program wanted to engage a Vietnamese American neighborhood in their planning process. With the Planning Department, community leaders and a historian, my team designed Story Swap, a card game for conversations between generations to build trust and give the city a way to listen to its residents.",
  },
  {
    category: "Civic Design",
    location: "Somerville, Massachusetts",
    year: "2024",
    title: "Co-Designing a procurement process with Trellick Tower and Edenham Estate",
    description:
      "At Trellick Tower and Edenham Estate in London, residents waited months for repairs, saw work marked complete without anyone checking with them, and had no say in which contractors were hired or how. I facilitated two days of in-person workshops to map pain points and a service journey. The output is a resident-led procurement processes.",
  },
  {
    category: "Civic Tech",
    location: "Rio de Janeiro, Brazil",
    year: "2016",
    title: "If the City Were Ours: A platform for writing policy together",
    description:
      "If the City Were Ours was a grassroots movement that aimed to co-create a mayoral platform with Rio de Janeiro residents. I designed the digital platform that connected its in-person meetings with online participation through a forum clustered by themes and neighborhood. The candidate whose platform it fed, Marcelo Freixo, reached the runoff and won 1,163,662 votes (40.6%).",
  },
  {
    category: "Civic Tech",
    location: "Electoral campaign, São Paulo, Brazil",
    year: "2018",
    title: "Sâmia 5000: A campaign people could build themselves",
    description:
      "Sâmia Bomfim’s campaign for Brazil’s Congress treated the election as a matter of civic participation. As lead designer, I was responsible for the website, the brand and the printed materials, and mentored junior designers. The online platform allowed constituents to volunteer, donate, and open community headquarters. Sâmia was elected with almost 250k votes.",
  },
]

export function CivicDesignSection() {
  return (
    <section className={styles.section} aria-labelledby="civic-design-title" id="civic-work">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>CIVIC DESIGN &amp; TECH</p>
          <h2 className={styles.heading} id="civic-design-title">
            <span className={styles.headingSub}>Designing with cities, communities &amp; campaigns</span>
          </h2>
          <p className={styles.headingBody}>
            For a detailed case study, <a href="mailto:adria_meira@gsd.harvard.edu">email me</a>
          </p>
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
                <p>{work.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
