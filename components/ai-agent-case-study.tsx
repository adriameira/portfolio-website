"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, LockKeyhole, Mail, ShieldCheck, UsersRound } from "lucide-react"
import { IterationTabs } from "./iteration-accordion"
import { WordRevealObserver } from "./word-reveal"
import { NextCaseStudy } from "./next-case-study"
import styles from "./racial-justice-case-study.module.css"

const contributions = [
  "Led product design from concept to launch as the sole designer, spanning research, information architecture, interaction design, and prototyping.",
  "Ran 10+ interviews with people who write and maintain privacy policies.",
  "Facilitated prioritization and rapid design reviews to shape a shippable first version and cut AI policy editing.",
  "Worked with Product, Data Science, and Engineering.",
]

const insights = [
  {
    title: "Siloed drafting cycles",
    copy: "Legal requirements, internal governance, and approval chains mean every policy goes through several drafts and reviews across teams.",
  },
  {
    title: "Regulatory cascade",
    copy: "Privacy policies are root documents. One regulatory change ripples into dozens of others.",
  },
]

const benchmarkFindings = [
  {
    title: "Create a sense of urgency",
    copy: "A score or a meter tells users at a glance how much is at stake, which makes acting now feel worth it.",
  },
]

const trustConditions = [
  {
    icon: ShieldCheck,
    title: "Consistent outputs",
    copy: "The same policy should always get the same reading. Variability undermines the tool’s legitimacy.",
  },
  {
    icon: UsersRound,
    title: "Decision-making",
    copy: "Compliance officers stay the decision-makers. The AI shows how it reached each conclusion so users can question it, not just accept it.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    copy: "Privacy policies contain sensitive operational detail, so users need to know how their documents are stored and used.",
  },
]

const iterationRounds = [
  {
    label: "Round 1",
    title: "A report of its own",
    copy: "I pulled the analysis into a dedicated Policy Risk Analysis page. It had an overall score with a percentile against other companies, scores per category, and actionable insights that quoted the exact sentence in the user’s policy that needed work. Feedback pushed in two directions: merge the blocks into one view of tasks per category, and let each insight jump to the matching part of the document. That raised a question we couldn’t answer yet: what about insights that don’t belong to any one section?",
    src: "/case-studies/pyxos-round-2.svg",
    alt: "Round 1 wireframe: policy risk report with an analysis sidebar and category improvements",
    width: 1280,
    height: 950,
  },
  {
    label: "Round 2",
    title: "Cutting the document view",
    copy: "After PM and Design feedback, we agreed that changing the document itself took too much bandwidth for the MVP, so the document view was removed. The page would now focus on the overview and insights, with export instead of editing.",
    src: "/case-studies/pyxos-round-3.svg",
    alt: "Round 2 wireframe: policy overview and insights without an in-document editor",
    width: 1280,
    height: 832,
  },
  {
    label: "Round 3",
    title: "Borrowing from credit scores",
    copy: "Credit scores became our reference for an overall risk profile: a single number for how exposed you are. Clicking a category filtered the insights to match. After ideation with Product, Data and Design leadership, I split the work into two tracks: a vision for a dashboard across compliance documents, and what we could ship now.",
    src: "/case-studies/pyxos-round-4.svg",
    alt: "Round 3 wireframe: compliance dashboard and policy risk analysis",
    width: 1280,
    height: 900,
  },
  {
    label: "Round 4",
    title: "Letting users choose the benchmark",
    copy: "Comparison came back, with the user in control this time. Users picked the companies they wanted to be measured against or uploaded a competitor’s policy. Each insight showed the benchmark policy’s exact language as evidence. Now, users could also provide feedback to the feature, giving a thumbs up or down whether the output was accurate.",
    src: "/case-studies/pyxos-round-5.svg",
    alt: "Round 4 wireframe: AI compliance analysis and risk insights in the chat interface",
    width: 1280,
    height: 1048,
  },
  {
    label: "Round 5",
    title: "The complete flow",
    copy: "The final round tightened the edges. Users chose between one and five benchmarks. Upload was drag-and-drop only for now, with no URLs. Every analysis was saved to a history with an editable title, and starting over created a new analysis instead of silently replacing the old one. Each category listed the questions it was scored against, and users could confirm that the AI had read the right section of their document.",
    src: "/case-studies/pyxos-round-6.svg",
    alt: "Round 5 wireframe showing the complete AI compliance risk-analysis flow",
    width: 1280,
    height: 1207,
  },
]

function AnimatedMetric({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const start = performance.now()
    const duration = 1200
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <>{count}{suffix}</>
}

const collaborationDecisions = [
  {
    label: "Not shipped",
title: "Doc editor",
  copy: "Early designs let each insight open the matching part of the document, with the AI suggesting new wording in place. PM and Design agreed that editing would take more bandwidth than the MVP could afford, so we shipped the feature with export and “editor coming soon.”",
  },
  {
    label: "Shipped",
    title: "Showing the work",
    copy: "Each category lists the questions it’s scored against. Each insight links back to the matching clause in the user’s policy and the benchmark policy it was compared with.  The goal: an AI users can question, not just accept.",
  },
]

export function AiAgentCaseStudy() {
  return (
    <div className={`portfolio-page ${styles.caseStudyPage}`}>
      <header className="portfolio-header">
        <Link className="wordmark" href="/" aria-label="Adi Meira, home">
          ADI MEIRA
        </Link>
        <nav className="portfolio-nav" aria-label="About, CV and contact navigation">
          <a className="portfolio-nav-about" href="/about">ABOUT</a>
          <a className="portfolio-nav-cv" href="https://drive.google.com/uc?export=download&id=1PN2ansPOPOqYJYY3yoMF40GxKK_9k5rE" target="_blank" rel="noreferrer" aria-label="Download CV">CV <svg className="portfolio-nav-download-icon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75v8.5m0 0 3-3m-3 3-3-3M2.5 10.75v2.75h11v-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
          <a className="portfolio-nav-cta" href="mailto:adria_meira@gsd.harvard.edu">CONTACT</a>
        </nav>
      </header>

      <main className={styles.caseStudyMain} id="top">
        <section className={styles.hero} data-appear aria-labelledby="ai-agent-title">
          <Image
            className={styles.pyxosHeroLogo}
            src="/logos/logo-white.svg"
            alt="Pyxos logo"
            width={117}
            height={39}
            priority
          />
          <h1 className={styles.heroTitle} id="ai-agent-title">
            Compliance at the speed of AI
          </h1>
          <div className={styles.heroIntro}>
            <p>
              Drafting and maintaining privacy policies is one of the most burdensome tasks for organizations. This project explores how AI can help people make more informed decisions by turning policy documents into concrete insights.
            </p>
          </div>
          <div className={`${styles.heroDashboard} ${styles.aiHeroDashboard}`}>
            <Image
              className={styles.aiHeroImage}
              src="/case-studies/pyxos-hero.svg"
              alt="Pyxos privacy policy analysis dashboard with navigation and an analysis workspace"
              width={1467}
              height={1155}
              sizes="(max-width: 700px) 100vw, 75vw"
            />
          </div>
        </section>

        <section className={styles.overview} data-appear aria-labelledby="overview-title">
          <div className={styles.sectionHeading}>
            <h2 id="overview-title">Overview</h2>
          </div>
          <section
            className={`${styles.story} ${styles.aiAgentStory}`}
            data-appear
            aria-labelledby="story-title"
          >
            <div className={styles.storySummary}>
              <p className={styles.eyebrow}>The story</p>
              <h2 id="story-title">
                I took Pyxos’s first AI feature from concept to launch: a risk analysis agent for privacy policies.
              </h2>
              <p>
                In its first year, users ran 250+ analyses and finished 78% of them. Getting there meant cutting the feature users asked for most—AI editing—and investing in explainability instead. Every score shows its criteria, its sources, and the benchmark behind it.
              </p>
              <details className={styles.contributions}>
                <summary>
                  <span>My contributions</span>
                  <span className={styles.contributionToggle} aria-hidden="true" />
                </summary>
                <ul>
                  {contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </details>
            </div>
            <dl className={`${styles.projectMeta} ${styles.aiAgentProjectMeta}`}>
              <div>
                <dt>Role</dt>
                <dd>Product Designer</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>Me &amp; Data Scientist &amp; Head of Product &amp; Head of Design &amp; Head of Engineering</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>
                  User research, information architecture, interaction design, prototyping, usability testing, design strategy
                </dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Figma, FigJam</dd>
              </div>
            </dl>
          </section>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="context-title">
          <div className={styles.sectionIndex}>
            <span>Context</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="context-title">Designing a 0→1 AI feature at a seed-stage startup</h2>
            <p>
              Every new privacy law—from GDPR to CCPA to LGPD—adds obligations, and most companies keep up through manual reviews, scattered documents, and knowledge held by a few people. Pyxos’s bet was an AI that maps overlapping regulations, surfaces inconsistencies across a company’s policies, and keeps that knowledge in the product instead of people’s inboxes.
            </p>
            <Image
              className={styles.testingImage}
              src="/case-studies/pyxos-context.png"
              alt="Privacy policy analysis slide with a risk radar chart and scoring table beside a video call"
              width={1660}
              height={735}
              sizes="(max-width: 700px) 100vw, 70vw"
            />
            <p className={styles.testingCaption}>Alignment meeting with Head of Product and Head of Design</p>
          </div>
        </section>

        <section className={`${styles.caseSection} ${styles.researchInsights}`} data-appear aria-labelledby="insights-title">
          <div className={styles.sectionIndex}>
            <span>research</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="insights-title">What users told us, and what the best products do</h2>
            <p className={styles.researchLead}>
              Research ran on two tracks. Interviews showed how compliance work actually happens and where it breaks down. A benchmark of action-led products showed how other tools turn information into action. Both pointed the same way: a report alone wouldn’t change anything. Users needed to know what was at stake, what to do next, and why to trust the answer.
            </p>

            <div className={styles.researchSubsection}>
              <div className={styles.researchCopy}>
                <h3 className={styles.researchSubheading}>Interviews: how the work really happens</h3>
                <p>
                  I ran 10+ interviews with the people who write and maintain policies. They described the same loop: several drafts, each reviewed by legal, leadership, and often outside counsel. On top of that, regulation changes at the state, federal, and international level, and each change can cascade into dozens of connected documents. Drafting was slow, fragmented, and stuck in review cycles.
                </p>
              </div>
              <div className={styles.researchVisuals}>
                <div className={`${styles.insightGrid} ${styles.interviewInsightGrid}`}>
                  {insights.map((insight) => (
                    <article className={styles.insightCard} data-appear key={insight.title}>
                      <div className={styles.cardHeading}>
                        <h3>{insight.title}</h3>
                        <p className={styles.cardLabel}>Insight</p>
                      </div>
                      <p>{insight.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${styles.researchSubsection} ${styles.researchSubsectionReverse}`}>
              <div className={styles.researchVisuals}>
                <div className={`${styles.insightGrid} ${styles.benchmarkGrid}`}>
                  {benchmarkFindings.map((finding) => (
                    <article className={styles.insightCard} data-appear key={finding.title}>
                      <div className={styles.cardHeading}>
                        <h3>{finding.title}</h3>
                        <p className={styles.cardLabel}>Insight</p>
                      </div>
                      <p>{finding.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className={styles.researchCopy}>
                <h3 className={styles.researchSubheading}>Benchmark: how action-led products drive follow-through</h3>
                <p>
                  The product’s job was to get policies changed, not only analyzed. So I also benchmarked products built around getting people to act, to learn how they turn information into progress.
                </p>
              </div>
            </div>


            <div className={styles.trustConditions}>
              <h3>Three conditions for trust</h3>
              <p className={styles.trustIntro}>
                Trust turned out to be the real gate on adoption. Without it, the most sophisticated AI feature would still fail to retain users. I brought the findings to a strategy session with the Head of Product, the Head of Design, and the Data Scientist, and together we defined three conditions every design decision had to meet.
              </p>
              <div className={styles.trustGrid}>
                {trustConditions.map((condition) => (
  <article className={styles.trustCard} key={condition.title}>
  <div className={styles.trustIcon} aria-hidden="true"><condition.icon size={28} strokeWidth={2} /></div>
  <h4>{condition.title}</h4>
                    <p>{condition.copy}</p>
                  </article>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="iterations-title">
          <div className={styles.sectionIndex}>
            <span>Iterations</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="iterations-title">From “the AI does it” to “the AI shows its work”</h2>
            <p>
              After the research stage, I mapped the core flow at low fidelity: Users start an analysis, upload their policy and choose who to be benchmarked against. They get two things back: an overall risk level and insights in six categories. 
            </p>
            <Image
              className={styles.userFlowImage}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pyxos_Flow-zBdFWlBYTfhLL5JJXIaybAPGbIks3C.svg"
              width={546}
              height={226}
              alt="User flow from policy risk analysis and upload through benchmark selection to risk levels and insights across six privacy categories."
              unoptimized
            />
            <p>
              This flow became the backbone of the final product. The rounds below show how each step was worked out, and how far the first designs were from it.
            </p>
            <IterationTabs rounds={iterationRounds} />
          </div>
        </section>

        <section className={styles.caseSection} data-appear aria-labelledby="result-title">
          <div className={styles.sectionIndex}>
            <span>Result</span>
          </div>
          <div className={styles.sectionBody}>
            <h2 id="result-title">An AI that analyzes how your privacy policy scores against the law</h2>
            <p>
              The final product is a policy risk analysis that evaluates a privacy policy against industry standards and best practices. Users upload a policy, choose benchmarks, and get an overall low, medium, or high risk profile with insights across six categories: data collection, data sharing, third-party sharing, security measures, user rights and control, and children’s privacy. Each category has its own risk level and a suggested fix.
            </p>
            <div className={`${styles.resultsGrid} ${styles.aiAgentResultsGrid}`}>
              <article>
                <strong><AnimatedMetric value={250} suffix="+" /></strong>
                <span className={styles.resultMetricDescription}>Analyses</span>
              </article>
              <article>
                <strong><AnimatedMetric value={78} suffix="%" /></strong>
                <span className={styles.resultMetricDescription}>Completion rate</span>
              </article>
            </div>
            <div className={styles.prototypeFrame}>
              <iframe
                src="https://embed.figma.com/proto/YFaCoOot9P7QDQsussCfeb/Privacy-Policy-Analysis?node-id=961-6144&scaling=fit-width&content-scaling=responsive&starting-point-node-id=961%3A6144&page-id=961%3A6142&embed-host=pyxos-portfolio&hide-ui=1"
                title="Privacy Policy Analysis prototype"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <NextCaseStudy
          href="/case-studies/okx"
          title="Fiat in, crypto on. Deposits at global scale."
        />
      </main>

      <hr className="section-divider" />
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
              <span className="contact-linkedin-mark" aria-hidden="true">in</span>
            </a>
          </nav>
        </div>
      </footer>
      <WordRevealObserver />
    </div>
  )
}
