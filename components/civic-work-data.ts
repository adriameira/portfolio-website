export type CivicWork = {
  slug: string
  category: "Civic Design" | "Civic Tech"
  location: string
  year: string
  title: string
  challenge: string
  approach: string
  outcome: string
  metaDescription: string
}

export const civicWorks: CivicWork[] = [
  {
    slug: "cerro-de-pasco-development-framework",
    category: "Civic Design",
    location: "Cerro de Pasco, Peru",
    year: "2025",
    title: "A development plan for Cerro de Pasco",
    challenge:
      "Cerro de Pasco grew around a mine. Over time, the mining company bought parcels across the city that it cannot legally expand into, leaving some land abandoned and contributing to waste and insecurity.",
    approach:
      "Working with the municipality, I led stakeholder mapping and defined how to engage each group.",
    outcome:
      "I connected the city’s Urban Development Plan 2033 to a development framework.",
    metaDescription:
      "Adria Meira led stakeholder mapping with the Municipality of Cerro de Pasco and connected its Urban Development Plan 2033 to a development framework.",
  },
  {
    slug: "boston-story-swap-civic-engagement",
    category: "Civic Design",
    location: "Boston, Massachusetts",
    year: "2025",
    title: "Story Swap: a civic engagement card game in Boston",
    challenge:
      "Boston’s Squares + Streets program wanted to engage a Vietnamese American neighborhood in its planning process.",
    approach:
      "With the Planning Department, community leaders, and a historian, my team designed Story Swap, a card game for intergenerational conversations.",
    outcome:
      "The game was designed to build trust and give the city a way to listen to residents.",
    metaDescription:
      "Adria Meira and the City of Boston Planning Department designed Story Swap, a card game for civic engagement and intergenerational conversations.",
  },
  {
    slug: "trellick-tower-resident-led-procurement",
    category: "Civic Design",
    location: "London, United Kingdom",
    year: "2024",
    title: "A resident-led procurement process in London",
    challenge:
      "At Trellick Tower and Edenham Estate, residents waited months for repairs, saw work marked complete without anyone checking with them, and had no say in which contractors were hired or how.",
    approach:
      "I facilitated two days of in-person workshops with residents, using participatory action research to map pain points and a service journey.",
    outcome:
      "The community and I co-designed a resident-led procurement process.",
    metaDescription:
      "Adria Meira used participatory research with residents of Trellick Tower and Edenham Estate in London to co-design a resident-led procurement process.",
  },
  {
    slug: "rio-de-janeiro-participatory-platform",
    category: "Civic Tech",
    location: "Rio de Janeiro, Brazil",
    year: "2016",
    title: "A digital platform for residents to shape policy in Rio",
    challenge:
      "If the City Were Ours was a grassroots movement that aimed to co-create a mayoral platform with Rio de Janeiro residents.",
    approach:
      "I designed a digital platform that connected in-person meetings with online participation through a forum organized by theme and neighborhood.",
    outcome:
      "The platform supported Marcelo Freixo’s mayoral program; he reached the runoff with 1,163,662 votes (40.6%).",
    metaDescription:
      "Adria Meira designed a civic technology platform for Rio de Janeiro residents to co-create a mayoral program by theme and neighborhood.",
  },
  {
    slug: "samia-bomfim-participatory-campaign",
    category: "Civic Tech",
    location: "São Paulo, Brazil",
    year: "2018",
    title: "A participatory campaign for Brazil’s Congress",
    challenge:
      "Sâmia Bomfim’s campaign for Brazil’s Congress treated the election as a matter of civic participation.",
    approach:
      "As lead designer, I created the campaign website, brand, and printed materials, and mentored junior designers.",
    outcome:
      "The online platform let constituents volunteer, donate, and open community headquarters. Sâmia was elected with almost 250,000 votes.",
    metaDescription:
      "Adria Meira led design for Sâmia Bomfim’s participatory campaign platform, branding, and digital materials for Brazil’s Congress.",
  },
]
