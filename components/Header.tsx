
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Fix: Added NAVIGATION to the import from constants
import { NAVIGATION, Icons } from '../constants';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on navigation
  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      {/* Top Bar - Hidden on small screens and when scrolled */}
      <div className={`border-b border-slate-50 text-slate-500 py-2 hidden lg:block transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-12 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
          <div className="flex gap-8">
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-default">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Projects@hexatrue.com
            </span>
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-default">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 (800) HEXA-TRUE
            </span>
          </div>
          <div className="flex gap-6">
            <Link to="/technologies" className="hover:text-blue-600 transition-colors">Technologies</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">Careers</Link>
            <Link to="/work" className="text-blue-600 hover:text-blue-800 transition-colors">Case Studies</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className="bg-white relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Branding */}
            <Link to="/" className="flex items-center gap-2.5 group relative z-[110]">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-xl shadow-blue-200 group-hover:rotate-12 transition-transform duration-300">H</div>
              <span className="text-2xl font-black text-slate-900 tracking-tight">Hexa<span className="text-blue-600">True</span></span>
            </Link>

            {/* Desktop Menu Items */}
            <div className="hidden lg:flex items-center h-full space-x-2">
              {NAVIGATION.map((item) => (
                <div 
                  key={item.id} 
                  className="h-full flex items-center"
                  onMouseEnter={() => item.columns ? setActiveMenu(item.id) : setActiveMenu(null)}
                >
                  <Link 
                    to={item.path}
                    className={`relative flex items-center h-full px-5 text-[14px] font-bold transition-colors duration-300 ${
                      activeMenu === item.id || location.pathname === item.path 
                        ? 'text-blue-600' 
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    {item.columns && (
                      <svg className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${activeMenu === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    )}
                    <span className={`absolute bottom-0 left-5 right-5 h-[3px] bg-blue-600 rounded-t-full transition-transform duration-300 origin-left ${
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

            {/* Actions & Responsive Toggle */}
            <div className="flex items-center gap-4 relative z-[110]">
               <Link 
                to="/contact" 
                className="hidden sm:inline-flex bg-blue-600 text-white px-8 py-3.5 rounded-full text-[13px] font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase tracking-widest"
               >
                Get a Quote
               </Link>
               
               {/* Mobile Toggle Button */}
               <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-slate-900 focus:outline-none"
                  aria-label="Toggle Navigation"
               >
                 <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                 <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                 <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
               </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-500 lg:hidden z-[90] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div 
        className={`fixed top-0 right-0 w-[85%] max-w-[420px] h-full bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden z-[100] transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Branding in Drawer */}
          <div className="p-7 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black">H</div>
              <span className="text-xl font-black text-slate-900 tracking-tight">HexaTrue</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Nav Scrollable Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
            {NAVIGATION.map((item) => (
              <div key={item.id} className="border-b border-slate-50 last:border-none">
                <div className="flex items-center justify-between">
                  <Link 
                    to={item.columns ? '#' : item.path}
                    onClick={(e) => {
                      if (item.columns) {
                        e.preventDefault();
                        setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`flex-1 py-5 text-base font-bold transition-colors ${
                      location.pathname === item.path ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button 
                      onClick={() => setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id)}
                      className={`p-5 transition-all duration-300 ${expandedMobileItem === item.id ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.columns && (
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    expandedMobileItem === item.id ? 'max-h-[1200px] opacity-100 py-2' : 'max-h-0 opacity-0'
                  }`}>
                    {item.columns.map((col, cIdx) => (
                      <div key={cIdx} className="mb-7 last:mb-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 pl-4 border-l-2 border-blue-100">{col.title}</p>
                        <div className="space-y-1.5">
                          {col.items.map((subItem, sIdx) => (
                            <Link 
                              key={sIdx} 
                              to={subItem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl hover:bg-slate-50 group transition-all"
                            >
                              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0 shadow-sm">
                                {subItem.icon || <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>}
                              </div>
                              <div className="flex-1">
                                <p className="text-[14px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors leading-tight">{subItem.title}</p>
                                {subItem.description && (
                                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{subItem.description}</p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-8 border-t border-slate-100 bg-slate-50/50">
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-blue-600 text-white text-center py-4.5 rounded-2xl font-black shadow-xl shadow-blue-100 mb-8 transition-transform active:scale-95 uppercase tracking-widest text-sm"
            >
              Request a Quote
            </Link>
            <div className="space-y-4">
               <div className="flex items-center gap-3.5 text-xs font-bold text-slate-600">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  Projects@hexatrue.com
               </div>
               <div className="flex items-center gap-3.5 text-xs font-bold text-slate-600">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  +1 (800) HEXA-TRUE
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;