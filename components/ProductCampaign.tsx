"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    src: "/images/campaign/iced-spanish-latte.webp",
    alt: "آيس سبانيش لاتيه في كوب روزماري المعتمد",
    ar: "آيس سبانيش لاتيه",
    en: "ICED SPANISH LATTE",
  },
  {
    src: "/images/campaign/strawberry-matcha.webp",
    alt: "ماتشا بالفراولة في كوب روزماري المعتمد",
    ar: "ماتشا بالفراولة",
    en: "STRAWBERRY MATCHA",
  },
  {
    src: "/images/campaign/hazelnut-cream-cold-brew.webp",
    alt: "كولد برو بكريمة البندق في كوب روزماري المعتمد",
    ar: "كولد برو بكريمة البندق",
    en: "HAZELNUT CREAM COLD BREW",
  },
];

export function ProductCampaign() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((current) => (current - 1 + products.length) % products.length);
  const next = () => setActive((current) => (current + 1) % products.length);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % products.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <figure className="product-campaign" data-reveal="image" aria-label="مشروبات روزماري في الأكواب المعتمدة">
      {products.map((product, index) => (
        <div className={`product-campaign-slide ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} key={product.src}>
          <Image unoptimized src={product.src} alt={index === active ? product.alt : ""} fill sizes="(max-width: 820px) 100vw, 48vw" />
        </div>
      ))}
      <figcaption>
        <div><strong>{products[active].ar}</strong><small>{products[active].en}</small></div>
        <div className="product-campaign-controls">
          <button type="button" onClick={previous} aria-label="المشروب السابق">→</button>
          <span>{String(active + 1).padStart(2, "0")} / 03</span>
          <button type="button" onClick={next} aria-label="المشروب التالي">←</button>
        </div>
      </figcaption>
    </figure>
  );
}
