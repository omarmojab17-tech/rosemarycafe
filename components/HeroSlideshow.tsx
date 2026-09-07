"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/interior-main.jpeg",
    alt: "Rosemary Café interior",
    label: "THE ROSEMARY SPACE",
    position: "center",
  },
  {
    src: "/images/interior-coffee.jpeg",
    alt: "A quiet table inside Rosemary",
    label: "TAKE YOUR TIME",
    position: "center",
  },
  {
    src: "/images/interior-arch.jpeg",
    alt: "Interior details at Rosemary Café",
    label: "YOUR TABLE IS READY",
    position: "center",
  },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home-hero-visual" aria-label="Photos from Rosemary Café">
      {slides.map((slide, index) => (
        <div className={`hero-slide ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} key={slide.src}>
          <Image
            unoptimized
            src={slide.src}
            alt={index === active ? slide.alt : ""}
            fill
            priority={index === 0}
            sizes="(max-width: 820px) 100vw, 58vw"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}
      <div className="hero-photo-meta">
        <div><strong>{slides[active].label}</strong></div>
        <div className="hero-controls">
          <button type="button" onClick={previous} aria-label="Previous photo">←</button>
          <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <button type="button" onClick={next} aria-label="Next photo">→</button>
        </div>
      </div>
    </div>
  );
}
