import { FC } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Hero: FC = () => {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                    Trusted by 50,000+ Students
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white mb-8 leading-[1.1]">
                    The Largest <span className="text-primary italic">IB Resource</span> Platform on Earth.
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Access over <span className="font-bold text-white">5,294+ examiner-led videos</span>, 35,956+ practice questions, and expert-crafted guides.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 shadow-xl shadow-primary/25">
                        Register (It's Free)
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 flex items-center justify-center gap-2">
                        <PlayCircle className="w-5 h-5" /> Watch Demo
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
