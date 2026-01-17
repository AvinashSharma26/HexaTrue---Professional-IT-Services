

import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added missing imports for SERVICES_DATA and Icons from constants
import { SERVICES_DATA, Icons } from '../constants';

const Services: React.FC = () => {
  // Categorize services based on the mega-menu structure
  const categories = [
    {
      title: 'Core Development',
      ids: ['software-dev', 'web-dev', 'mobile-dev'],
      description: 'Building the digital backbone of your enterprise with cutting-edge engineering.'
    },
    {
      title: 'Cloud & Infrastructure',
      ids: ['cloud', 'devops', 'it-services'],
      description: 'Scalable, resilient, and automated environments for modern applications.'
    },
    {
      title: 'Quality & Security',
      ids: ['security', 'testing', 'marketing'],
      description: 'Ensuring your digital products are bulletproof and reach the right audience.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            From custom software engineering to complex cloud migrations, we provide the technical expertise to transform your business at scale.
          </p>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>
      </section>

      {/* Services Listing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
                  <div className="max-w-2xl">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                      {category.title}
                    </h2>
                    <p className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SERVICES_DATA.filter(s => category.ids.includes(s.id)).map((service) => (
                    <div key={service.id} className="group p-10 bg-white rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300 flex flex-col h-full">
                      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
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
                      <Link 
                        to={`/services/${service.id}`} 
                        className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all"
                      >
                        Learn More {/* Fix: Use Icons.ArrowRight */}
                        {Icons.ArrowRight}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Need a Bespoke Solution?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Our technology consultants are ready to help you navigate your digital transformation journey. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-12 py-5 rounded-full font-black shadow-xl shadow-blue-900/50 hover:bg-blue-700 transition-all"
            >
              Consult an Expert
            </Link>
            <button className="bg-transparent text-white border border-slate-700 px-12 py-5 rounded-full font-black hover:bg-slate-800 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="absolute top-10 right-10 w-64 h-64 text-blue-500" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Services;