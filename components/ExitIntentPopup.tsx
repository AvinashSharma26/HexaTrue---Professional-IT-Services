
import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';

interface ExitIntentPopupProps {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    requirement: '',
    service: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.requirement.trim()) newErrors.requirement = 'Short requirement is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Exit-Intent Form Submitted:', formState);
      alert('Thank you! Our experts will contact you for your free consultation.');
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-popup-title"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-[2px] z-[150] flex items-center justify-center p-6 animate-fade-in-up"
    >
      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-md w-full p-6 md:p-8 overflow-hidden border border-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors p-1"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 id="exit-intent-popup-title" className="text-2xl font-black text-slate-900 mb-2">
            Wait! Let's <span className="text-blue-600">Talk.</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Get a free 30-minute technical roadmap session with our senior architects.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm font-medium ${errors.name ? 'border-red-400' : 'border-slate-50 bg-slate-50/50'} focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
              />
              {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Work Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm font-medium ${errors.email ? 'border-red-400' : 'border-slate-50 bg-slate-50/50'} focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
              />
              {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="sr-only">Service</label>
            <select
              id="service"
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-50 bg-slate-50/50 text-slate-600 text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Interested in...</option>
              {SERVICES_DATA.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other Solutions</option>
            </select>
          </div>

          <div>
            <label htmlFor="requirement" className="sr-only">Your Goal</label>
            <textarea
              id="requirement"
              placeholder="What's your main project goal?"
              rows={2}
              value={formState.requirement}
              onChange={(e) => setFormState({ ...formState, requirement: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border-2 text-sm font-medium resize-none ${errors.requirement ? 'border-red-400' : 'border-slate-50 bg-slate-50/50'} focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
            ></textarea>
            {errors.requirement && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1">{errors.requirement}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-black text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase tracking-widest"
            >
              Get Free Strategy
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full mt-3 text-slate-400 text-xs font-bold hover:text-slate-600 transition-colors uppercase tracking-widest"
            >
              Dismiss
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
