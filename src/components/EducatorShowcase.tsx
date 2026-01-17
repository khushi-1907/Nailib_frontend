"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Play, Folder, CaretLeft, CaretRight, GraduationCap, VideoCamera, Users, X } from "phosphor-react";

type Course = {
  name: string;
  color: string;
  icon: typeof Folder;
};

type Educator = {
  name: string;
  role: string;
  image: string;
  video: string;
  courses: Course[];
  stats: {
    students: string;
    videos: string;
  }
};

const educators: Educator[] = [
  {
    name: "Dr. Anshul Verma",
    role: "Core History Specialist",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stats: { students: "12K+", videos: "120+" },
    courses: [
      { name: "History SL", color: "from-orange-500 to-red-500", icon: Folder },
      { name: "History HL", color: "from-red-500 to-pink-600", icon: Folder },
    ],
  },
  {
    name: "Deepika",
    role: "Human Geography Expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4",
    stats: { students: "8.5K+", videos: "95+" },
    courses: [
      { name: "Geography SL", color: "from-amber-400 to-orange-500", icon: Folder },
      { name: "Geography HL", color: "from-orange-500 to-red-500", icon: Folder },
    ],
  },
  {
    name: "Paulomi Choudhury",
    role: "Senior Psychology Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stats: { students: "15K+", videos: "150+" },
    courses: [
      { name: "Psychology SL", color: "from-purple-500 to-indigo-600", icon: Folder },
      { name: "Psychology HL", color: "from-indigo-600 to-blue-700", icon: Folder },
    ],
  },
  {
    name: "Mr. Dexter Hayworth",
    role: "English Literature Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4",
    stats: { students: "10K+", videos: "85+" },
    courses: [
      { name: "English Lit HL", color: "from-emerald-500 to-teal-600", icon: Folder }
    ],
  },
  {
    name: "Marcus XYZ",
    role: "Physics Head",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4",
    stats: { students: "18K+", videos: "110+" },
    courses: [
      { name: "Physics HL", color: "from-rose-500 to-purple-600", icon: Folder },
      { name: "Physics SL", color: "from-purple-600 to-indigo-700", icon: Folder },
    ],
  }
];

export default function EducatorShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Custom infinite scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPos = container.scrollLeft;

    const scroll = () => {
      if (!isPaused && !activeVideo) {
        scrollPos += 0.8; // Smooth auto-scroll speed

        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }

        container.scrollLeft = scrollPos;
      } else {
        scrollPos = container.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, activeVideo]);

  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    setIsPaused(true);
    const cardWidth = container.children[0]?.clientWidth ?? 350;
    const gap = 24;

    container.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : (cardWidth + gap),
      behavior: "smooth",
    });

    // Resume auto-scroll after a delay
    setTimeout(() => setIsPaused(false), 3000);
  }, []);

  return (
    <section className="py-24 bg-surface-dark-alt relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <GraduationCap className="text-primary" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Master Class Mentors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
              Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Elite 1%</span> of IB Educators
            </h2>
            <p className="text-slate-300 text-lg mt-4 font-medium">
              Every course is handcrafted by top-tier IB examiners and specialists to ensure you nail your exams.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scrollByAmount("left")}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg"
              aria-label="Scroll Left"
            >
              <CaretLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 group shadow-lg"
              aria-label="Scroll Right"
            >
              <CaretRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden no-scrollbar pb-12 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Tripled array for smoother loop */}
          {[...educators, ...educators, ...educators].map((edu, i) => (
            <div
              key={`${edu.name}-${i}`}
              className="min-w-[320px] md:min-w-[400px] group transition-all duration-500"
            >
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                {/* Image & Video Preview */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80" />

                  {/* Stats Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <Users size={14} className="text-primary" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">{edu.stats.students} Students</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                      <VideoCamera size={14} className="text-blue-400" />
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">{edu.stats.videos} Lessons</span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setActiveVideo(edu.video)}
                      className="w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl shadow-primary/40 transform scale-75 group-hover:scale-100 transition-transform duration-500"
                    >
                      <Play size={32} weight="fill" className="ml-1" />
                    </button>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-1">{edu.role}</p>
                    <h3 className="text-2xl font-display font-black text-white">{edu.name}</h3>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 bg-[#0f172a] border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider bg-gradient-to-br ${course.color} shadow-lg shadow-black/20`}
                      >
                        <course.icon size={12} weight="bold" />
                        {course.name}
                      </span>
                    ))}
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo}
              className="w-full h-full"
              controls
              autoPlay
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
