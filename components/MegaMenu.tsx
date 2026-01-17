
import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuColumn } from '../types';

interface MegaMenuProps {
  columns: MegaMenuColumn[];
  isOpen: boolean;
  onClose: () => void;
  isCompanyMenu?: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ columns, isOpen, onClose, isCompanyMenu }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-2xl z-50 py-12 mega-menu-gradient"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Content Columns */}
          <div className={`grid ${isCompanyMenu ? 'md:col-span-7 grid-cols-2' : 'md:col-span-8 grid-cols-1 lg:grid-cols-3'} gap-12`}>
            {columns.map((col, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest pb-1 border-b-2 border-transparent group-hover:border-blue-600">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link 
                        to={item.path} 
                        className="group flex items-start gap-4 p-2 -m-2 rounded-lg hover:bg-slate-50 transition-all duration-200"
                        onClick={onClose}
                      >
                        {item.icon && (
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="text-[15px] font-medium text-slate-700 group-hover:text-blue-600">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Stats Card (Right Side) */}
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            {isCompanyMenu ? (
              <div className="bg-[#1a365d] rounded-2xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-8 leading-tight">Imagination Meets,<br />Implementation</h4>
                  
                  <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                    <div>
                      <div className="text-3xl font-black">9+</div>
                      <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold mt-1">Years in Business</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">1600+</div>
                      <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold mt-1">Projects Delivered</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">600+</div>
                      <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold mt-1">Client Relationships</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black">20+</div>
                      <div className="text-[11px] uppercase tracking-wider text-blue-200 font-bold mt-1">Countries Served</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            ) : (
              <div className="bg-blue-900 rounded-2xl p-8 text-white relative overflow-hidden h-full flex flex-col justify-center">
                 <div className="relative z-10">
                   <h4 className="text-xl font-bold mb-4">Ready for Digital Transformation?</h4>
                   <p className="text-blue-100 text-sm mb-8">Discuss your project with our technology experts and get a customized roadmap.</p>
                   <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-full font-black text-sm hover:bg-blue-50 transition-colors shadow-lg"
                   >
                     Get Started
                   </Link>
                 </div>
                 <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                 <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
