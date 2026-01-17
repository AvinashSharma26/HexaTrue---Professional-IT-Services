
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle closing menu when clicking outside or navigating
  useEffect(() => {
    setActiveMenu(null);
  }, [location]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-0' : 'bg-white py-0'}`}
    >
      {/* Top Bar - Only visible when not scrolled */}
      <div className={`border-b border-slate-50 text-slate-500 py-2 hidden md:block transition-all ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Projects@hexatrue.com
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 (800) HEXA-TRUE
            </span>
          </div>
          <div className="flex gap-4">
            <Link to="/technologies" className="hover:text-blue-600">Technologies</Link>
            <Link to="/about" className="hover:text-blue-600">Careers</Link>
            <Link to="/work" className="hover:text-blue-600 font-bold text-blue-600 uppercase">Case Studies</Link>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div 
        className="bg-white border-b border-slate-100"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 relative">
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">H</div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">Hexa<span className="text-blue-600">True</span></span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center h-full ml-8">
            {NAVIGATION.map((item) => (
              <div 
                key={item.id} 
                className="h-full flex items-center px-1"
                onMouseEnter={() => item.columns ? setActiveMenu(item.id) : setActiveMenu(null)}
              >
                <Link 
                  to={item.id === 'work' ? '/work' : item.path}
                  className={`relative flex items-center h-full px-4 text-[15px] font-bold transition-all duration-200 ${
                    activeMenu === item.id || location.pathname === item.path 
                      ? 'text-blue-600' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.columns && (
                       <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </span>
                  <div className={`absolute bottom-0 left-4 right-4 h-1 bg-blue-600 transition-all duration-200 origin-left ${
                    activeMenu === item.id || (location.pathname === item.path && !activeMenu) ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </Link>
                
                {item.columns && (
                  <MegaMenu 
                    columns={item.columns} 
                    isOpen={activeMenu === item.id} 
                    onClose={() => setActiveMenu(null)}
                    isCompanyMenu={item.id === 'company'}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
             <Link 
              to="/contact" 
              className="hidden md:block bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
             >
              GET A QUOTE
             </Link>
             <button className="lg:hidden p-2 text-slate-800">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
             </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
