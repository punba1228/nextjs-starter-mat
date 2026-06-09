"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
  "/hero5.png",
  "/hero6.png",
];

const INTERVAL_MS = 4000;
const FADE_DURATION_MS = 1200;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel background */}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className="object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Gold radial glow (keeps the original atmosphere) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold-dim)] blur-[120px]" />
      </div>

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 grid-bg opacity-30"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="relative max-w-6xl mx-auto px-6 text-center"
        style={{ zIndex: 3 }}
      >
        <p className="animate-fade-in-up opacity-0 animate-delay-100 text-xs tracking-[0.5em] text-[var(--gold)] uppercase mb-6">
          Sound Engineer
        </p>

        <h1 className="animate-fade-in-up opacity-0 animate-delay-200 mb-4">
          <span className="block text-6xl sm:text-8xl font-thin tracking-[0.1em] text-white">
            WATABE
          </span>
          <span className="block text-6xl sm:text-8xl font-thin tracking-[0.1em] gold-text">
            HIDENORI
          </span>
        </h1>

        <p className="animate-fade-in-up opacity-0 animate-delay-300 text-lg tracking-[0.4em] text-[var(--muted)] mb-10">
          渡部 秀典
        </p>

        <p className="animate-fade-in-up opacity-0 animate-delay-400 max-w-xl mx-auto text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-14">
          音と向き合い、音楽の本質を引き出す。
          <br />
          レコーディングからライブまで、プロの音響をあなたの作品へ。
        </p>

        <div className="animate-fade-in-up opacity-0 animate-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--gold)] text-black text-sm tracking-widest font-semibold hover:bg-[var(--gold-light)] transition-colors duration-200"
          >
            お問い合わせ
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-[var(--border)] text-sm tracking-widest text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
          >
            サービスを見る
          </a>
        </div>

        {/* Carousel dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`スライド ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                borderRadius: i === current ? "3px" : "50%",
                background:
                  i === current ? "var(--gold)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ zIndex: 3 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">
          Scroll
        </span>
        <span className="block w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
}
