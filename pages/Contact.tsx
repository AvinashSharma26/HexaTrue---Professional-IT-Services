
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! Our team will contact you shortly.");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Let's Talk <span className="text-blue-600">Tech.</span></h1>
          <p className="text-lg text-slate-600">Have a vision? We have the expertise to build it. Reach out today for a free consultation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Global Headquarters</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">California Office</p>
                     <p className="text-slate-500">123 Tech Avenue, Innovation Park, Suite 400, Silicon Valley, CA</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">Email Us</p>
                     <p className="text-slate-500">hello@hexatrue.com</p>
                   </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Follow Our Journey</h3>
              <div className="flex gap-4">
                 {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((social) => (
                   <a key={social} href="#" className="bg-slate-50 px-6 py-3 rounded-full font-bold text-sm text-slate-700 hover:bg-blue-600 hover:text-white transition-all">
                     {social}
                   </a>
                 ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-64 grayscale hover:grayscale-0 transition-all">
               <img src="https://picsum.photos/800/600?map" alt="Location" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 lg:p-16 rounded-[40px] shadow-2xl border border-slate-50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="John Doe"
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Work Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="john@company.com"
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Project Details</label>
                <textarea 
                  rows={6}
                  required
                  className="w-full border-b-2 border-slate-100 py-3 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
