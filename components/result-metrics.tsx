"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./racial-justice-case-study.module.css"

type Metric = {
  value: number
  prefix: string
  suffix: string
  label: string
  accessibleLabel: string
}

const metrics: Metric[] = [
  {
    value: 63,
    prefix: "+",
    suffix: "%",
    label: "WAU",
    accessibleLabel: "weekly active users",
  },
  {
    value: 126,
    prefix: "+",
    suffix: "%",
    label: "Deed reviews",
    accessibleLabel: "deed reviews",
  },
]

function AnimatedMetric({
  value,
  prefix,
  suffix,
  label,
  accessibleLabel,
}: Metric) {
  const numberRef = useRef<HTMLElement | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const numberElement = numberRef.current
    if (!numberElement) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value)
      return
    }

    let animationFrame = 0
    const startAnimation = () => {
      const startedAt = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / 1200, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(Math.round(value * easedProgress))

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick)
        }
      }

      animationFrame = window.requestAnimationFrame(tick)
    }

    if (!("IntersectionObserver" in window)) {
      startAnimation()
      return () => window.cancelAnimationFrame(animationFrame)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        startAnimation()
      },
      { threshold: 0.25 },
    )

    observer.observe(numberElement)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <article>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix} {accessibleLabel}
      </span>
      <strong ref={numberRef} aria-hidden="true">
        {prefix}
        {count}
        {suffix}
      </strong>
      <span className={styles.resultMetricDescription} aria-hidden="true">
        {label}
      </span>
    </article>
  )
}

export function ResultMetrics() {
  return (
    <div className={styles.resultsGrid}>
      {metrics.map((metric) => (
        <AnimatedMetric key={metric.label} {...metric} />
      ))}
    </div>
  )
}
