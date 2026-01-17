
import React, { useState, useEffect, useCallback } from 'react';
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
import CookieConsentBanner from './components/CookieConsentBanner';
import ExitIntentPopup from './components/ExitIntentPopup';
import WhatsAppChat from './components/WhatsAppChat'; // NEW IMPORT
import { Analytics } from '@vercel/analytics/react';

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
  const [showExitIntentPopup, setShowExitIntentPopup] = useState(false);

  // Cookie Consent Logic
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

  // Exit Intent Popup Logic
  useEffect(() => {
    const exitIntentShown = sessionStorage.getItem('exit_intent_shown');
    if (exitIntentShown === 'true') {
      return; // Already shown in this session
    }

    const handleExitIntent = (e: MouseEvent) => {
      // Desktop: mouse leaves viewport from top
      // Trigger if mouse is near top (e.g., top 20 pixels) and popup not already visible
      if (e.clientY < 20 && window.innerWidth > 768 && !showExitIntentPopup) { // Add width check for desktop
        setShowExitIntentPopup(true);
        sessionStorage.setItem('exit_intent_shown', 'true');
        document.removeEventListener('mouseleave', handleExitIntent); // Remove listener after trigger
      }
    };

    // Mobile: scroll up fast after scrolling down
    let lastScrollY = window.scrollY;
    let scrollDownThreshold = window.innerHeight * 0.75; // User must scroll down 75% of viewport height
    let scrollUpSpeedThreshold = 100; // Pixels scrolled up per scroll event to trigger (heuristic)
    let scrolledDownSignificantly = false;

    const handleScroll = () => {
      if (window.innerWidth <= 768) { // Only for mobile
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollDownThreshold) {
          scrolledDownSignificantly = true;
        }

        if (scrolledDownSignificantly && currentScrollY < lastScrollY - scrollUpSpeedThreshold && !showExitIntentPopup) {
          setShowExitIntentPopup(true);
          sessionStorage.setItem('exit_intent_shown', 'true');
          window.removeEventListener('scroll', handleScroll); // Remove listener after trigger
        }
        lastScrollY = currentScrollY;
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showExitIntentPopup]); // Re-run if popup state changes, though sessionStorage should prevent re-showing

  const closeExitIntentPopup = useCallback(() => {
    setShowExitIntentPopup(false);
  }, []);

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
        {showExitIntentPopup && <ExitIntentPopup onClose={closeExitIntentPopup} />}
        {/* WhatsApp Chat Component */}
        <WhatsAppChat phoneNumber="7974279350" greetingMessage="Hello 👋 How can we help you today?" />
      </div>
    </Router>
  );
};

export default App;