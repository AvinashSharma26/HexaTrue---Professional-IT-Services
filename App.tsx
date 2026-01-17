
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import CaseStudies from './pages/CaseStudies';
import Industries from './pages/Industries';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import CookieConsentBanner from './components/CookieConsentBanner'; // Import the new component
import { Analytics } from '@vercel/analytics/react'; // Import Analytics here for conditional rendering

// Utility component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<'unknown' | 'accepted' | 'rejected'>('unknown');

  useEffect(() => {
    const consent = localStorage.getItem('cookies_accepted');
    const rejected = localStorage.getItem('cookies_rejected');
    const dismissed = localStorage.getItem('cookies_dismissed');

    if (consent === 'true') {
      setCookieConsent('accepted');
      setShowCookieBanner(false);
    } else if (rejected === 'true') {
      setCookieConsent('rejected');
      setShowCookieBanner(false);
    } else if (dismissed !== 'true') { // Only show if not previously dismissed
      setShowCookieBanner(true);
    }
  }, []);

  const handleSetCookieConsent = (consent: 'accepted' | 'rejected' | 'dismissed') => {
    if (consent === 'accepted') {
      localStorage.setItem('cookies_accepted', 'true');
      localStorage.removeItem('cookies_rejected');
      localStorage.removeItem('cookies_dismissed');
      setCookieConsent('accepted');
    } else if (consent === 'rejected') {
      localStorage.setItem('cookies_rejected', 'true');
      localStorage.removeItem('cookies_accepted');
      localStorage.removeItem('cookies_dismissed');
      setCookieConsent('rejected');
    } else if (consent === 'dismissed') {
      localStorage.setItem('cookies_dismissed', 'true');
    }
    setShowCookieBanner(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Fallback routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {showCookieBanner && (
          <CookieConsentBanner onAccept={() => handleSetCookieConsent('accepted')} onReject={() => handleSetCookieConsent('rejected')} onDismiss={() => handleSetCookieConsent('dismissed')} />
        )}
        {cookieConsent === 'accepted' && <Analytics />}
      </div>
    </Router>
  );
};

export default App;