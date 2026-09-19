"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/assets/image/carrossel/slide-1.jpg", alt: "Atendimento neuropsicológico" },
  { src: "/assets/image/carrossel/slide-2.jpg", alt: "Consultório acolhedor" },
  { src: "/assets/image/carrossel/slide-3.jpg", alt: "Avaliação neuropsicológica" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index: number) {
    setCurrent(index);
  }

  function prev() {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }

  function next() {
    setCurrent((c) => (c + 1) % slides.length);
  }

  return (
    <div className="relative w-full h-[280px] sm:h-[380px] md:h-[460px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={index === 0} />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/20" />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 text-brand-teal-deep" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 text-brand-teal-deep" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}