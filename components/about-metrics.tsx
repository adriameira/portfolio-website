"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./about-page.module.css"

type Metric = {
  value: number
  prefix?: string
  suffix?: string
  label: string
  padWithZero?: boolean
}

const metrics: Metric[] = [
  { value: 5, label: "Startups I've worked with", padWithZero: true },
  {
    value: 6,
    label: "Years working remotely within international teams",
    padWithZero: true,
  },
  { value: 7, label: "Political campaigns I've designed", padWithZero: true },
  { value: 12, label: "total Years of work experience" },
]

function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  label,
  padWithZero = false,
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
    <div className={styles.metric}>
      <dt className={styles.metricValue} ref={numberRef}>
        <span className="sr-only">
          {prefix}
          {value}
          {suffix}
        </span>
        <span aria-hidden="true">
          {prefix}
          {padWithZero ? String(count).padStart(2, "0") : count}
          {suffix}
        </span>
      </dt>
      <dd className={styles.metricLabel}>{label}</dd>
    </div>
  )
}

export function AboutMetrics() {
  return (
    <section className={styles.metrics} aria-label="Career highlights">
      <dl className={styles.metricsGrid}>
        {metrics.map((metric) => (
          <AnimatedMetric key={metric.label} {...metric} />
        ))}
      </dl>
    </section>
  )
}
