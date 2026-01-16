"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep-charcoal/80 backdrop-blur-lg border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2 group" href="#">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-black text-2xl italic">N</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white">NAIL IB</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Resources</a>
            <a className="hover:text-primary transition-colors" href="#">Schools</a>
            <a className="hover:text-primary transition-colors" href="#">Past Papers</a>
            <a className="hover:text-primary transition-colors" href="#">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors" href="#">Login</a>
            <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20">
              Join Free
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-charcoal border-b border-white/5 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            <a className="text-lg font-semibold text-slate-300 hover:text-white px-2" href="#">Resources</a>
            <a className="text-lg font-semibold text-slate-300 hover:text-white px-2" href="#">Schools</a>
            <a className="text-lg font-semibold text-slate-300 hover:text-white px-2" href="#">Past Papers</a>
            <a className="text-lg font-semibold text-slate-300 hover:text-white px-2" href="#">Pricing</a>
          </div>
          <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
            <a className="text-center py-3 font-semibold text-slate-300" href="#">Login</a>
            <Button className="w-full bg-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Join Free <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
