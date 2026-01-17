
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA, Icons } from '../constants';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS_DATA.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Project Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-end pb-24 z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-blue-400 font-black text-xs uppercase tracking-[0.2em]">
              <Link to="/work" className="hover:text-white transition-colors">OUR WORK</Link>
              <span>/</span>
              <span>{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats / Meta info */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-1">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Client</p>
              <p className="text-xl font-bold text-slate-900">{project.client}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Industry</p>
              <p className="text-xl font-bold text-slate-900">{project.category}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Services Provided</p>
              <div className="flex flex-wrap gap-2 pt-2">
                 {project.techStack.slice(0, 4).map((tech, i) => (
                   <span key={i} className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-600">{tech}</span>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: Detailed Copy */}
            <div className="lg:col-span-8 space-y-20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-blue-600 font-black text-sm uppercase tracking-widest">The Challenge</h2>
                  <h3 className="text-3xl font-black text-slate-900">Identifying the Core Obstacles</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-blue-600 font-black text-sm uppercase tracking-widest">Our Solution</h2>
                  <h3 className="text-3xl font-black text-slate-900">Engineering a Resilient Future</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>

              {/* Custom Sections from Data */}
              {project.sections.map((sec, idx) => (
                <div key={idx} className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-blue-600 font-black text-sm uppercase tracking-widest">{sec.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Results & Tech Stack */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black mb-10 relative z-10">Measurable Impact</h3>
                <div className="space-y-10 relative z-10">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="text-lg font-bold leading-snug">{res}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              </div>

              <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-8">Technical Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="px-5 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 shadow-sm hover:border-blue-300 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 rounded-[2rem] p-10 text-white shadow-xl">
                 <h3 className="text-xl font-black mb-6">Need Similar Results?</h3>
                 <p className="text-blue-100 mb-8 font-medium">Let's discuss how our expertise in {project.category} can elevate your business.</p>
                 <Link to="/contact" className="block text-center bg-white text-blue-600 py-4 rounded-xl font-black hover:bg-blue-50 transition-all">
                  Request Consultation
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/work" className="text-slate-900 font-black flex items-center gap-4 hover:text-blue-600 transition-colors group">
              <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Back to Portfolio
            </Link>
            
            <Link to="/work" className="hidden sm:block text-slate-400 font-bold hover:text-blue-600 transition-colors">
               Explore More Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
