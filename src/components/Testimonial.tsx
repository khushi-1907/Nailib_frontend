"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  Play,
  CaretLeft,
  CaretRight,
  Quotes,
  X,
} from "phosphor-react";

type Testimonial = {
  id: string;
  name: string;
  quote?: string;
  image: string;
  video?: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Hazel Barnes",
    role: "IB DP Student",
    quote:
      "This platform completely transformed my IB preparation. Everything finally made sense.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "IB Success Story",
    image:
      "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "3",
    name: "Erik Briggs",
    role: "IB HL Candidate",
    quote:
      "The video explanations cleared concepts I struggled with for months.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Lyla Rogers",
    role: "IB Graduate",
    quote:
      "Structured, calm, and incredibly effective. My confidence skyrocketed.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
  },
];

export default function TestimonialsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf: number;
    let scrollPos = container.scrollLeft;

    const animate = () => {
      if (!paused && !activeVideo) {
        scrollPos += 0.6;

        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }

        container.scrollLeft = scrollPos;
      } else {
        scrollPos = container.scrollLeft;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [paused, activeVideo]);

  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    setPaused(true);
    const cardWidth = container.children[0]?.clientWidth ?? 360;
    const gap = 32;

    container.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });

    setTimeout(() => setPaused(false), 2500);
  }, []);

  return (
    <section className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Quotes size={14} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Student Voices
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Trusted by <span className="text-primary">IB Students</span> Worldwide
            </h2>
            <p className="text-slate-400 text-lg mt-4">
              Real stories from students who transformed their IB journey.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scrollByAmount("left")}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition"
            >
              <CaretLeft size={24} />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition"
            >
              <CaretRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden no-scrollbar pb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="min-w-[320px] md:min-w-[380px]"
            >
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl group hover:-translate-y-2 transition-all duration-500">
                {/* Media */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {t.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideo(t.video!)}
                        className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl shadow-primary/40 scale-95 group-hover:scale-100 transition"
                      >
                        <Play size={28} weight="fill" />
                      </button>
                    </div>
                  )}
                </div>


                {/* Content */}
                <div className="p-6 bg-[#0f172a] border-t border-white/5">
                  {t.quote && (
                    <p className="text-slate-300 italic leading-relaxed mb-4">
                      “{t.quote}”
                    </p>
                  )}
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    {t.role && (
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {t.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={activeVideo} controls autoPlay className="w-full h-full" />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
