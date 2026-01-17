
import React, { useState } from 'react';
// Fix: Added SERVICES_DATA to the import from constants
import { SERVICES_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formState.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Project description is required';
    if (!formState.phone.trim()) newErrors.phone = 'Contact number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate notification sent to Projects@hexatrue.com
      console.log("Form submission notification sent to Projects@hexatrue.com", formState);
      alert(`Thank you ${formState.firstName}! Your inquiry for ${formState.service || 'our services'} has been received at Projects@hexatrue.com. Our team will contact you shortly.`);
      
      // Reset form
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Let's Talk <span className="text-blue-600">Tech.</span></h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Have a vision? We have the expertise to build it. Fill out the form below and start your journey towards digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Global Headquarters</h3>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">California Office</p>
                     <p className="text-slate-500">123 Tech Avenue, Innovation Park, Suite 400, Silicon Valley, CA</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">Email Us</p>
                     <p className="text-slate-500">Projects@hexatrue.com</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                   <div>
                     <p className="font-bold text-slate-900">Call Us</p>
                     <p className="text-slate-500">+1 (800) HEXA-TRUE</p>
                   </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Follow Our Journey</h3>
              <div className="flex flex-wrap gap-4">
                 {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((social) => (
                   <a key={social} href="#" className="bg-slate-50 px-6 py-3 rounded-full font-bold text-sm text-slate-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                     {social}
                   </a>
                 ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 grayscale hover:grayscale-0 transition-all duration-700">
               <img src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=2070&auto=format&fit=crop" alt="San Francisco Skyline" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">First Name *</label>
                  <input 
                    type="text" 
                    value={formState.firstName}
                    className={`w-full border-b-2 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent ${errors.firstName ? 'border-red-400' : 'border-slate-100'}`}
                    placeholder="John"
                    onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                  />
                  {errors.firstName && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.firstName}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Last Name *</label>
                  <input 
                    type="text" 
                    value={formState.lastName}
                    className={`w-full border-b-2 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent ${errors.lastName ? 'border-red-400' : 'border-slate-100'}`}
                    placeholder="Doe"
                    onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                  />
                  {errors.lastName && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Work Email *</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    className={`w-full border-b-2 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent ${errors.email ? 'border-red-400' : 'border-slate-100'}`}
                    placeholder="john@company.com"
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Contact Number *</label>
                  <input 
                    type="tel" 
                    value={formState.phone}
                    className={`w-full border-b-2 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent ${errors.phone ? 'border-red-400' : 'border-slate-100'}`}
                    placeholder="+1 (555) 000-0000"
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Country</label>
                  <input 
                    type="text" 
                    value={formState.country}
                    className="w-full border-b-2 border-slate-100 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                    placeholder="United States"
                    onChange={(e) => setFormState({...formState, country: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Company Name</label>
                  <input 
                    type="text" 
                    value={formState.company}
                    className="w-full border-b-2 border-slate-100 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                    placeholder="Acme Corp"
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Select Services You Need</label>
                <select 
                  value={formState.service}
                  className="w-full border-b-2 border-slate-100 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-slate-600 appearance-none cursor-pointer"
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                >
                  <option value="">Choose a service...</option>
                  {SERVICES_DATA.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Other">Other Consulting</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Describe Your Project Briefly *</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  className={`w-full border-b-2 py-2.5 focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none ${errors.message ? 'border-red-400' : 'border-slate-100'}`}
                  placeholder="Tell us about your project requirements, goals and timeline..."
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
                {errors.message && <p className="text-[10px] text-red-500 font-bold mt-1">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-4 font-bold uppercase tracking-widest">
                  Protected by Enterprise SSL Encryption
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;