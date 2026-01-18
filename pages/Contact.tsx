import React, { useState } from 'react';
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      question: "What types of services does HexaTrue offer?",
      answer: "HexaTrue offers a comprehensive range of IT services including custom Software Development, Web Development, Mobile App Development, Cloud Solutions, Security Engineering, Quality Assurance & Testing, Digital Marketing, and DevOps & Automation. We tailor our solutions to meet specific enterprise needs."
    },
    {
      question: "What is HexaTrue's typical project process?",
      answer: "Our process begins with Discovery & Scoping, followed by Strategic Planning and Cost Estimation. Then, we move into Agile Development in sprints, rigorous Quality Engineering (QA & Testing), Seamless Launch, and finally, ongoing Growth & Scaling with maintenance and support."
    },
    {
      question: "How does HexaTrue approach project pricing?",
      answer: "Our pricing models are flexible and tailored to the project's scope, complexity, and duration. We offer various engagement models including fixed-price, time & material, and dedicated team arrangements. A detailed cost estimation is provided after the initial discovery phase."
    },
    {
      question: "What are your typical project timelines?",
      answer: "Project timelines vary significantly based on the project's complexity and scope. A small-scale web application might take a few weeks, while a large-scale enterprise software solution or cloud migration could span several months. We provide clear timeline estimates during the strategic planning phase."
    },
    {
      question: "How do you ensure the security of client data and projects?",
      answer: "Security is paramount at HexaTrue. We implement industry-standard security protocols, including ISO 27001 certified practices, end-to-end encryption, regular vulnerability assessments, and strict access controls. Our DevSecOps approach embeds security into every stage of the development lifecycle."
    },
    {
      question: "What kind of post-launch support does HexaTrue provide?",
      answer: "We offer comprehensive post-launch support, including 24/7 technical monitoring, continuous maintenance, bug fixing, performance optimization, and ongoing feature enhancements. Our goal is to ensure your solution performs optimally and evolves with your business needs."
    },
    {
      question: "How does HexaTrue handle communication and collaboration during a project?",
      answer: "We prioritize transparent and frequent communication. We use agile methodologies with regular stand-ups, sprint reviews, and dedicated project managers. Clients have direct access to their project teams and can track progress through collaborative tools, ensuring full visibility and alignment."
    }
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setErrors({});
      
      try {
        // 1. Send directly to our internal API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        });

        const result = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
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
        } else {
          setErrors({ general: result.error || 'Failed to send inquiry. Please try again.' });
        }
      } catch (err) {
        console.error("Submission error", err);
        setErrors({ general: "A network error occurred. Please check your connection." });
      } finally {
        setIsSubmitting(false);
      }
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

          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-2xl border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            {isSubmitted ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Inquiry Received</h2>
                <p className="text-lg text-slate-600 font-medium max-w-sm mb-10">
                  Thank you! Our experts will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-black text-sm uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
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

                {errors.general && <p className="text-sm text-red-500 font-bold text-center">{errors.general}</p>}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Send Inquiry'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Common Questions <span className="text-blue-600">Answered.</span>
            </h3>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaqIndex === index ? 'max-h-[300px] opacity-100 py-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed pb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;