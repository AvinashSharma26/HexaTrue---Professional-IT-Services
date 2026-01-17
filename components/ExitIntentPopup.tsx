
import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants'; // Reusing services data for the dropdown

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
    if (!formState.requirement.trim()) newErrors.requirement = 'Requirement is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Exit-Intent Form Submitted:', formState);
      alert('Thank you for your interest! Our team will contact you shortly for a free consultation.');
      onClose(); // Close popup after successful submission
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-popup-title"
      className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-fade-in-up"
    >
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 md:p-10 lg:p-12 m-auto overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-2"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 id="exit-intent-popup-title" className="text-3xl font-black text-slate-900 mb-4 text-center">
          Get a Free <span className="text-blue-600">Consultation</span>
        </h2>
        <p className="text-slate-600 text-center mb-8 leading-relaxed max-w-sm mx-auto">
          Unlock your digital potential. Connect with our experts for a personalized strategy session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className={`w-full px-5 py-3 rounded-xl border-2 ${errors.name ? 'border-red-400' : 'border-slate-100'} focus:outline-none focus:border-blue-600 transition-colors`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-xs text-red-500 font-bold mt-1 ml-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Work Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className={`w-full px-5 py-3 rounded-xl border-2 ${errors.email ? 'border-red-400' : 'border-slate-100'} focus:outline-none focus:border-blue-600 transition-colors`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-xs text-red-500 font-bold mt-1 ml-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="company" className="sr-only">Company</label>
            <input
              type="text"
              id="company"
              placeholder="Company (Optional)"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="sr-only">Select Service</label>
            <select
              id="service"
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 focus:outline-none focus:border-blue-600 transition-colors text-slate-600 appearance-none cursor-pointer"
            >
              <option value="">Choose a service (Optional)...</option>
              {SERVICES_DATA.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other Consulting</option>
            </select>
          </div>

          <div>
            <label htmlFor="requirement" className="sr-only">Your Requirements</label>
            <textarea
              id="requirement"
              placeholder="Tell us about your requirements (e.g., project type, goals)"
              rows={4}
              value={formState.requirement}
              onChange={(e) => setFormState({ ...formState, requirement: e.target.value })}
              className={`w-full px-5 py-3 rounded-xl border-2 ${errors.requirement ? 'border-red-400' : 'border-slate-100'} focus:outline-none focus:border-blue-600 transition-colors resize-none`}
              aria-invalid={errors.requirement ? "true" : "false"}
              aria-describedby={errors.requirement ? "requirement-error" : undefined}
            ></textarea>
            {errors.requirement && <p id="requirement-error" className="text-xs text-red-500 font-bold mt-1 ml-1">{errors.requirement}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 text-slate-800 px-6 py-3 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors"
            >
              No, Thanks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;