// components/MovingStatsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "/mit.png",
  "/harvard.png",
  "/berkeley.png",
  "/stanford.png",
  "/oxford.png",
  "/cambridge.png",
  "/yale.png",
];

const MovingStatsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const logosEl = containerRef.current!;
      // Start logos evenly spaced
      gsap.set(logosEl.children, {
        x: (i) => (i * 100) / logosEl.children.length + "%",
      });

      // Infinite scroll
      gsap.to(logosEl, {
        xPercent: -50, // move left
        repeat: -1,
        duration: 10, // speed
        ease: "linear",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">
          Trusted by top universities worldwide
        </p>
        <div className="flex gap-12 whitespace-nowrap relative">
          <div
            className="flex gap-12"
            ref={containerRef}
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="University Logo"
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingStatsSection;
