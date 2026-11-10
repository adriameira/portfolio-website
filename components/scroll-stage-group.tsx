"use client"

import { Children, useEffect, useRef, useState, type ReactNode } from "react"

type ScrollStageGroupProps = {
  children: ReactNode
  className: string
}

export function ScrollStageGroup({ children, className }: ScrollStageGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const group = groupRef.current
    if (!group) return

    let frame = 0
    const updateActiveStage = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const stages = Array.from(group.children) as HTMLElement[]
        const focusLine = window.innerHeight * 0.18
        let nextActiveIndex = 0
        let closestDistance = Number.POSITIVE_INFINITY

        stages.forEach((stage, index) => {
          const bounds = stage.getBoundingClientRect()
          const center = bounds.top + bounds.height / 2
          const distance = Math.abs(center - focusLine)

          if (distance < closestDistance) {
            closestDistance = distance
            nextActiveIndex = index
          }
        })

        setActiveIndex((currentIndex) =>
          currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex,
        )
        frame = 0
      })
    }

    updateActiveStage()
    window.addEventListener("scroll", updateActiveStage, { passive: true })
    window.addEventListener("resize", updateActiveStage)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateActiveStage)
      window.removeEventListener("resize", updateActiveStage)
    }
  }, [])

  return (
    <div className={className} ref={groupRef}>
      {Children.map(children, (child, index) => (
        <div
          aria-hidden={index !== activeIndex}
          className="scroll-stage"
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
