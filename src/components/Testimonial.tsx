"use client";

import { useEffect } from "react";
import { Play } from "phosphor-react";

type Testimonial = {
  id: string;
  name: string;
  text?: string;
  image: string;
  video?: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Hazel Barnes",
    text:
      "This platform genuinely changed how I approached IB. The explanations are clear, practical, and calming during exam season.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMJiqTo-2EPf49oZyTUQ2iVqTLt0ZZ693DaCoP3C8FUlKlBEh5jDD_as6rDExhJvEiPh497XKy8-a7U8D45i01STdN4aU65xaiZjiPTJ95x5hbbZcSExCf4Z7upcINNag9zaYO0pk1qJ1nsKbFVOfThR9jO0QBmSHpXNOOpmQB4FD0DVKkSezAFQoAqMEmcKbKs2eqq1Vy-mzpt5qaCj4ptI5oF9OyOWAMkG7mYJuJnY3ptwDwVCTGMUU_ljznPiog8vuSGIykmFpI",
  },
  {
    id: "2",
    name: "IB Student Story",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJbEVu2FD-e0WqSuVUF-RDU4qckKGs4uFJtCVeF3P1ge0MD5bepKprz7ye5ITaKoEjr8BUFdigSk8Nam5nVcPQwLVCUuIDFbVbhaU_w4XCY6JBiPIDngE4RX56BvYiueP1xWx34YRGS5Lf4RPi5sesS4xi8ayAQsaaDuj3pbRUME8tv0TK0nEYLUj0YHDUuvyzOrOwMgsr4A2KB7GUPqZM5B0sU9qEaH7vCLjnE6nihsNP2UvYrFCCmQxBtzr6oYrR67WwxhcikkiT",
    video: true,
  },
  {
    id: "3",
    name: "Erik Briggs",
    text:
      "The video walkthroughs helped me finally understand topics I struggled with for months. Worth every minute.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg3Xl2nRcAZi6qSb4XgyyFV8j1SfesVSyKA9DDAM_Pqnb1yend9UZkZ0ga7wZvQ21mDSX9m3EXaPuBHn8c3j9aI9HBc09hq13RnLbGGcG-YmF8j864TU2fWlRXDEeSAEz0R5vBrTHa9QJ5ogqGH5mLFKzcni5BfzUT6PEm4OWTssnwYUrYonuAy7fxerAl7yrJfwACGkvJgvXIPxzAL2dvEzt66Rr0EZDrudBIJomXEVMOZifPqXQ1AZJ9uBZGnpAx6mjvEYAnjOn6",
  },
  {
    id: "4",
    name: "Lyla Rogers",
    text:
      "Everything feels structured and intentional. It removed so much anxiety from my IB preparation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALf1ik0L1KYo0vT5aLNBUiN_05xs6m-MRt_sZMVw2ntmGXlUPweuqeyQRHfK0f7SscP0OnO9JYPOsyPEkI_kc3BUKIg04XrOUPi4u405TkbJJtzGctMqT_CTwid2raWkgx_TPyEykD04imF5Pvoh1nJ2JN00ceT6OKE3dJ_HHGwYIURMmmnsXMnhyBVq8znOcfn4hL-3XEwcImopKKdbjT7uB-WOwlQY91H6V1RzlRu-l0slSLlkZncbyM7Pvkhlt1uPea9yLvRND1",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap").then(({ gsap }) => {
      gsap.fromTo(
        ".testimonial",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section className="py-24 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Real Stories. <span className="text-primary">Real Results.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            Students across the world trust our platform to guide them through
            the IB journey with confidence.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) =>
            item.video ? (
              <div
                key={item.id}
                className="testimonial relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={item.image}
                  alt="Student video testimonial"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <button
                  aria-label="Play testimonial video"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition">
                    <Play size={28} weight="fill" />
                  </div>
                </button>

                <div className="absolute bottom-5 left-5">
                  <p className="font-semibold">Watch Success Story</p>
                  <span className="text-sm text-slate-300">
                    3 min student journey
                  </span>
                </div>
              </div>
            ) : (
              <div
                key={item.id}
                className="testimonial bg-card-dark border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover grayscale hover:grayscale-0 transition"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-slate-300 italic leading-relaxed mb-6">
                    “{item.text}”
                  </p>
                  <span className="mt-auto font-semibold text-primary">
                    {item.name}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 rounded-full bg-primary font-semibold shadow-lg hover:bg-blue-600 transition active:scale-95">
            Join 50,000+ IB Students
          </button>
        </div>
      </div>
    </section>
  );
}
