
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      title: "Integrity First",
      desc: "We build trust through transparent communication and ethical engineering practices. Our word is our bond in every partnership.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Relentless Innovation",
      desc: "Status quo is our enemy. We continuously explore emerging technologies like AI and Blockchain to provide a competitive edge.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Client-Centricity",
      desc: "Your success metrics are our success metrics. We embed ourselves into your business to understand your pain points truly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Operational Excellence",
      desc: "We don't just ship code; we ship high-performance assets. Quality is baked into every sprint and every line of code.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const advantages = [
    {
      title: "Strategic Consulting",
      desc: "We provide high-level technical roadmaps aligned with your long-term business objectives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Full-Cycle Delivery",
      desc: "From rapid prototyping to global production deployments and 24/7 managed support.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Security-First Logic",
      desc: "Hardened infrastructure and DevSecOps protocols built into the core of every application.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Elastic Engineering",
      desc: "Flexible engagement models that scale with your growth, from small pods to massive units.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
              The Architecture of <br /><span className="text-blue-400">Digital Progress.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl">
              HexaTrue is more than an IT services firm. We are a global engineering collective dedicated to solving the most complex challenges of the digital age through intelligence, precision, and vision.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
      </section>

      {/* Our Journey / Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="HexaTrue Office" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 max-w-xs hidden md:block">
                <p className="text-blue-600 font-black text-4xl mb-2">2025</p>
                <p className="text-slate-900 font-bold uppercase tracking-widest text-xs">Foundation Year</p>
                <p className="text-slate-500 text-sm mt-4 leading-relaxed">Starting as a forward-thinking engineering powerhouse, we have rapidly emerged as a global leader in high-end transformation.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em]">Our Story</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                From Visionary Pods to <br />Global Transformation.
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  HexaTrue was founded on a simple yet radical premise: technology should be invisible. We believed that if software was engineered with enough precision, it would disappear into the background of a business, allowing humans to focus on what they do best—creating, selling, and leading.
                </p>
                <p>
                  While we are a new face in the market as of 2025, our core team brings together decades of collective experience from top-tier silicon valley firms. We have already initiated critical partnerships helping legacy systems transition to autonomous cloud environments and empowered next-gen retailers to handle exponential traffic.
                </p>
                <p>
                  Today, HexaTrue stands at the intersection of domain expertise and technical mastery. We don't just provide "resources"; we provide the intellectual power required to navigate the complexities of modern business.
                </p>
              </div>
              <div className="flex gap-12 pt-6">
                <div>
                  <div className="text-4xl font-black text-slate-900">40+</div>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Nations Served</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900">150+</div>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Expert Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Our Values</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">Principles That Guide Every Sprint.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="mb-8">{v.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{v.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em]">Our Approach</h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                  Design Thinking Meets <br />Agile Engineering.
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We don't start with code; we start with empathy. Our proprietary 'Discovery Phase' ensures we are solving the right problem before we ever write the first line of an API.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  { step: "01", title: "Problem Definition", desc: "Deep-dive workshops to identify business bottlenecks and user friction points." },
                  { step: "02", title: "Architectural Blueprinting", desc: "Designing a tech stack that is scalable, secure, and cost-effective for your specific load." },
                  { step: "03", title: "Iterative Engineering", desc: "Bi-weekly sprints with continuous CI/CD pipelines for total transparency." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="text-3xl font-black text-blue-100 group-hover:text-blue-600 transition-colors duration-300">{item.step}</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                <h4 className="text-2xl font-black mb-8 relative z-10">Quality Standards</h4>
                <div className="space-y-8 relative z-10">
                   {[
                     "ISO 27001 Certified Security",
                     "GDPR & CCPA Compliance Ready",
                     "99.9% Uptime SLA Guarantees",
                     "Clean Code & Tech Debt Audits",
                     "24/7 Global Support Nodes"
                   ].map((std, i) => (
                     <div key={i} className="flex items-center gap-4">
                       <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                       <span className="font-bold text-slate-300">{std}</span>
                     </div>
                   ))}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HexaTrue Advantage (Replacement for Global Reach) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-400 font-black text-sm uppercase tracking-[0.3em] mb-4">Why HexaTrue</h2>
            <h3 className="text-3xl md:text-6xl font-black leading-tight">Tailored for Scale. <br />Engineered for Success.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="group p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white hover:text-slate-900 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>
                <h4 className="text-2xl font-black mb-4">{adv.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Ready to Build Your Legacy?</h2>
          <p className="text-lg text-slate-500 mb-12 font-medium">Join the ranks of the world's most innovative companies. Let's discuss your roadmap today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-12 py-5 rounded-full font-black shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            >
              Contact Our Experts
            </Link>
            <Link 
              to="/work" 
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-black hover:bg-slate-50 transition-all"
            >
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
