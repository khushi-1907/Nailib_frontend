"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X, CaretRight } from "phosphor-react";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep-charcoal/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
            <img src="/logo.png" alt="Nail IB Logo" className="w-full h-full object-contain" />
          </div>
          <span className="hidden sm:block font-display font-bold text-xl tracking-tight text-white">
            Nail IB
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Resources</a>
          <a href="#" className="hover:text-primary transition-colors">Schools</a>
          <a href="#" className="hover:text-primary transition-colors">Past Papers</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Login
            </a>
            <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20">
              Join Free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-charcoal border-b border-white/5 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-semibold text-slate-300 hover:text-white px-2">Resources</a>
            <a href="#" className="text-lg font-semibold text-slate-300 hover:text-white px-2">Schools</a>
            <a href="#" className="text-lg font-semibold text-slate-300 hover:text-white px-2">Past Papers</a>
            <a href="#" className="text-lg font-semibold text-slate-300 hover:text-white px-2">Pricing</a>
          </div>
          <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
            <a href="#" className="text-center py-3 font-semibold text-slate-300 hover:text-white transition-colors">Login</a>
            <Button className="w-full bg-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Join Free <CaretRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
