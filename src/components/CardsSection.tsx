"use client";

import { FC, useEffect, useRef } from "react";
import {
    ChartLineUp,
    Lightning,
    BookOpen,
    Brain,
    ListChecks,
    Cards,
    ChatCircleText,
    SealCheck
} from "@phosphor-icons/react";
import { gsap } from "gsap";

const ACCURACY_DATA = [
    { label: "MATH", height: "45%", color: "bg-primary/40" },
    { label: "PHYS", height: "65%", color: "bg-primary/40" },
    { label: "CHEM", height: "35%", color: "bg-primary/40" },
    { label: "ECON", height: "85%", color: "bg-accent-emerald/40" },
    { label: "BIO", height: "55%", color: "bg-primary/40" },
];

const SECONDARY_FEATURES = [
    { icon: <Lightning className="text-primary" />, title: "Smart Drill", desc: "Focus on Paper 1 multiple choice logic.", color: "hover:border-primary/50", iconColor: "group-hover/item:text-primary" },
    { icon: <BookOpen className="text-accent-gold" />, title: "Past Paper Mode", desc: "Simulate real exam conditions with timers.", color: "hover:border-accent-gold/50", iconColor: "group-hover/item:text-accent-gold" },
    { icon: <Brain className="text-accent-emerald" />, title: "Topic Heatmap", desc: "Visualize syllabus coverage automatically.", color: "hover:border-accent-emerald/50", iconColor: "group-hover/item:text-accent-emerald" },
];

const CardsSection: FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation for the entire section
            gsap.from(".animate-fade-up", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Hover animations for cards
            const cards = document.querySelectorAll(".bento-card");
            cards.forEach((card) => {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        scale: 1.01,
                        borderColor: "rgba(19, 109, 236, 0.6)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        scale: 1,
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative max-w-[1280px] mx-auto px-6 lg:px-20 py-24 bg-background-dark overflow-hidden">
            {/* Atmosphere blurs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] -z-0 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] -z-0 pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-20 animate-fade-up">
                    <h1 className="text-white tracking-tight text-4xl lg:text-6xl font-bold leading-tight pb-4">
                        Master the IB Diploma with <span className="text-primary italic">Executive Precision</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                        Premium tools for the modern IB student. Data-driven insights, elite exemplars, and adaptive learning workflows.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-xs font-medium text-white/50 uppercase tracking-widest">
                        <span className="w-8 h-px bg-white/20"></span>
                        Used by students at Global Top Schools
                        <span className="w-8 h-px bg-white/20"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
                    {/* Practice Dashboard */}
                    <div className="md:col-span-8 md:row-span-2 bg-surface-dark rounded-xl card-border-premium inner-glow p-8 flex flex-col relative overflow-hidden group bento-card animate-fade-up">
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Adaptive Question Bank</h3>
                                <p className="text-white/70 text-sm max-w-md">2,000+ IB-style questions that learn your weaknesses and adjust difficulty in real-time.</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-accent-emerald/10 text-accent-emerald text-xs font-bold rounded-full border border-accent-emerald/30">Live</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/30">V.2.4</span>
                            </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                            {/* Dashboard UI Demo */}
                            <div className="bg-background-dark/50 rounded-xl p-6 border border-white/5">
                                <div className="flex items-center justify-between mb-6">
                                    <p className="text-sm font-medium text-white/70">Topic Accuracy</p>
                                    <span className="text-accent-emerald flex items-center gap-1 text-xs font-bold">
                                        <ChartLineUp size={14} weight="bold" /> +5.2%
                                    </span>
                                </div>
                                <div className="grid grid-cols-5 gap-3 items-end h-32 mb-4">
                                    {ACCURACY_DATA.map((item, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                                            <div className="w-full bg-white/5 rounded-t-md relative overflow-hidden" style={{ height: item.height }}>
                                                <div className={`absolute bottom-0 w-full ${item.color} h-full`}></div>
                                            </div>
                                            <span className="text-[10px] text-white/40 font-bold">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <div className="text-xs text-white/40">Total Mastery</div>
                                    <div className="text-lg font-bold text-white">88%</div>
                                </div>
                            </div>

                            {/* Side Features */}
                            <div className="flex flex-col gap-4">
                                {SECONDARY_FEATURES.map((feature, i) => (
                                    <div key={i} className={`p-4 rounded-xl bg-white/5 border border-white/5 ${feature.color} transition-colors cursor-pointer group/item`}>
                                        <div className="flex items-center gap-3 mb-1">
                                            {feature.icon}
                                            <h4 className={`font-bold text-sm ${feature.iconColor} transition-colors text-white`}>{feature.title}</h4>
                                        </div>
                                        <p className="text-xs text-white/40">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-0 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    </div>

                    {/* IA/EE Excellence */}
                    <div className="md:col-span-4 md:row-span-2 bg-surface-dark rounded-xl card-border-premium inner-glow p-8 overflow-hidden flex flex-col bento-card animate-fade-up">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2 text-white">IA & EE Library</h3>
                            <p className="text-white/70 text-sm">7-Point exemplar library with examiner annotations.</p>
                        </div>
                        <div className="flex-1 relative mt-4">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-64 paper-texture rounded-sm shadow-2xl rotate-[-2deg] p-4 flex flex-col gap-2">
                                <div className="h-1 w-12 bg-gray-200 rounded"></div>
                                <div className="h-1 w-full bg-gray-100 rounded"></div>
                                <div className="h-1 w-full bg-gray-100 rounded"></div>
                                <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
                                <div className="mt-4 border-l-2 border-accent-emerald/30 pl-2">
                                    <div className="h-1 w-full bg-gray-100 rounded"></div>
                                    <div className="h-1 w-5/6 bg-gray-100 rounded"></div>
                                </div>
                                <div className="absolute top-4 right-4 size-10 border-2 border-accent-emerald rounded-full flex items-center justify-center -rotate-12 opacity-80">
                                    <span className="text-accent-emerald font-bold text-xl">7</span>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-[8px] font-bold text-accent-emerald uppercase">Verified Exemplar</span>
                                </div>
                            </div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 translate-x-12 w-48 h-64 paper-texture rounded-sm shadow-xl rotate-[4deg] p-4 opacity-40">
                                <div className="absolute top-4 right-4 size-10 border-2 border-accent-gold rounded-full flex items-center justify-center rotate-12">
                                    <span className="text-accent-gold font-bold text-xl">A</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto grid grid-cols-2 gap-2">
                            <button className="text-xs bg-white/5 hover:bg-white/10 py-2.5 rounded-full font-bold border border-white/20 transition-colors text-white">Browse Biology</button>
                            <button className="text-xs bg-white/5 hover:bg-white/10 py-2.5 rounded-full font-bold border border-white/20 transition-colors text-white">Browse Economics</button>
                        </div>
                    </div>

                    {/* Syllabus Tracker */}
                    <div className="md:col-span-4 bg-surface-dark rounded-xl card-border-premium inner-glow p-6 flex flex-col justify-between group bento-card animate-fade-up">
                        <div className="flex items-center justify-between">
                            <span className="p-2 bg-primary/10 rounded-lg">
                                <ListChecks size={20} className="text-primary" weight="bold" />
                            </span>
                            <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Tracker</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Syllabus Progress</h4>
                            <p className="text-sm text-white/70">Auto-syncs with your drills.</p>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-4">
                            <div className="bg-primary h-full w-[64%]"></div>
                        </div>
                    </div>

                    {/* Flashcards */}
                    <div className="md:col-span-4 bg-surface-dark rounded-xl card-border-premium inner-glow p-6 flex flex-col justify-between group bento-card animate-fade-up">
                        <div className="flex items-center justify-between">
                            <span className="p-2 bg-accent-gold/10 rounded-lg">
                                <Cards size={20} className="text-accent-gold" weight="bold" />
                            </span>
                            <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Retention</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Flashcard Mastery</h4>
                            <p className="text-sm text-white/70">Spaced-repetition for definitions.</p>
                        </div>
                        <div className="flex -space-x-2 mt-4">
                            <div className="size-6 rounded-full border-2 border-surface-dark bg-primary flex items-center justify-center text-[10px] font-bold text-white">MA</div>
                            <div className="size-6 rounded-full border-2 border-surface-dark bg-accent-emerald flex items-center justify-center text-[10px] font-bold text-white">PH</div>
                            <div className="size-6 rounded-full border-2 border-surface-dark bg-accent-gold flex items-center justify-center text-[10px] font-bold text-white">EC</div>
                            <div className="size-6 rounded-full border-2 border-surface-dark bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">+12</div>
                        </div>
                    </div>

                    {/* Examiner Feedback */}
                    <div className="md:col-span-4 bg-surface-dark rounded-xl card-border-premium inner-glow p-6 flex flex-col justify-between group bento-card animate-fade-up">
                        <div className="flex items-center justify-between">
                            <span className="p-2 bg-accent-emerald/10 rounded-lg">
                                <ChatCircleText size={20} className="text-accent-emerald" weight="bold" />
                            </span>
                            <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Expert AI</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Detailed Markschemes</h4>
                            <p className="text-sm text-white/70">Understand exactly why you lost points.</p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-accent-emerald font-bold text-xs uppercase">
                            <SealCheck size={16} weight="fill" />
                            Examiner Verified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
