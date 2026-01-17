
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, CLIENT_LOGOS, TESTIMONIALS, Icons } from '../constants';

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const processSteps = [
    {
      title: "Discovery & Scoping",
      sub: "STRATEGIC INSIGHT",
      desc: "We dive deep into your requirements, map accurate resources, and plan clear milestones for delivery.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      title: "Strategic Planning",
      sub: "COST ESTIMATION",
      desc: "Detailed roadmap and budget allocation to ensure project feasibility and ROI optimization.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
    },
    {
      title: "Agile Development",
      sub: "RAPID ENGINEERING",
      desc: "Our engineering pods build your solution in sprints, maintaining full transparency and frequent updates.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    {
      title: "Quality Engineering",
      sub: "QA & TESTING",
      desc: "Rigorous automated and manual testing cycles to ensure a bug-free, robust user experience.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    {
      title: "Seamless Launch",
      sub: "DEPLOYMENT",
      desc: "Strategized rollout and Go-Live support to ensure your product reaches the audience smoothly.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    },
    {
      title: "Growth & Scaling",
      sub: "MAINTENANCE",
      desc: "Post-launch optimizations, feature enhancements, and continuous 24/7 technical monitoring.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % (TESTIMONIALS.length / 2));
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [nextTestimonial, isHovered]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Innovate. <span className="text-blue-600">Transform.</span> <br />
              Scale Your Future.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              HexaTrue is a leading global IT services provider. We craft bespoke digital solutions that empower enterprises to thrive in an ever-evolving technological landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-center shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl transition-all"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-center hover:bg-slate-50 hover:border-blue-600 transition-all"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 hidden lg:block w-1/2 h-full">
           <div className="relative h-full flex items-center justify-center">
             <div className="w-[500px] h-[500px] bg-white rounded-3xl shadow-2xl rotate-6 absolute animate-pulse"></div>
             <div className="w-[450px] h-[450px] bg-slate-900 rounded-3xl shadow-2xl -rotate-3 absolute overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Digital Transformation" className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end p-8">
                 <div className="text-white">
                   <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Success Story</p>
                   <p className="text-xl font-bold">Scaling FinTech Platforms globally by 400%</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Trusted by Global Enterprises</p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 lg:gap-32 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <img 
                key={`logo-1-${idx}`} 
                src={client.url} 
                alt={client.name} 
                className="h-8 lg:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
            ))}
            {CLIENT_LOGOS.map((client, idx) => (
              <img 
                key={`logo-2-${idx}`} 
                src={client.url} 
                alt={client.name} 
                className="h-8 lg:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Comprehensive IT Solutions for Modern Businesses
              </h3>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              View All Services {Icons.ArrowRight}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service) => (
              <div key={service.id} className="group p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                       <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                       {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Read More {Icons.ArrowRight}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Process Section */}
      <section className="py-24 bg-[#ebf1f9] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">
                  Our Agile Process.
                </h2>
                <h3 className="text-2xl md:text-3xl font-black text-blue-600 mb-6">
                  Simple, Seamless, Streamlined
                </h3>
                <p className="text-slate-600 text-[13px] leading-relaxed max-w-lg mb-10 font-medium">
                  We follow a structured and agile development approach to ensure the successful delivery of every project.
                </p>
              </div>
              
              <div className="max-w-xl mx-auto lg:mx-0">
                {/* Row 1: Path 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-4 mb-4">
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">Scoping</div>
                  <div className="flex justify-center text-orange-400">
                    <svg className="w-6 h-6 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">Cost Estimation</div>
                  <div className="flex justify-center text-orange-400">
                    <svg className="w-6 h-6 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">Development</div>
                </div>

                {/* S-Curve Link Arrow (Right side) */}
                <div className="flex justify-center sm:justify-end sm:pr-10 my-2 text-orange-400">
                  <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>

                {/* Row 2: Path 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-4">
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">Maintenance</div>
                  <div className="flex justify-center text-orange-400">
                    <svg className="w-6 h-6 rotate-90 sm:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">Deployment</div>
                  <div className="flex justify-center text-orange-400">
                    <svg className="w-6 h-6 rotate-90 sm:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                  <div className="bg-[#1a1a1a] text-white py-4 px-3 rounded-xl border-2 border-dashed border-orange-400 text-xs font-bold text-center shadow-lg">QA & Testing</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center pt-24 lg:pt-0">
              <div className="absolute z-30 text-center pointer-events-none w-[200px] sm:w-[260px] bg-white/40 backdrop-blur-md p-6 rounded-full aspect-square flex flex-col items-center justify-center">
                <div className="text-[10px] sm:text-[11px] font-black text-blue-500 uppercase tracking-widest mb-1.5 animate-pulse">
                  {processSteps[activeStep].sub}
                </div>
                <div className="text-xl sm:text-2xl font-black text-slate-800 mb-2 leading-none">
                  {processSteps[activeStep].title}
                </div>
                <div className="text-[11px] sm:text-[12px] text-slate-500 leading-tight font-medium px-2">
                  {processSteps[activeStep].desc}
                </div>
              </div>
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#2563eb" strokeWidth="0.15" strokeDasharray="1 2" className="opacity-30" />
                </svg>
                {processSteps.map((step, idx) => {
                  const angle = (idx * 360) / processSteps.length;
                  const radius = 48;
                  const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                  const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));
                  return (
                    <button
                      key={idx}
                      onMouseEnter={() => setActiveStep(idx)}
                      onClick={() => setActiveStep(idx)}
                      className={`absolute w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl z-40 bg-white ${
                        activeStep === idx ? 'text-blue-600 scale-125 ring-4 ring-blue-600 border-white' : 'text-slate-400 border border-slate-100'
                      }`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {step.icon}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFINED TESTIMONIALS - Highly organized, compact cards with slanted blue footer */}
      <section className="relative py-12 md:py-24 bg-white overflow-hidden">
        {/* Slanted Bottom Gradient/Background as requested */}
        <div 
          className="absolute inset-0 z-0 bg-blue-600" 
          style={{ clipPath: 'polygon(0 80%, 100% 40%, 100% 100%, 0 100%)' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Heading Area */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl md:text-5xl lg:text-[46px] font-black text-slate-900 leading-[1.05] tracking-tight">
                What Our <br />
                <span className="text-blue-600">Amazing Clients <br />Say About Us</span>
              </h2>
              <p className="text-slate-600 text-[14px] md:text-[15px] max-w-sm leading-relaxed font-medium">
                Leading start-ups, SMEs and large-scale organizations have trusted us for their software development project requirements.
              </p>
            </div>

            {/* Carousel Area */}
            <div 
              className="lg:col-span-8 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="overflow-hidden py-4">
                <div 
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(TESTIMONIALS.length / 2) }).map((_, pageIdx) => (
                    <div key={pageIdx} className="w-full flex-shrink-0 flex gap-4 md:gap-6 px-1">
                      {TESTIMONIALS.slice(pageIdx * 2, pageIdx * 2 + 2).map((t, idx) => (
                        <div key={idx} className="w-1/2 flex-shrink-0">
                          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg h-full flex flex-col justify-between min-h-[320px] border border-slate-50 transition-all hover:shadow-2xl">
                            <div>
                              <div className="mb-6">
                                {/* Red Quote Icon as per screenshot */}
                                <svg width="34" height="26" viewBox="0 0 34 26" fill="#E53E3E" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 16.3333C0 11.2 1.44444 6.88889 4.33333 3.4C7.22222 -0.0888889 11 0.444444 11 0.444444L9.44444 5.88889C9.44444 5.88889 7.44444 6 6.33333 7.66667C5.22222 9.33333 5.33333 11.2222 5.33333 11.2222H11V26H0V16.3333ZM23 16.3333C23 11.2 24.4444 6.88889 27.3333 3.4C30.2222 -0.0888889 34 0.444444 34 0.444444L32.4444 5.88889C32.4444 5.88889 30.4444 6 29.3333 7.66667C28.2222 9.33333 28.3333 11.2222 28.3333 11.2222H34V26H23V16.3333Z" />
                                </svg>
                              </div>
                              <p className="text-slate-700 text-[13px] md:text-[14px] leading-[1.6] mb-6 font-medium italic">
                                {t.content.length > 150 ? t.content.substring(0, 150) + '...' : t.content}
                              </p>
                              <button className="text-[#E53E3E] font-black text-[11px] uppercase tracking-wider hover:underline inline-flex items-center gap-1 mb-6">
                                READ MORE
                              </button>
                            </div>
                            <div className="pt-5 border-t border-slate-50">
                              <h6 className="text-slate-900 font-bold text-[15px] leading-tight mb-0.5">
                                {t.author}
                              </h6>
                              <p className="text-slate-500 text-[12px] font-semibold">
                                {t.role}, {t.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Indicators */}
              <div className="flex justify-start lg:justify-center items-center gap-1.5 mt-8 ml-2 lg:ml-0">
                {Array.from({ length: Math.ceil(TESTIMONIALS.length / 2) }).map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentTestimonial === idx ? 'w-10 bg-white' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Build Something Extraordinary?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">Join hundreds of global enterprises that trust HexaTrue for high-performance technology solutions.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black shadow-2xl hover:bg-blue-50 transition-all">
            Start Your Journey Today
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full scale-100 animate-pulse"></div>
      </section>
    </div>
  );
};

export default Home;
