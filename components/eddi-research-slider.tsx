"use client"

import Image from "next/image"
import { useState, type KeyboardEvent } from "react"
import styles from "./eddi-case-study.module.css"

const researchSlides = [
  {
    heading: "My grants",
    body: "Everything looks equally important. Every card has the same weight and the same fields. There’s no primary action on the card and no sense of progress, so the board answers “what did the AI find?” but not “what should I do first?”",
    src: "/case-studies/eddi-research-audit.svg",
    alt: "My grants board showing the grant cards",
    width: 1710,
    height: 1157,
  },
  {
    heading: "Grant details",
    body: "The drawer shows the grant as a stack of editable fields, from name and type to approval, description and state. The only prominent action is a purple “Save” button, which reads like a bookmark, not the first step of an application.",
    src: "/case-studies/eddi-research-listening.svg",
    alt: "Grant details drawer with editable grant fields and a Save action",
    width: 1710,
    height: 985,
  },
  {
    heading: "Documents",
    body: "Long descriptions stretch some rows to several screens tall, and every document gets the same visual treatment, with nothing showing which ones matter most or what’s already done. Two similar buttons, “Open” and “Sections,” sit in every row with no clear difference between them. The structure follows the data model rather than the task, so users can’t tell how each document relates to the grant or where to begin.",
    src: "/case-studies/eddi-research-synthesis.svg",
    alt: "Documents list with Open and Sections actions",
    width: 1454,
    height: 982,
  },
  {
    heading: "The editor",
    body: "Each section starts as a grey placeholder (“Please configure and generate this section”) with its own yellow Generate button. Users have to trigger the AI section by section and wait each time, with no overview of how much of the document was done. The only feedback was a small “Section generated successfully” toast. Nothing on screen explained what the AI used as its source, what each section needed to include, or what to do once everything was filled in.",
    src: "/case-studies/eddi-research-constraints.svg",
    alt: "Editor view with section generation controls",
    width: 1454,
    height: 984,
  },
]

export function ResearchSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = researchSlides[activeIndex]

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % researchSlides.length
      : event.key === "ArrowLeft"
        ? (index - 1 + researchSlides.length) % researchSlides.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? researchSlides.length - 1
            : null

    if (nextIndex === null) return
    event.preventDefault()
    setActiveIndex(nextIndex)
    document.getElementById(`eddi-research-tab-${nextIndex}`)?.focus()
  }

  return (
    <div className={styles.researchSlider}>
      <div className={styles.researchTabs}>
        <div className={styles.iterationTabList} role="tablist" aria-label="Explore the grant application screens">
          {researchSlides.map((slide, index) => {
            const isActive = activeIndex === index
            return (
              <button
                className={`${styles.iterationTab} ${isActive ? styles.iterationTabActive : ""}`}
                id={`eddi-research-tab-${index}`}
                key={slide.heading}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="eddi-research-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {slide.heading}
              </button>
            )
          })}
        </div>
        <div
          id="eddi-research-panel"
          className={styles.iterationPanel}
          role="tabpanel"
          aria-labelledby={`eddi-research-tab-${activeIndex}`}
        >
          <p className={styles.iterationCopy}>{activeSlide.body}</p>
        </div>
      </div>
      <div className={styles.researchVisual} aria-live="polite">
        <Image
          className={styles.researchScreenshot}
          src={activeSlide.src}
          alt={activeSlide.alt}
          width={activeSlide.width}
          height={activeSlide.height}
        />
      </div>
    </div>
  )
}
