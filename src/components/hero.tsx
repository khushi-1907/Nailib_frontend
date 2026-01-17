"use client";

import { FC, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "phosphor-react";
import gsap from "gsap";

const Hero: FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the heading and paragraph on mount
      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from(".hero-buttons > *", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.6,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden bg-background-dark"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          Trusted by 50,000+ Students
        </span>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white mb-8 leading-[1.1]">
          The Largest{" "}
          <span className="text-primary italic">IB Resource</span> Platform on Earth
        </h1>

        <p className="hero-subtitle text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Access over{" "}
          <span className="font-bold text-white">5,294+ examiner-led videos</span>,{" "}
          35,956+ practice questions, and expert-crafted guides to boost your IB success.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 shadow-xl shadow-primary/25">
            Register (It's Free)
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" weight="bold" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
