import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = BLOG_POSTS.find(p => p.id === blogId);

  const [sidebarForm, setSidebarForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarForm.name || !sidebarForm.email || !sidebarForm.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Execute reCAPTCHA v3
      // @ts-ignore
      const token = await new Promise<string>((resolve) => {
        // @ts-ignore
        window.grecaptcha.ready(() => {
          // @ts-ignore
          window.grecaptcha.execute('6LfVX04sAAAAAIrOgG0SXVhWQPhiAiudvTpqkUoY', {action: 'sidebar_submit'}).then(resolve);
        });
      });

      console.log("Sidebar reCAPTCHA token:", token);
      alert("Thank you! Your strategy session request has been received. (Protected by reCAPTCHA)");
      setSidebarForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("Captcha error", err);
      alert("Error verifying submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('###')) {
        return <h4 key={i} className="text-xl font-black text-slate-900 mt-8 mb-4">{trimmedLine.replace('###', '')}</h4>;
      }
      if (trimmedLine.startsWith('##')) {
        return <h3 key={i} className="text-2xl font-black text-slate-900 mt-10 mb-6">{trimmedLine.replace('##', '')}</h3>;
      }
      if (trimmedLine.startsWith('- ')) {
        return <li key={i} className="ml-6 list-disc text-slate-600 font-medium mb-2">{trimmedLine.replace('- ', '')}</li>;
      }
      if (trimmedLine.match(/^\d+\./)) {
        return <li key={i} className="ml-6 list-decimal text-slate-600 font-medium mb-2">{trimmedLine}</li>;
      }
      if (trimmedLine === '') return <br key={i} />;
      return <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium mb-4">{trimmedLine}</p>;
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/blog" className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              Back to Blog
            </Link>
            <span className="text-slate-300">•</span>
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{post.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-sm">
                <p className="font-black text-slate-900">{post.author}</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Author</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="text-sm">
              <p className="font-black text-slate-900">{post.date}</p>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Published</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover rounded-[2rem] shadow-2xl border-4 border-white mb-16" />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8">
              <article className="prose prose-blue prose-lg max-w-none">
                {renderContent(post.content)}
              </article>
              
              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Share this Insight:</span>
                  <div className="flex gap-2">
                    {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                      <button key={s} className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center">
                        <span className="sr-only">{s}</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      </button>
                    ))}
                  </div>
                </div>
                <Link to="/blog" className="text-blue-600 font-black text-sm uppercase tracking-widest hover:translate-x-2 transition-transform">
                  Browse More Articles →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-4 relative z-10">Strategy Session</h3>
                  <p className="text-slate-400 text-sm mb-8 relative z-10">Intrigued by this insight? Let's discuss how it applies to your specific enterprise roadmap.</p>
                  
                  <form onSubmit={handleSidebarSubmit} className="space-y-4 relative z-10">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={sidebarForm.name}
                      onChange={(e) => setSidebarForm({...sidebarForm, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" 
                    />
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      value={sidebarForm.email}
                      onChange={(e) => setSidebarForm({...sidebarForm, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400" 
                    />
                    <textarea 
                      placeholder="How can we help?" 
                      rows={3}
                      value={sidebarForm.message}
                      onChange={(e) => setSidebarForm({...sidebarForm, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none" 
                    ></textarea>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-sm hover:bg-blue-700 transition-all shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Book a Consultation'}
                    </button>
                    <p className="text-[10px] text-slate-500 text-center mt-2 uppercase tracking-widest">Protected by reCAPTCHA</p>
                  </form>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">Recent Insights</h3>
                  <div className="space-y-6">
                    {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(r => (
                      <Link key={r.id} to={`/blog/${r.id}`} className="group flex items-start gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{r.category}</p>
                          <h4 className="text-sm font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{r.title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 relative overflow-hidden text-center text-white">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Engineering Tomorrow, <br />Available Today.</h2>
          <p className="text-blue-100 text-lg mb-12 font-medium">Connect with HexaTrue to turn technical insights into business impact.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-black shadow-2xl hover:bg-blue-50 transition-all">
            Start a Conversation
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};

export default BlogDetail;