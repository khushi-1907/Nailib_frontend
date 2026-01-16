import { FC } from "react";
import { Button } from "@/components/ui/button";

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-header border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2" href="#">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic">N</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white">NAIL IB</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Resources</a>
            <a className="hover:text-primary transition-colors" href="#">Schools</a>
            <a className="hover:text-primary transition-colors" href="#">Past Papers</a>
            <a className="hover:text-primary transition-colors" href="#">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Login</a>
          <Button className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20">
            Join Free
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
