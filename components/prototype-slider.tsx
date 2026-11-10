"use client"

import Image from "next/image"
import { useRef, useState, type UIEvent } from "react"
import styles from "./racial-justice-case-study.module.css"

const prototypeSlides = [
  { src: "/case-studies/racial-justice-wireframe-01.png", alt: "Original portfolio wireframe" },
  { src: "/case-studies/racial-justice-wireframe-02.png", alt: "Original portfolio wireframe" },
  { src: "/case-studies/racial-justice-wireframe-03.png", alt: "Original portfolio wireframe" },
]

export function PrototypeSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  function selectSlide(index: number) {
    const track = trackRef.current
    const slide = track?.children[index]

    if (track && slide instanceof HTMLElement) {
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" })
    }

    setActiveIndex(index)
  }

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const track = event.currentTarget
    const nextIndex = Math.min(
      prototypeSlides.length - 1,
      Math.max(0, Math.round(track.scrollLeft / (track.clientWidth + 16))),
    )

    setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex)
  }

  return (
    <section className={styles.prototypeSlider} aria-label="Prototype wireframes">
      <div
        className={styles.prototypeSliderTrack}
        onScroll={handleScroll}
        ref={trackRef}
        role="region"
        aria-label="Original wireframes. Scroll horizontally to explore each screen."
        tabIndex={0}
      >
        {prototypeSlides.map((slide, index) => (
          <div
            aria-label={`${index + 1} of ${prototypeSlides.length}`}
            aria-roledescription="slide"
            className={styles.prototypeSlide}
            key={slide.src}
            role="group"
          >
            <Image
              alt={slide.alt}
              className={styles.prototypeImage}
              height={480}
              priority={index === 0}
              sizes="(max-width: 940px) 100vw, 940px"
              src={slide.src}
              width={940}
            />
            {index === 0 ? <p className={styles.prototypeCaption}>Some of the wireframe designed</p> : null}
          </div>
        ))}
      </div>

      <div className={styles.prototypeControls} role="group" aria-label="Choose a wireframe">
        {prototypeSlides.map((slide, index) => (
          <button
            aria-label={`Show wireframe ${index + 1}`}
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? styles.prototypeControlActive : styles.prototypeControl}
            key={slide.src}
            onClick={() => selectSlide(index)}
            type="button"
          >
            <span className="sr-only">Wireframe {index + 1}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Wireframe {activeIndex + 1} of {prototypeSlides.length}
      </p>
    </section>
  )
}
