
import React from 'react';
import { Link } from 'react-router-dom';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onReject: () => void;
  onDismiss: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onReject, onDismiss }) => {
  return (
    <div 
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent"
      className="fixed bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white z-[120] p-4 sm:p-6 lg:p-8 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left leading-relaxed flex-grow">
          We use cookies to enhance your experience, analyze site usage, and improve our services. By clicking 'Accept,' you agree to our use of cookies. For more information, please see our{' '}
          <Link to="/cookie-policy" className="text-blue-400 hover:underline font-bold" onClick={onDismiss}>Cookie Policy</Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            onClick={onAccept}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition-colors whitespace-nowrap"
            aria-label="Accept Cookies"
          >
            Accept Cookies
          </button>
          <button
            onClick={onReject}
            className="bg-white/10 text-white px-6 py-3 rounded-full text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors whitespace-nowrap"
            aria-label="Reject Cookies"
          >
            Reject Cookies
          </button>
        </div>
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Dismiss Cookie Banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
