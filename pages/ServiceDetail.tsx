
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA, Icons } from '../constants';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24">
      {/* Service Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <nav className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:underline">Services</Link>
                <span>/</span>
                <span className="text-slate-400">{service.title}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                {service.shortDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all text-center"
                >
                  Start Your Project
                </Link>
                <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm">
                  Download Guide
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="w-full aspect-square bg-white rounded-[3rem] shadow-2xl flex items-center justify-center p-16 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-600 opacity-[0.03]"></div>
                 <div className="relative z-10 text-blue-600 scale-[4] group-hover:scale-[4.5] transition-transform duration-700">
                  {service.icon}
                </div>
              </div>
              {/* Decorative background blobs */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8">
              <div className="max-w-3xl">
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Service Overview</h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                  Driving Innovation through <br />
                  <span className="text-blue-600">Advanced Technical Strategy</span>
                </h3>
                <div className="prose prose-lg text-slate-600 space-y-6">
                  <p className="text-lg leading-relaxed">
                    {service.detailedOverview}
                  </p>
                  <p className="leading-relaxed">
                    Our team doesn't just deliver code; we deliver business outcomes. We understand that every project is unique, which is why we take the time to understand your specific challenges and goals. By combining industry-standard best practices with our own proprietary frameworks, we ensure that the solutions we build are ready for the demands of the future.
                  </p>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="mt-20">
                <h3 className="text-2xl font-black text-slate-900 mb-10">Key Strategic Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg hover:shadow-blue-50">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="font-bold text-slate-800 leading-snug">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Request a Consultation</h3>
                  <p className="text-slate-400 text-sm mb-8">Discuss your project requirements with our expert team and receive a complimentary technical roadmap.</p>
                  <Link 
                    to="/contact" 
                    className="block text-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    Contact Expert Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              </div>

              <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Core Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Explore Related</h3>
                <ul className="space-y-3">
                  {SERVICES_DATA.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                    <li key={s.id}>
                      <Link 
                        to={`/services/${s.id}`} 
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100 group hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        <span className="font-bold text-xs truncate max-w-[80%]">{s.title}</span>
                        {Icons.ArrowRight}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Delivery Framework</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900">How We Ensure Success</h3>
          </div>

          <div className="relative">
            {/* Desktop Process Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {service.process.map((p, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black mb-6 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                    {p.step}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{p.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <svg className="w-16 h-16 text-blue-100 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8h6v10H8V16H4V8h6zm12 0v8h6v10h-8V16h-4V8h6z" /></svg>
           <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 italic leading-relaxed mb-10">
             "HexaTrue's approach to {service.title} was exactly what we needed. They took a complex problem and engineered a solution that was simple for our users and incredibly powerful for our business."
           </blockquote>
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
             <div className="text-left">
               <div className="font-bold text-slate-900">John Doe</div>
               <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global Product Lead</div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Scale Your Business?</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">Join hundreds of global enterprises that trust HexaTrue for high-performance technology solutions.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black shadow-2xl hover:bg-blue-50 transition-all">
            Get Started with HexaTrue
          </Link>
        </div>
        {/* Animated background rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full scale-100 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full scale-110"></div>
      </section>
    </div>
  );
};

export default ServiceDetail;
