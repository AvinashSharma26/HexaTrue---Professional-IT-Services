

import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added PROJECTS_DATA to the import from constants
import { PROJECTS_DATA } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Engineering <span className="text-blue-400">Success.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Explore our portfolio of high-impact digital transformations. From FinTech engines to IoT ecosystems, we build the technology that powers global leaders.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {PROJECTS_DATA.map((p) => (
              <Link key={p.id} to={`/work/${p.id}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-10 shadow-2xl border border-slate-100">
                  <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-12">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-lg font-bold flex items-center gap-2">
                        View Full Case Study 
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
                      {p.category}
                    </span>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">•</span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{p.client}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg">
                    {p.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 italic">
            "HexaTrue doesn't just build software; they build the future of our business operations."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img src="https://i.pravatar.cc/100?u=ceo" className="w-16 h-16 rounded-full grayscale" alt="CEO" />
            <div className="text-left">
              <p className="font-bold text-slate-900">David Henderson</p>
              <p className="text-sm text-slate-500 font-medium">CEO, TransWorld Finance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10">Start Your Story Today</h2>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-14 py-6 rounded-full font-black text-lg shadow-2xl hover:bg-blue-50 transition-all hover:-translate-y-1">
            Let's Build Together
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;