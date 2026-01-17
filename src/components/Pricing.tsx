"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { CheckCircle, LockOpen, ArrowRight, Book } from "phosphor-react";

type PlanId = "24" | "12" | "monthly";

interface Plan {
    monthly: string;
    old: string;
    total: string;
    savings: string;
}

const plans: Record<PlanId, Plan> = {
    "24": { monthly: "INR 519/mo", old: "INR 3999/mo", total: "INR 12456", savings: "87%" },
    "12": { monthly: "INR 999/mo", old: "INR 3999/mo", total: "INR 11988", savings: "75%" },
    "monthly": { monthly: "INR 3999/mo", old: "", total: "INR 3999", savings: "0%" },
};

export default function PricingSection() {
    const [activePlan, setActivePlan] = useState<PlanId>("24");

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            gsap.from(".feature-item", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
            });
            gsap.from("#pricing-card", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });
        });

        return () => ctx.revert();
    }, []);

    const handlePlanChange = (planId: PlanId) => {
        setActivePlan(planId);
        gsap.fromTo(
            "#pricing-card",
            { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.02)" },
            { scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)", duration: 0.2, yoyo: true, repeat: 1, ease: "power2.inOut" }
        );
    };

    const current = plans[activePlan];

    return (
        <section className="py-24 bg-background-dark text-white relative overflow-hidden">
            {/* Central Atmosphere Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6 text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">Pricing</h2>
                <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                    INR 17.30/day, less than your daily coffee ☕️. Get closer to that perfect 45 today!
                </p>
            </div>

            {/* Tab Selector */}
            <div className="flex justify-center mb-8 gap-2">
                {(["24", "12", "monthly"] as PlanId[]).map((plan) => (
                    <button
                        key={plan}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold flex flex-col items-center gap-1 transition-all duration-200
              ${activePlan === plan ? "tab-active text-white" : "text-slate-300 hover:text-white"}`}
                        onClick={() => handlePlanChange(plan)}
                    >
                        <span>
                            {plan === "24" ? "24 Months" : plan === "12" ? "12 Months" : "Monthly"}
                        </span>
                        <span
                            className={`text-[10px] px-2 py-0.5 rounded-full border
                ${plan === "24" ? "bg-indigo-600/30 text-indigo-300 border-indigo-500/30" :
                                    plan === "12" ? "bg-emerald-600/30 text-emerald-300 border-emerald-500/30" :
                                        "bg-slate-700 text-slate-200 border-none"}`}
                        >
                            {plan === "monthly" ? "Popular" : `${plans[plan].savings} OFF`}
                        </span>
                    </button>
                ))}
            </div>

            {/* Pricing Card */}
            <div
                id="pricing-card"
                className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto shadow-xl"
            >
                {/* Details */}
                <div className="flex-1 p-8 lg:p-12">
                    <h3 className="text-4xl font-extrabold mb-4 tracking-tight">SAVER+</h3>
                    <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-bold">{current.monthly}</span>
                        {current.old && <span className="text-xl text-slate-400 line-through">{current.old}</span>}
                    </div>
                    <p className="text-slate-300 mt-2 text-sm">Access for {activePlan === "24" ? "24 months" : activePlan === "12" ? "12 months" : "1 month"}. Pay once, no auto-renewal.</p>

                    <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1.5 rounded-full text-xs font-semibold my-6">
                        <LockOpen size={16} weight="fill" />
                        Unlock {plans[activePlan].savings} Savings
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                        {[
                            "IB Subjects: Instant access to 34 IB subjects, select as many as you like!",
                            "IB Videos: 5,295 videos over 1195 hours.",
                            "Solved Past Papers: 258 graded past papers.",
                            "IB Question Bank: 36,683 IB-like questions with explanations.",
                            "IB Flashcards: 53,435 quality flashcards.",
                            "IB Notes: 5913 notes with real-world examples.",
                        ].map((text, idx) => (
                            <div key={idx} className="feature-item flex items-start gap-3">
                                <CheckCircle size={20} weight="fill" className="text-emerald-400 flex-shrink-0" />
                                <p className="text-slate-200 text-sm leading-tight">{text}</p>
                            </div>
                        ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary via-yellow-300 to-primary hover:scale-[1.01] active:scale-[0.99] transition-all py-5 rounded-2xl text-black font-extrabold text-lg flex items-center justify-center gap-2">
                        Sign Up To Pay {current.total} Now
                        <ArrowRight size={20} weight="bold" />
                    </button>
                </div>

                {/* Visual */}
                <div className="relative w-full lg:w-1/3 bg-slate-900/50 flex items-center justify-center overflow-hidden min-h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-500/10"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <img
                            alt="Student studying"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhAQId-gGF8Jjh1E6bw4h2gz9v6nWVVEas8I3vsbN3ClR4-qS_2rpC28f6STxtohtAgFcwdH9M-gl6D-CWFjdu3ks3Q_Dt1BHhDBeTRVmJjSq-VGsjCR8CjC1OxLKpprsbTaF2Oqsl5DOfnHqnpgU6m-Bbvg0Wwap_uq_Tkma7ZqIHMCNjojNNd80OGyk1bG3AKscUyCPtun6kZ9uVscMJrAJR50GBmjkNokirzxZzUj04irSOS7ZvvAm4Q3Bdut3IkXUqPE1OqrGD"
                        />
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-48 h-48 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-indigo-700 shadow-2xl shadow-blue-500/20 flex items-center justify-center transform rotate-6 border border-white/20">
                                <Book size={56} weight="fill" className="text-white" />
                            </div>
                            <div className="mt-8 text-center px-6">
                                <div className="text-indigo-300 font-bold tracking-widest text-xs uppercase mb-2">Academic Excellence</div>
                                <div className="text-white text-xl font-medium">Built for IB Success</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-slate-400 text-xs text-center mt-6">
                Trusted by 50,000+ IB students worldwide. Safe & secure payment.
            </p>
        </section>
    );
}
