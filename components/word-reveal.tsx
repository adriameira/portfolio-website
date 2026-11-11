"use client"

import { Fragment, useEffect, type CSSProperties } from "react"

type WordRevealTextProps = {
  text: string
  className?: string
}

export function WordRevealText({ text, className = "" }: WordRevealTextProps) {
  const tokens = text.match(/\S+|\s+/g) ?? []
  let wordIndex = 0

  return (
    <span className={`word-reveal ${className}`} data-word-reveal>
      <span className="word-reveal-visual" aria-hidden="true">
        {tokens.map((token, tokenIndex) => {
          if (/^\s+$/.test(token)) {
            return <Fragment key={tokenIndex}>{token}</Fragment>
          }

          const transitionDelay = `${Math.min(wordIndex * 22, 420)}ms`
          wordIndex += 1

          return (
            <span
              className="word-reveal-word"
              key={tokenIndex}
              style={{ transitionDelay } as CSSProperties}
            >
              {token}
            </span>
          )
        })}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}

export function WordRevealObserver() {
  useEffect(() => {
    const headers = Array.from(
      document.querySelectorAll<HTMLElement>(".portfolio-header"),
    )
    const updateHeaderScrollState = () => {
      const isScrolled = window.scrollY > 0
      headers.forEach((header) => header.classList.toggle("is-scrolled", isScrolled))
    }
    const stopHeaderScrollTracking = () => {
      window.removeEventListener("scroll", updateHeaderScrollState)
      headers.forEach((header) => header.classList.remove("is-scrolled"))
    }

    updateHeaderScrollState()
    window.addEventListener("scroll", updateHeaderScrollState, { passive: true })

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-word-reveal], [data-appear]"),
    )

    if (targets.length === 0) return stopHeaderScrollTracking

    const root = document.documentElement
    root.classList.add("word-reveal-ready")

    const pendingTargets = new Set(targets)
    let observer: IntersectionObserver | null = null
    const reveal = (target: HTMLElement) => {
      target.classList.add("is-visible")
      pendingTargets.delete(target)
      observer?.unobserve(target)
    }

    targets.forEach((target) => {
      if (!target.hasAttribute("data-appear")) return
      const siblings = Array.from(target.parentElement?.children ?? []).filter(
        (sibling) => sibling.hasAttribute("data-appear"),
      )
      const siblingIndex = Math.max(0, siblings.indexOf(target))
      target.style.setProperty(
        "--appear-delay",
        `${Math.min(siblingIndex * 70, 210)}ms`,
      )
    })

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      targets.forEach((target) => target.classList.add("is-visible"))
      return () => {
        stopHeaderScrollTracking()
        root.classList.remove("word-reveal-ready")
      }
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (!entry.isIntersecting || target.closest('[aria-hidden="true"]')) {
            return
          }
          reveal(target)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    )

    const revealActiveTargets = () => {
      pendingTargets.forEach((target) => {
        if (target.closest('[aria-hidden="true"]')) return
        const bounds = target.getBoundingClientRect()
        if (bounds.bottom > 0 && bounds.top < window.innerHeight) reveal(target)
      })
    }

    const stageObserver = new MutationObserver(revealActiveTargets)
    stageObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
      subtree: true,
    })

    targets.forEach((target) => observer.observe(target))

    return () => {
      stopHeaderScrollTracking()
      observer.disconnect()
      stageObserver.disconnect()
      root.classList.remove("word-reveal-ready")
    }
  }, [])

  return null
}
