"use client";

import { EnvelopeSimple, Globe, YoutubeLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer className="bg-surface-dark-deep border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <a className="flex items-center gap-2" href="#">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-xl italic">N</span>
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-white">
                                NAIL IB
                            </span>
                        </a>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            The ultimate destination for IB students. Excellence simplified through expert resources and comprehensive support.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-slate-400 hover:text-white transition-colors" href="#"><Globe size={20} /></a>
                            <a className="text-slate-400 hover:text-white transition-colors" href="#"><YoutubeLogo size={20} /></a>
                            <a className="text-slate-400 hover:text-white transition-colors" href="#"><EnvelopeSimple size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h6 className="font-bold mb-6 text-white">IB Resources</h6>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Biology SL</a></li>
                            <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-2 h-2 rounded-full bg-red-400"></span> Physics HL</a></li>
                            <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-2 h-2 rounded-full bg-blue-400"></span> History HL</a></li>
                            <li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-2 h-2 rounded-full bg-green-400"></span> Chemistry SL</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-bold mb-6 text-white">Quick Links</h6>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li><a className="hover:text-white transition-colors" href="#">Past Papers</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Pricing Plans</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">IA Examples <span className="ml-1 text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded font-bold">NEW</span></a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Sell Your Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-bold mb-6 text-white">Stay Updated</h6>
                        <p className="text-sm text-slate-300 mb-6">Get the latest IB tips and resource updates directly.</p>
                        <div className="flex gap-2">
                            <input
                                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder:text-slate-500"
                                placeholder="Email address"
                                type="email"
                            />
                            <button className="bg-primary hover:bg-blue-600 text-white p-3 rounded-xl transition-colors shadow-lg shadow-primary/20">
                                <EnvelopeSimple size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-slate-400">© 2016-2024 NAIL IB. All rights reserved. A product of Turnix.</p>
                    <div className="flex gap-8 text-xs text-slate-400 font-medium">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-white transition-colors" href="#">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
