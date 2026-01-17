

import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added BLOG_POSTS to the import from constants
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="bg-slate-50 py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8">
            Technical <span className="text-blue-600">Insights.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl">
            Explore our library of expert articles on software engineering, digital strategy, and the future of enterprise technology spanning 2025 and 2026.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {BLOG_POSTS.map((post, i) => (
              <div key={post.id} className="group cursor-pointer">
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[16/9] bg-slate-100 rounded-3xl mb-8 overflow-hidden relative shadow-lg">
                    <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10">
                      {post.category}
                    </div>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </Link>
                <div className="space-y-4">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{post.date}</p>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Read Article 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;