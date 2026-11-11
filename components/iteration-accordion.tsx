"use client"

import Image from "next/image"
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import styles from "./racial-justice-case-study.module.css"

type IterationRound = {
  label: string
  title: string
  copy: string
  src: string
  alt: string
  width: number
  height: number
}

export function IterationTabs({ rounds }: { rounds: IterationRound[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabListRef = useRef<HTMLDivElement>(null)
  const tabIdPrefix = useId()
  const activeRound = rounds[activeIndex]

  useEffect(() => {
    if (rounds.length < 2) return

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % rounds.length)
    }, 10_000)

    return () => window.clearTimeout(timer)
  }, [activeIndex, rounds.length])

  if (!activeRound) return null

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index

    if (event.key === "ArrowRight") nextIndex = (index + 1) % rounds.length
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + rounds.length) % rounds.length
    else if (event.key === "Home") nextIndex = 0
    else if (event.key === "End") nextIndex = rounds.length - 1
    else return

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus()
  }

  const activeTabId = `${tabIdPrefix}-tab-${activeIndex}`
  const panelId = `${tabIdPrefix}-panel`

  return (
    <div className={styles.iterationTabs}>
      <div className={styles.iterationTabList} ref={tabListRef} role="tablist" aria-label="Design iteration rounds">
        {rounds.map((round, index) => {
          const isActive = index === activeIndex
          const tabId = `${tabIdPrefix}-tab-${index}`

          return (
            <button
              className={`${styles.iterationTab} ${isActive ? styles.iterationTabActive : ""}`}
              id={tabId}
              key={round.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {round.label}
              <span className={styles.iterationTabProgress} aria-hidden="true" />
            </button>
          )
        })}
      </div>
      <section className={styles.iterationPanel} id={panelId} role="tabpanel" aria-labelledby={activeTabId}>
        <h3 className={styles.iterationTitle}>{activeRound.title}</h3>
        <p className={styles.iterationCopy}>{activeRound.copy}</p>
        <figure className={styles.iterationVisual}>
          <Image
            className={styles.iterationImage}
            src={activeRound.src}
            alt={activeRound.alt}
            width={activeRound.width}
            height={activeRound.height}
            sizes="(max-width: 700px) 100vw, 1000px"
            unoptimized
          />
        </figure>
      </section>
    </div>
  )
}
