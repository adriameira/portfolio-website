import Image from "next/image"
import { Coins, Copy, Globe2, Layers3, QrCode, Smartphone, UsersRound } from "lucide-react"
import styles from "./racial-justice-case-study.module.css"
import okxStyles from "./okx-case-study.module.css"
import { FiatJourneyDiagram } from "./fiat-journey-diagram"
import { OkxMetricCounter } from "./okx-metric-counter"

const contextRequirements = [
  {
    icon: Globe2,
    title: "Expand anywhere",
    copy: "Expansion was a core company goal, so the infrastructure had to work anywhere the moment OKX got a license.",
  },
  {
    icon: UsersRound,
    title: "Bring Okcoin users",
    copy: "As Okcoin was shutting down, OKX had to feel familiar enough that users would migrate to it.",
  },
  {
    icon: Coins,
    title: "Compete globally",
    copy: "To make OKX a real competitor, it had to have the features major exchanges already offered: multiple fiat currencies and payment methods, small fees, and robust security.",
  },
  {
    icon: Layers3,
    title: "Unify the experience",
    copy: "Deposit had to feel like the same product  across the other fiat features (buy, sell, and withdraw).",
  },
]

const userNeeds = [
  "See which currencies are available, so I can choose the one that works best for me.",
  "Connect my bank account to OKX, so I can move money in and out.",
  "Get proper guidance when depositing, so I don’t lose money.",
]

const stakeholderPositions = [
  {
    icon: QrCode,
    label: "Product",
    title: "QR code + copy and paste",
    copy: "Give users flexibility by offering both ways to pay.",
  },
  {
    icon: Globe2,
    label: "Global management",
    title: "QR code only",
    copy: "A QR transaction is validated by the bank, which removes the need for OKX to verify the depositor’s identity and avoids refunds and fees when IDs don’t match.",
  },
  {
    icon: Copy,
    label: "Design",
    title: "Copy and paste only",
    copy: "Avoid QR expiration and the friction of scanning on the same phone.",
  },
]

const pixArguments = [
  {
    icon: Layers3,
    label: "Engineering",
    title: "MVP scope",
    copy: "QR codes expire after 30 minutes, and letting users refresh them would expand the scope.",
  },
  {
    icon: Coins,
    label: "Business",
    title: "The real risk",
    copy: "I ran a market analysis of how Brazilian payment apps beyond crypto exchanges handle Pix. It showed the fee for an unmatched ID was minimal.",
  },
  {
    icon: Smartphone,
    label: "Users",
    title: "Mobile experience",
    copy: "Scanning a QR code with the same phone that’s running the OKX app is awkward.",
  },
]

function SlideFigure({
  src,
  alt,
  caption,
  width = 1800,
  height = 1013,
}: {
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
}) {
  return (
    <figure
      className={`${styles.caseMedia} ${okxStyles.deckFigure} ${src.includes("brl-mvp-decision") ? okxStyles.transparentDeckFigure : ""}`}
    >
      <Image
        className={okxStyles.deckImage}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 700px) 100vw, 1280px"
      />
      <figcaption className={styles.mediaCaption}>{caption}</figcaption>
    </figure>
  )
}

export function OkxContextSection() {
  return (
    <>
    <section className={styles.caseSection} data-appear aria-labelledby="okx-context-title">
      <div className={styles.sectionIndex}>
        <span>Context</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-context-title">A merger with a deadline, and no fiat experience</h2>
        <p>
          In the first phase of the merger, OKX launched an initiative to bring
          over the four fiat features Okcoin already had: buy, sell, deposit and
          withdraw. The core challenge was a global template that could adapt to
          local experiences: different currencies, different payment methods,
          different rules.
        </p>
        <p>
          The rollout was phased by market. USD wire transfers came first, then
          EUR and GBP, then local payment methods in markets like Brazil, each
          one depending on licenses and banking partners. Every new market had
          to fit into what was already built, without restarting the design.
        </p>
        <FiatJourneyDiagram />
      </div>
    </section>
    <section className={`${styles.caseSection} ${styles.altCaseSection}`} data-appear aria-labelledby="okx-problem-title">
      <div className={styles.sectionBody}>
        <p id="okx-cross-collaboration-label" className={okxStyles.sectionLabel}>Cross-collaboration</p>
        <h3 className={okxStyles.stakeholderHeading} id="okx-problem-title">Rewriting the problem statement</h3>
        <p>
          The PRD framed the ask as: “Create a brand new scalable solution for fiat deposit and withdraw for OKX leveraging off of what was done in Okcoin.” That described what to build, but not what it had to achieve for the business or for users. Working with the PM, I rewrote it to include both. The deposit experience had to:
        </p>
        <div className={okxStyles.needsBlock}>
          <div className={okxStyles.requirementColumns}>
            {contextRequirements.map(({ icon: Icon, title, copy }) => (
              <article className={okxStyles.requirementColumn} key={title}>
                <div className={okxStyles.requirementIcon} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h4>{title}</h4>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export function OkxHandoffSection() {
  return (
    <section className={styles.caseSection} data-appear aria-labelledby="okx-handoff-title">
      <div className={styles.sectionIndex}>
        <span>Designing for a handoff we didn’t own</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-handoff-title">The final step happens outside OKX</h2>
        <p>
          A push deposit doesn’t finish in our product. The user leaves OKX,
          opens their banking app, and sends the transfer themselves. Technically,
          that last mile wasn’t ours to design.
        </p>
        <p>
          Working with the PM, I argued that this was exactly why it needed
          design. If the flow ended with a list of bank details and nothing else,
          users would be dropped at the hardest moment: copying numbers into
          another app, unsure whether it worked. So the flow carries clear
          instructions and education through the handoff, and ends on a screen
          that’s honest about what happens next. The PM agreed it was worth the
          extra scope, even though the MVP didn’t strictly require it.
        </p>
        <figure className={`${styles.caseMedia} ${okxStyles.handoffWireflowFigure}`}>
          <div
            className={okxStyles.handoffWireflowViewport}
            tabIndex={0}
            aria-label="Scrollable deposit handoff wireframe"
          >
            <Image
              className={okxStyles.handoffWireflowImage}
              src="/case-studies/okx/handoff-wireflow-reference.svg"
              alt="Deposit handoff wireflow showing bank transfer instructions and the final confirmation screen across mobile app screens"
              width={2113}
              height={1473}
              sizes="(max-width: 700px) 100vw, 1280px"
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

export function OkxResearchSection() {
  return (
    <section className={styles.caseSection} data-appear aria-labelledby="okx-research-title">
      <div className={styles.sectionIndex}>
        <span> Research</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-research-title">What existed, and what the market does</h2>
          <p>
          First, I screenshotted every screen of Okcoin’s fiat deposit flow to
          understand what information was collected at each stage. I did the
          same for OKX’s existing crypto-deposit entry points. The goal was to
          see where the new experience could reuse OKX patterns and where it
          couldn’t.
        </p>
        <SlideFigure
          src="/case-studies/okx/research-deposit.svg"
          alt="OKX deposit screen and banking details reviewed during the research phase"
          caption="Okcoin's deposit flow"
          width={5660}
          height={2530}
        />
        <p>
          After, I did a benchmark analysis to check how other major exchanges
          handle fiat deposits. It showed, for instance that every country has its own
          conventions for displaying bank account details. The template had to
          accommodate those differences instead of forcing one format
          everywhere.
        </p>
      </div>
    </section>
  )
}

export function OkxCollaborationSection() {
  return (
    <section className={styles.caseSection} data-appear aria-labelledby="okx-collaboration-title">
      <div className={styles.sectionIndex}>
        <span>design Collaboration</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-collaboration-title">Four flows, one pattern</h2>
        <p>
          Deposit wasn’t designed in isolation. The designers for Buy, Sell, and
          Withdraw and I kept finding near-identical screens across our flows.
          If we designed them separately, users would get four slightly
          different versions of the same moment.
        </p>
        <p className={okxStyles.collaborationIntro}>
          We set up a simple routine. Each of us ideated our own version first,
          then we compared approaches side by side and converged. It took about
          three rounds before we had a shared pattern everyone was confident in.
          The rule we agreed on: some pages, such as result screens, share one
          design across all four features and adapt their content to the context. 
        </p>
        <figure className={styles.caseMedia}>
          <Image
            className={okxStyles.amountInputWireframes}
            src="/case-studies/okx/amount-input-wireframes.svg"
            alt="Success-state wireframes for OKX’s deposit experience"
            width={1740}
            height={813}
            sizes="(max-width: 700px) 100vw, 1280px"
            unoptimized
          />
        </figure>
        <figcaption className={`${styles.mediaCaption} ${okxStyles.collaborationCaption}`}>
          Unified success screens across fiat features at OKX
        </figcaption>
        <div className={okxStyles.collaborationImageGrid}>
          <figure className={okxStyles.collaborationImageFrame}>
            <Image
              className={okxStyles.collaborationImage}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-TNq6Q1UVuP2A6XseB6CxuoBisYlY85.jpeg"
              alt="Printed fiat-flow wireframes with pink sticky notes spread across a workshop table"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              unoptimized
            />
          </figure>
          <figure className={okxStyles.collaborationImageFrame}>
            <Image
              className={okxStyles.collaborationImage}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-VZRbrhV7QBpfrZZOL5KxZnQgTV4grT.jpeg"
              alt="Product team collaborating around printed fiat-flow designs and notes"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              unoptimized
            />
          </figure>
        </div>
        <figcaption className={`${styles.mediaCaption} ${okxStyles.collaborationCaption} ${okxStyles.collaborationWorkshopCaption}`}>
          In-person workshops to discuss fiat flows across product and design teams
        </figcaption>
      </div>
    </section>
  )
}

export function OkxBrazilSection() {
  return (
    <section className={styles.caseSection} data-appear aria-labelledby="okx-brazil-title">
      <div className={styles.sectionIndex}>
        <span> Localization</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-brazil-title">The template meets Brazil</h2>
  <p>
  With the global template defined, it was time to apply it country by
  country. USD wire, GBP Faster Payments, and EUR SEPA transfers went
  out first, and that rollout was smooth. Brazil was where the template
  got tested. Deposits there would run on Pix, Brazil’s instant payment
  system. Although it is a straightforward payment method, the teams
  disagreed on how users should interact with it.
  </p>
        <div className={okxStyles.localizationPanel}>
          <div className={okxStyles.localizationRows} role="group" aria-label="Stakeholder positions">
            {stakeholderPositions.map((position) => {
              return (
                <article className={`${okxStyles.localizationCard} ${okxStyles.localizationTextCard}`} key={position.label}>
                  <div className={okxStyles.localizationContent}>
                    <span className={okxStyles.localizationTeamLabel}>{position.label}</span>
                    <h3>{position.title}</h3>
                    <p>{position.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <p className={okxStyles.localizationIntro}>I brought three arguments, each aimed at a different concern:</p>
          <div className={`${okxStyles.localizationRows} ${okxStyles.localizationArguments}`} role="group" aria-label="Localization arguments">
            {pixArguments.map((argument) => {
              const Icon = argument.icon
              return (
                <article className={okxStyles.localizationCard} key={argument.label}>
                  <span className={okxStyles.localizationIcon} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <div className={okxStyles.localizationContent}>
                    <h3>{argument.label}: {argument.title}</h3>
                    <p>{argument.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export function OkxResultsSection() {
  return (
    <section className={styles.caseSection} data-appear aria-labelledby="okx-results-title">
      <div className={styles.sectionIndex}>
        <span> Result</span>
      </div>
      <div className={styles.sectionBody}>
        <h2 id="okx-results-title">A clearer deposit experience</h2>
        <p className={styles.storyLead}>
          For users, depositing now works the same way in every market. They tap Deposit, choose cash, verify their identity if they haven’t yet, and confirm the transfer details for their bank. The last screen says plainly what happens next: the transfer has to be finished in their own bank app, and their funds won’t move until it is. A flow that ends outside OKX is easy to abandon, and that screen keeps it moving.
        </p>
        <div
          className={okxStyles.metricsGrid}
          role="group"
          aria-label="Brazil results in the first three months"
        >
          <article className={okxStyles.metricCard}>
            <OkxMetricCounter
              className={okxStyles.metricValue}
              countTo={7}
              dataValue={7000000}
              prefix="$"
              suffix="M+"
              accessibleLabel="$7 million plus"
            />
            <span className={okxStyles.metricLabel}>Deposited</span>
          </article>
          <article className={okxStyles.metricCard}>
            <OkxMetricCounter
              className={okxStyles.metricValue}
              countTo={6.8}
              dataValue={6800}
              decimals={1}
              suffix="k"
              accessibleLabel="6.8 thousand daily active users"
            />
            <span className={okxStyles.metricLabel}>Daily active users</span>
          </article>
        </div>
        <figure className={styles.caseMedia}>
          <video
            className={styles.originalVideo}
            src="/case-studies/okx/okx_vid.mov"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Final OKX product walkthrough"
          />
        </figure>
      </div>
    </section>
  )
}
