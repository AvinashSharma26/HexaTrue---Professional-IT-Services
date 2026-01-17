

import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added PROJECTS_DATA to the import from constants
import { PROJECTS_DATA } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-blue-600 py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Proven Results. <br />Real Impact.</h1>
          <p className="text-xl text-blue-100 font-medium">Detailed deep-dives into how we solve the world's most complex technical challenges for global enterprises.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((p) => (
              <Link key={p.id} to={`/work/${p.id}`} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video relative overflow-hidden">
                  <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    {p.category}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-medium line-clamp-3">{p.shortDesc}</p>
                  <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400">{p.client}</span>
                    <span className="text-blue-600 font-black text-xs uppercase tracking-widest">View Results</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;