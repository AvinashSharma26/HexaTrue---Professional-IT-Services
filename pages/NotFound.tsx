
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen flex items-center bg-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
        <div className="space-y-8">
          {/* Error Code */}
          <div className="relative inline-block">
            <h1 className="text-[150px] md:text-[220px] font-black text-slate-900 leading-none opacity-5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center text-white shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Lost in <span className="text-blue-600">Cyberspace?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's find a better path for you.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              to="/" 
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-black shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            >
              Return to Homepage
            </Link>
            <Link 
              to="/services" 
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-black hover:bg-slate-50 transition-all"
            >
              Browse Services
            </Link>
          </div>

          {/* Helpful Links Grid */}
          <div className="mt-24 pt-12 border-t border-slate-100 max-w-4xl mx-auto">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Popular Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Software Dev', path: '/services/software-dev' },
                { label: 'Cloud Solutions', path: '/services/cloud' },
                { label: 'Recent Blog', path: '/blog' },
                { label: 'Our Work', path: '/work' }
              ].map((link, i) => (
                <Link 
                  key={i} 
                  to={link.path} 
                  className="p-4 rounded-2xl border border-slate-50 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600 transition-all font-bold text-sm text-slate-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mb-32 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full -ml-24 -mt-24 blur-3xl"></div>
    </div>
  );
};

export default NotFound;
