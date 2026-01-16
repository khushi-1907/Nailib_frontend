"use client";

// components/EverythingYouNeed.tsx
import React from "react";
import { VideoCamera, Book, Cards, ClipboardText } from "phosphor-react";

const CardsSection: React.FC = () => {
    return (
        <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
                        Everything You Need <span className="text-primary italic">to Win.</span>
                    </h2>
                    <p className="text-slate-400">
                        A comprehensive toolkit designed specifically for the rigorous IB curriculum.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Videos Card */}
                    <div className="md:col-span-2 bento-card p-8 md:p-10 bg-card-surface rounded-3xl border border-card-border flex flex-col justify-between overflow-hidden relative min-h-[400px]">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6">
                                <VideoCamera size={24} weight="fill" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">5,294+ IB Videos</h3>
                            <p className="text-slate-400 max-w-sm">
                                Experience crystal-clear HD content, seamless viewing with our "Continue Watching" feature, and access to lecture PDFs.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 md:absolute -bottom-4 -right-4 w-full md:w-3/5">
                            <img
                                alt="Video Player UI"
                                className="rounded-2xl shadow-2xl border border-white/5"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9meMKViXWxccDUIufcIHNVnt61XAl4ekakz43g2481xDdy1gLGk3PKTLYyof3knsRf_GzwgrEKl2dwx-r0z9pz2E7lwNWNKYqxaCjBajwJmWCDym1ppv7njImh-kX249NH0CGg9zx0alQjgyrsqkI210pNe7eq-8Rds-YlzWUC9lEa3OOFzK0VyTugKVO00VvfSeg7KPhetchIuyZDo-N1tEvknLWyUp6k8r6oSesNJA4QcQqlVjiHGGf5g1PwjxR5JplGivrcBU"
                            />
                        </div>
                    </div>

                    {/* Practice Questions Card */}
                    <div className="bento-card p-8 bg-card-surface rounded-3xl border border-card-border flex flex-col">
                        <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                            <Book size={24} weight="fill" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">35,956+ Practice Questions</h3>
                        <p className="text-slate-400 mb-8">
                            Ace your exams with our meticulously curated question bank, tailored for targeted practice.
                        </p>
                        <div className="mt-auto bg-black/40 p-4 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-500">ACCURACY</span>
                                <span className="text-xs font-bold text-green-500">92%</span>
                            </div>
                            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[92%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Flashcards Card */}
                    <div className="bento-card p-8 bg-card-surface rounded-3xl border border-card-border flex flex-col">
                        <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-xl flex items-center justify-center mb-6">
                            <Cards size={24} weight="fill" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">53,434+ Flashcards</h3>
                        <p className="text-slate-400 mb-6">
                            Flip to score. The world's best IB flashcard generator, allows filtering by chapter and difficulty.
                        </p>
                        <div className="relative h-32 flex items-center justify-center">
                            <div className="absolute w-4/5 h-20 bg-primary/10 rounded-xl rotate-3"></div>
                            <div className="absolute w-4/5 h-20 bg-primary/20 rounded-xl -rotate-3"></div>
                            <div className="relative w-4/5 h-20 bg-slate-800 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-xs font-medium px-4 text-center text-slate-200">What is the powerhouse of the cell?</span>
                            </div>
                        </div>
                    </div>

                    {/* Graded IA/EE Examples Card */}
                    <div className="md:col-span-2 bento-card p-8 md:p-10 bg-card-surface rounded-3xl border border-card-border flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-6">
                                <ClipboardText size={24} weight="fill" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">339+ Graded IA/EE Examples</h3>
                            <p className="text-slate-400">
                                Excel in your IAs and EEs with high-quality, high-scoring samples. Showcasing both excellent and improvable examples.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-black/40 rounded-2xl p-6 border border-white/5">
                            <div className="space-y-3">
                                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-800 rounded w-full"></div>
                                <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                                <div className="flex justify-end pt-4">
                                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">GRADE: 7/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
