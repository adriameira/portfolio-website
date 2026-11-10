"use client"

import { useId, useState, type KeyboardEvent } from "react"
import styles from "./eddi-case-study.module.css"

type Iteration = {
  title: string
  copy: string
  screen?: string
}

export function EddiIterationTabs({ rounds }: { rounds: Iteration[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const id = useId()
  const activeRound = rounds[activeIndex]

  if (!activeRound) return null

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = event.key === "ArrowRight"
      ? (index + 1) % rounds.length
      : event.key === "ArrowLeft"
        ? (index - 1 + rounds.length) % rounds.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? rounds.length - 1
            : null

    if (nextIndex === null) return
    event.preventDefault()
    setActiveIndex(nextIndex)
    document.getElementById(`${id}-tab-${nextIndex}`)?.focus()
  }

  return (
    <div className={styles.iterationTabs}>
      <div className={styles.iterationTabList} role="tablist" aria-label="Design iteration rounds">
        {rounds.map((round, index) => {
          const isActive = index === activeIndex
          return (
            <button
              className={`${styles.iterationTab} ${isActive ? styles.iterationTabActive : ""}`}
              id={`${id}-tab-${index}`}
              key={round.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${id}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              Round {index + 1}
            </button>
          )
        })}
      </div>
      <section className={styles.iterationPanel} id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${activeIndex}`}>
        <p className={styles.iterationCopy}>{activeRound.copy}</p>
        {activeRound.screen ? (
          <img className={styles.iterationScreenImage} src={activeRound.screen} alt={`${activeRound.title} screen`} />
        ) : (
          <div className={styles.iterationScreenPlaceholder} role="img" aria-label={`${activeRound.title} screen placeholder`}>
            Screen placeholder
          </div>
        )}
      </section>
    </div>
  )
}
