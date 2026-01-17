"use client";

import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight, Play, Folder } from "phosphor-react";

type Course = {
  name: string;
  color: "orange" | "amber" | "red";
};

type Educator = {
  name: string;
  description: string;
  image: string;
  courses: Course[];
};

const educators: Educator[] = [
  {
    name: "Dr. Anshul Verma",
    description:
      "Expert IB History teacher with 6+ years of experience. Yale alum and Gold Medalist, specializing in modern European history.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnNDtZSknGSALs_fwNHeXXVQ0_dLWvpxbq9vfwXE36dkq83m88ySxtF_CbxPW-BwOxnrfyVT_rKZ2ZH2L-dIc1MK9xQEN25-OIjqgSiOtRVJ7ltaZe3ZY4n8j6ahuT1YAuAIiJoDmPglxMToFqpcIVmKPv-fkXtfspXFMONyYo-naggrG3nze0z5fDWShwz-8YmDcNDGJa4FGvtg73GCYtgNBbT8f3GCEFU9-I6UG-4lUVNl0qBSZ1lbQJXZ2nV7JjX9i2R5qaYP1L",
    courses: [
      { name: "History SL", color: "orange" },
      { name: "History HL", color: "red" },
    ],
  },
  {
    name: "Deepika",
    description:
      "IB Geography educator with a diverse academic background and strong experience in human geography.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGMZXZDTnvRpL_n6ilwOyrZR4O8gpQ50XqLfaymwyY-B09ec-NvB583qWyo6X78UQgmGB9uut79trxSrYpuMIU_edEHwI1mJ00ST-s6MgzwYV0hqmR-IvERerh3TKEySt_VMADotHHjx24DXK5c7CiAF3aqTUeXGlm5eB8-upDuFYTH3LlIHc6QvhTTT0kL08Vw7WRBAAmZzgy0q9DbThyxBbwignrGEF8aQKSSYR17U8m7hVlUMjeZIfKGCtoBGZ4zFlhEdSaoewy",
    courses: [
      { name: "Geography SL", color: "amber" },
      { name: "Geography HL", color: "red" },
    ],
  },
  {
    name: "Paulomi Choudhury",
    description:
      "Certified IB Psychology professional with 7+ years of experience and a Master’s in Psychology.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3J9-DBL2YU5jWOKzyqX0xZQVXegagOZ0PjUMnBb2q_yME8DBRz-j-ifb244d6TJqtVnEiubHXZMVLqOENDJaOjVon1xENetRlkTqUydCgJe7AQ81EvhLoh9P0cz1-Tq4NY6UxGmps_eUPOhL7tglME9uYmDDw2nLrQ7-ePzn1_vFikf5PxPIZekkjtlx7WNzCvRogxnFd6C8rSRcmRSxVqBIJ_9JV_5ezsn20MDwEzaw6oqssetITYTMvppsCFRQX1l388ynBqWL9",
    courses: [
      { name: "Psychology SL", color: "orange" },
      { name: "Psychology HL", color: "red" },
    ],
  },
  {
    name: "Mr. Dexter Hayworth",
    description:
      "English Literature educator with a global perspective and engaging teaching methods.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zxXuY4mBxvWNO6l4o7Yrfu-KZ1VYiIT1rJVz2jYiO5t6hqplti1Q0JUUJFad2dO3ZLINDhg96WM_tvHJH1bPlHoExkRmZWhMBqRTxnD10kOA_rPkHtE66vcSkjSWBSNK1vNhuHxainMKCNk4BjTRC1e92pjyDMDlAhENlQw-wHks8UooMXkGJVT6qzKTUx0-tdDqlu2KXTyZ6SRZKPF3o38Dh5NPa9VPSAFFTgCoCEyMebE6yDihJS1yo8Uwm4TZkF4PDpAySoBO",
    courses: [{ name: "English Lit HL", color: "red" }],
  },
];

export default function EducatorShowcase() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (direction: "left" | "right") => {
    if (!listRef.current) return;

    const firstCard = listRef.current.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const scrollAmount = firstCard.offsetWidth + 24;

    listRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const onScroll = () => {
      const firstCard = container.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      const index = Math.round(container.scrollLeft / (firstCard.offsetWidth + 24));
      setActiveIndex(index);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Meet Your Mentors
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mt-2">
            Learn from the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              IB Elites
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-500 dark:text-slate-400 text-lg">
            Access premium video courses led by world-class educators.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => scrollByCard("left")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <CaretLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard("right")}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            <CaretRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={listRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-10"
      >
        {educators.map((educator, index) => (
          <div
            key={educator.name}
            className={`min-w-[340px] md:min-w-[380px] rounded-xl border p-4 bg-white dark:bg-slate-900/50 transition-opacity ${
              index === activeIndex ? "opacity-100" : "opacity-60"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg mb-5 group">
              <img
                src={educator.image}
                alt={educator.name}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Play size={22} className="ml-1 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-display font-bold">
              {educator.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {educator.description}
            </p>

            <div className="mt-5">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                Video Courses
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {educator.courses.map((course) => (
                  <span
                    key={course.name}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-${course.color}-50 text-${course.color}-700`}
                  >
                    <Folder size={14} />
                    {course.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {educators.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-1.5 bg-slate-300 dark:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
