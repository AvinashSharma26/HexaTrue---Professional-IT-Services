
import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    { name: 'FinTech & Banking', desc: 'Secure, high-concurrency engines for global transactions and asset management.', icon: '🏦' },
    { name: 'Healthcare & Life Sciences', desc: 'HIPAA-compliant platforms for telehealth, EHR, and personalized patient care.', icon: '🏥' },
    { name: 'Retail & E-commerce', desc: 'Headless commerce engines built for high-speed performance and global scale.', icon: '🛒' },
    { name: 'Manufacturing & IoT', desc: 'Connecting hardware to the cloud for predictive maintenance and digital twins.', icon: '🏭' },
    { name: 'Education & EdTech', desc: 'Modernizing learning management systems for the next generation of students.', icon: '🎓' },
    { name: 'Logistics & Supply Chain', desc: 'Blockchain-powered transparency and real-time inventory intelligence.', icon: '🚢' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Industries <span className="text-blue-400">We Elevate.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              We bring deep domain expertise to specialized sectors, providing tailored technological strategies that drive competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">{ind.name}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{ind.desc}</p>
                <div className="mt-8 pt-8 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                     Explore Industry Solutions
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
