"use client"

import { useEffect, useRef, useState } from "react"

type OkxMetricCounterProps = {
  accessibleLabel: string
  className?: string
  countTo: number
  dataValue: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export function OkxMetricCounter({
  accessibleLabel,
  className,
  countTo,
  dataValue,
  decimals = 0,
  prefix = "",
  suffix = "",
}: OkxMetricCounterProps) {
  const counterRef = useRef<HTMLDataElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counter = counterRef.current
    if (!counter) return

    let animationFrame = 0
    let hasStarted = false

    const animate = () => {
      if (hasStarted) return
      hasStarted = true

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(countTo)
        return
      }

      const startTime = performance.now()
      const duration = 1500

      const updateCount = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(countTo * easedProgress)

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(updateCount)
        }
      }

      animationFrame = window.requestAnimationFrame(updateCount)
    }

    if (typeof IntersectionObserver === "undefined") {
      animate()
      return () => window.cancelAnimationFrame(animationFrame)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        animate()
      }
    }, { threshold: 0.25 })

    observer.observe(counter)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [countTo])

  const formattedCount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(count)

  return (
    <data
      ref={counterRef}
      className={className}
      value={dataValue}
      aria-label={accessibleLabel}
    >
      {prefix}{formattedCount}{suffix}
    </data>
  )
}
