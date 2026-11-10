import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, Brain, Layers, Mail, MousePointerClick } from "lucide-react"
import { WordRevealObserver } from "./word-reveal"
import { NextCaseStudy } from "./next-case-study"
import caseStyles from "./racial-justice-case-study.module.css"
import styles from "./eddi-case-study.module.css"
import { ResearchSlider } from "./eddi-research-slider"
import { EddiIterationTabs } from "./eddi-iteration-tabs"

const projectDetails = [
  { label: "Role", value: "Senior Product Designer · only designer" },
    { label: "Team", value: "CEO and engineers · no product manager" },
    { label: "Scope", value: "Product framing, flow audit, user interviews, ticket analysis, design goals, user flows, prototyping, design reviews, design system" },
  { label: "Tools", value: "Figma, Claude Design, HeroUI" },
]

const contributions = [
  "Framed the problem, established design goals, and set review criteria with the CEO and engineering team.",
  "Audited the end-to-end grant-matching workflow, interviewed users, and analyzed support tickets with an AI bot connected to Slack.",
  "Wrote the research protocol, facilitated sessions, synthesized findings, and translated them into user flows and prototypes.",
  "Led four rounds of design reviews and built Eddi’s first design system on top of HeroUI.",
]

const applicationFlow = [
  "Check eligibility",
  "Start the application",
  "Review required documents",
  "Upload anything missing",
  "Draft and refine documents",
  "Download the application",
]

const findings = [
  {
    source: "uxr insight",
    title: "No clear beginning",
    copy: "Users could find a match, but did not know where to begin or how to move forward.",
  },
  {
    source: "uxr insight",
    title: "No bridge from match to apply",
    copy: "Nothing explained how a matched grant became an application.",
  },
  {
    source: "uxr insight",
    title: "Documents without context",
    copy: "Users could not tell how each document related to the grant or what its sections meant.",
  },
  {
    source: "uxr insight",
    title: "Issues with the AI",
    copy: "People did not know what the AI used, how to change a draft, or that they could highlight text.",
  },
]

const designGoals = [
  { title: "Reduce cognitive load", copy: "Make it easy to know where to go and what to do next.", icon: Brain },
  { title: "Reduce clicks", copy: "Shorten the distance between wanting a grant and acting on it.", icon: MousePointerClick },
  { title: "Make next steps visible", copy: "Let the interface lead the workflow instead of waiting to be explored.", icon: ArrowRight },
  { title: "Show less at once", copy: "Keep competing information from obscuring the next decision.", icon: Layers },
]

const iterations = [
  {
    title: "Explore the structure",
    copy: "In my first design proposal, users verified eligibility before seeing any of the grant's details. The logic was to keep the first step light. If an organization isn't eligible, a full grant overview is reading time spent on something they can't apply to, and the first screen should lead to one decision: start the application or dismiss the grant.",
    screen: "/case-studies/eddi-round-1.svg",
  },
  {
    title: "Details on demand",
    copy: "The CEO pushed back. His argument was that people want to see what a grant offers before they invest effort in it, and that the award, agency and due date are what make someone decide to apply. So round 2 put eligibility and the grant's details on the same screen. I'd have kept the first step leaner, but his reasoning was about motivation, not just clarity, and the call was cheap to reverse if the data proved him wrong. I committed and made the combined screen as easy to scan as possible: eligibility stays the primary action, and the details support it.",
    screen: "/case-studies/eddi-round-2.svg",
  },
  {
    title: "Make the AI accountable",
    copy: "Each application is made of several documents, each with its own sections and requirements. The question was how to show that detail without burying the user. The CEO wanted cards, so the team could reuse an existing pattern and ship faster. I argued for opening each section in a side drawer instead, and made the case on both fronts. For users, a drawer isolates one section at a time: they read what it needs, act on it, and close it, without the rest of the application competing for attention. For engineering, the cost was the same, because drawers were already used widely across the product. Same effort, less cognitive load. The drawer shipped.",
    screen: "/case-studies/eddi-round-3.svg",
  },
  {
    title: "Make it ready to build",
    copy: "The last round focused on the document editor, where applications are actually won or abandoned. Long grant documents gave users no sense of where they were or how much was left. I proposed a vertical menu listing every section of the document and its subsections, each showing its progress. It turns a long document into a set of finishable parts: users can jump to any section, see what's done, and see what's left. That visible progress is also a conversion lever, because an application that looks 70% done is more likely to get finished than one that looks like a blank page.",
    screen: "/case-studies/eddi-round-4.svg",
  },
]


function CaseSection({
  id,
  label,
  title,
  children,
  className,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`${caseStyles.caseSection}${className ? ` ${className}` : ""}`} data-appear aria-labelledby={id}>
      <div className={caseStyles.sectionIndex}><span>{label}</span></div>
      <div className={caseStyles.sectionBody}>
        <h2 id={id}>{title}</h2>
        {children}
      </div>
    </section>
  )
}

function WorkflowFigure({
  title,
  steps,
  className,
}: {
  title: string
  steps: string[]
  className: string
}) {
  return (
    <figure className={styles.workflowFigure}>
      <p className={styles.workflowTitle}>{title}</p>
      <ol className={className}>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </figure>
  )
}

function ResearchFindings() {
  return (
    <div className={caseStyles.insightGrid}>
      {findings.map((finding) => (
        <article className={caseStyles.insightCard} key={finding.title}>
          <div className={caseStyles.cardHeading}>
            <h3>{finding.title}</h3>
            <p className={caseStyles.cardLabel}>{finding.source}</p>
          </div>
          <p>{finding.copy}</p>
        </article>
      ))}
    </div>
  )
}

export function EddiCaseStudy() {
  return (
    <div className={`portfolio-page ${caseStyles.caseStudyPage} ${styles.eddiPage}`}>
      <header className="portfolio-header">
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">ADI MEIRA</Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <a className="portfolio-nav-about" href="/about">ABOUT</a>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>

      <main className={caseStyles.caseStudyMain} id="top">
        <section className={caseStyles.hero} data-appear aria-labelledby="eddi-title">
          <Image className={`${caseStyles.heroLogo} ${styles.fullHeroLogo}`} src="/logos/eddi.svg" alt="Eddi logo" width={114} height={33} priority />
          <h1 className={caseStyles.heroTitle} id="eddi-title">{"From \"you're a match\" to \"ready to submit\""}</h1>
          <div className={caseStyles.heroIntro}>
            <p>Eddi is an early-stage AI startup that helps nonprofits, schools, tribal governments, and cities find and win grants. Its AI could match an organization to funding and draft application documents. But the core workflow wasn&apos;t converting: people saw their matches and stopped there.</p>
          </div>
          <figure className={`${caseStyles.caseMedia} ${styles.contextMedia}`}>
            <Image
              className={`${caseStyles.aiHeroImage} ${styles.contextImage}`}
              src="/case-studies/eddi-hero.svg"
              alt="Eddi grant-matching workspace overview"
              width={1512}
              height={1263}
            />
            <figcaption className={`${caseStyles.mediaCaption} ${styles.contextCaption}`}>Eddi grant-matching workspace</figcaption>
          </figure>
        </section>

        <section className={caseStyles.overview} data-appear aria-labelledby="eddi-story-title">
          <div className={caseStyles.sectionHeading}>
            <h2 id="eddi-story-title">The story</h2>
          </div>
          <div className={caseStyles.story}>
            <div className={caseStyles.storySummary}>
              <p className={caseStyles.eyebrow}>Less AI, more direction</p>
              <h2>I turned an AI match into a guided application.</h2>
              <p className={caseStyles.storyLead}>As Eddi&apos;s only designer, with no product manager, I owned grant matching end to end: problem framing, research, scope, design, and the foundations underneath it. The product didn&apos;t lack AI capability. It lacked direction. I reframed the work around one question: “What should the user do next?” and led four review rounds with the CEO and engineers in three weeks.</p>
              <details className={caseStyles.contributions}>
                <summary>
                  <span>My contributions</span>
                  <span className={caseStyles.contributionToggle} aria-hidden="true" />
                </summary>
                <ul>
                  {contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                </ul>
              </details>
            </div>
            <dl className={caseStyles.projectMeta}>
              {projectDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CaseSection id="eddi-context-title" label="Context" title="An AI product with low conversion rates">
          <p>Eddi is an operating system that brings operational, financial and staffing data into one a single platform. Its AI help teams without technical expertise manage their funding and track their outcomes. Funding is what keeps these organizations running, so grant matching was one of the product&apos;s main features. It finds grants an organization qualifies for and helps draft applications.</p>
          <p>I was the first design hire of the company, working directly with the CEO and engineers. With no product manager, product decisions defaulted to design: what problem we were solving, what success looked like, what to cut, and when a decision was final.</p>
          <figure className={`${caseStyles.caseMedia} ${styles.contextMedia}`}>
            <Image
              className={`${caseStyles.aiHeroImage} ${styles.contextImage}`}
              src="/case-studies/eddi-home.svg"
              alt="Eddi home dashboard bringing operational, financial, and staffing tools into one workspace"
              width={1280}
              height={1069}
            />
            <figcaption className={`${caseStyles.mediaCaption} ${styles.contextCaption}`}>Eddi’s home screen</figcaption>
          </figure>
        </CaseSection>

        <CaseSection id="eddi-research-title" label="Research" title="A flow with too much information, and not enough action" className={styles.researchSection}>
          <p>My first step to understand how to redesign the grant matching feature was to map and analyze the current experience.&nbsp;</p>
          <ResearchSlider />
        </CaseSection>

        <CaseSection id="eddi-findings-title" label="user&apos;s perspective" title="The breakdowns ran through the whole journey">
          <p>I interviewed users and Eddi&apos;s head of growth and implementation, who heard from customers every day. I also used an Slack AI bot to analyze the support tickets about the grant matching experience.&nbsp;These made me understand that people came to Eddi under pressure, looking for funding their organizations depended on. Dense screens added stress, unclear progress created anxiety, and too much information led to paralysis.&nbsp;</p>
          <ResearchFindings />
        </CaseSection>

        <CaseSection id="eddi-framing-title" label="Framing" title="Setting the criteria before the screens" className={styles.framingSection}>
          <p>With no PM, someone had to define what “better” meant before the team started reacting to designs. I proposed four design goals to the team.</p>
          <div className={styles.goalGrid}>
            {designGoals.map(({ title, copy, icon: Icon }) => (
              <article key={title}>
                <span className={styles.goalIcon} aria-hidden="true">
                  <Icon size={32} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="eddi-flow-title" label="User flow" title="Every step became a decision with a clear outcome" className={styles.userFlowSection}>
  <p>Before designing the interface, I wanted every stakeholder to be on the same page about the journey itself,&nbsp;so I mapped the flow at low fidelity and walked the CEO and engineers through it. This gave everyone one shared map: Engineering could see every state and decision they would need to build; the CEO could check the logic of the product before reacting to how it looked.</p>
  <figure className={styles.userFlowFigure}>
    <div className={styles.userFlowScroller} role="region" aria-label="Scrollable grant application flow diagram" tabIndex={0}>
      <Image
        className={styles.userFlowImage}
        src="/case-studies/eddi-user-flow.svg"
        alt="Flow diagram from checking grant eligibility through preparing and completing an application"
        width={1819}
        height={666}
      />
    </div>
    <figcaption className={styles.userFlowCaption}>Grant-matching user flow and information displayed at each stage</figcaption>
  </figure>
        </CaseSection>

        <CaseSection id="eddi-iterations-title" label="Iterations" title="Polishing the Design with the CEO" className={styles.iterationSection}>
          <p>I used Claude Design to build and refine interactive prototype, so each round&apos;s feedback became a working version the CEO and engineers could click through by the next review. That kept discussion focused on how the flow behaved, not on how it might behave.</p>
  <EddiIterationTabs rounds={iterations} />
        </CaseSection>

        <CaseSection id="eddi-foundations-title" label="Foundations" title="Building Eddi’s first design system">
          <p>Every screen had been assembled from scratch, so inconsistencies piled up and design and engineering kept rebuilding the same pieces. Since the engineers already used HeroUI, I used the available Figma kit as the base and added Eddi’s visual identity on top. Text input, card, and button came first because they appeared on almost every screen.</p>
          <div className={styles.foundationAnimation}>
            <img src="/case-studies/eddi-foundations-animation.svg" alt="Animated Eddi button variants" />
          </div>
                </CaseSection>

        <CaseSection id="eddi-result-title" label="Result" title="One path from match to application" className={styles.resultSection}>
          <p>The redesigned flow takes an organization from a matched grant to a finished application in one guided path. Grants are organized by status. Eligibility comes first. Each required document is listed with what it needs. The AI drafts, explains, and checks every document against the funder’s rubric. Shared components give the next features a foundation to reuse.</p>
          <div className={styles.resultMetric}>
            <strong>40%</strong>
            <span>fewer steps in the grant-matching experience</span>
          </div>
          <div className={styles.resultAnimationPlaceholder}>
            <video
              src="/case-studies/eddi-result-video.mov"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Looping demonstration of the redesigned grant-matching experience"
            />
          </div>

        </CaseSection>

        <NextCaseStudy
          href="/case-studies/ai-agent"
          title="Compliance at the speed of AI"
        />
      </main>

      <footer className="contact-section" id="contact" aria-label="Contact and social links">
        <div className="contact-bottomline">
          <nav className="contact-social-links" aria-label="Email and social links">
            <a href="mailto:adria_meira@gsd.harvard.edu" className="contact-social-link" aria-label="Email Adria Meira">
              <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
            </a>
            <a href="https://www.linkedin.com/in/adriameira" className="contact-social-link" aria-label="Adria Meira on LinkedIn" target="_blank" rel="noreferrer">
              <span className="contact-linkedin-mark" aria-hidden="true">in</span>
            </a>
          </nav>
        </div>
      </footer>
      <WordRevealObserver />
    </div>
  )
}
