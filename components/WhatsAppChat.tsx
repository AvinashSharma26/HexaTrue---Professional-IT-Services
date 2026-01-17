
import React, { useState, useEffect, useCallback } from 'react';

interface WhatsAppChatProps {
  phoneNumber: string;
  greetingMessage?: string;
}

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  phoneNumber,
  greetingMessage = 'Hello 👋 How can we help you today?',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Tracks if user manually closed or clicked

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(greetingMessage)}`;

  const handleOpenWhatsApp = useCallback(() => {
    window.open(whatsappLink, '_blank');
    setHasInteracted(true);
    sessionStorage.setItem('whatsapp_chat_shown_session', 'true');
    setIsOpen(false); // Close the widget after redirecting
  }, [whatsappLink]);

  const toggleChat = useCallback(() => {
    if (!isOpen) {
      setHasInteracted(true); // User manually opened
      sessionStorage.setItem('whatsapp_chat_shown_session', 'true');
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setHasInteracted(true); // User manually closed
    sessionStorage.setItem('whatsapp_chat_shown_session', 'true');
  }, []);

  // Auto-open logic once per session
  useEffect(() => {
    const sessionKey = 'whatsapp_chat_shown_session';
    const hasBeenShownInSession = sessionStorage.getItem(sessionKey);

    if (!hasBeenShownInSession && !hasInteracted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(sessionKey, 'true'); // Mark as shown in this session
      }, 7000); // Auto-open after 7 seconds

      return () => clearTimeout(timer); // Cleanup timer if component unmounts or interaction happens
    }
  }, [hasInteracted]);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat widget' : 'Open chat widget'}
        className={`fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 lg:w-16 lg:h-16 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center cursor-pointer z-[155] transition-all duration-300 transform ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } hover:scale-105 active:scale-95`}
      >
        <svg className="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
        <span className="sr-only">Open WhatsApp chat</span>
      </button>

      {/* Chat Widget */}
      <div
        role="dialog"
        aria-labelledby="whatsapp-chat-title"
        aria-describedby="whatsapp-chat-description"
        aria-hidden={!isOpen}
        className={`fixed bottom-24 right-6 lg:bottom-28 lg:right-8 w-72 md:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-[160] transition-all duration-300 ease-out transform ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <h3 id="whatsapp-chat-title" className="font-bold text-lg">HexaTrue Support</h3>
          <button
            onClick={closeChat}
            className="text-white hover:text-blue-100 p-1 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p id="whatsapp-chat-description" className="text-slate-700 text-sm mb-4 leading-relaxed">
            {greetingMessage}
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md"
            aria-label="Start chat on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.04 2.11c-5.46 0-9.89 4.43-9.89 9.89 0 1.76.5 3.47 1.45 4.97L2.05 22l5.02-1.32c1.43.78 3.04 1.21 4.97 1.21 5.46 0 9.89-4.43 9.89-9.89s-4.43-9.89-9.89-9.89zm.04 1.54c4.68 0 8.35 3.73 8.35 8.35 0 4.61-3.73 8.35-8.35 8.35-1.63 0-3.2-.44-4.57-1.2l-.32-.18-3.4 1.12 1.16-3.3c-.88-1.47-1.34-3.15-1.34-4.99 0-4.68 3.73-8.35 8.35-8.35zm-2.22 5.86c-.11-.29-.26-.35-.38-.35-.11 0-.21 0-.31.02-.19.04-.38.19-.57.38-.28.29-1.07 1.04-1.07 2.52 0 1.48 1.1 2.92 1.25 3.12.14.19 2.15 3.47 5.39 4.79 3.24 1.32 3.65 1.1 4.29 1.05.65-.05 2.15-.88 2.5-1.74.34-.87.23-1.61.16-1.74-.07-.12-.26-.18-.38-.25-.11-.07-.65-.33-.75-.38-.11-.06-.26-.1-.38-.1-.11 0-.23.04-.35.19-.19.14-.49.38-.63.44-.14.07-.26.07-.49.07-.23 0-.6-.08-.75-.23-.14-.14-.6-.44-.75-.63-.14-.19-.1-.28-.07-.35.02-.08.21-.19.33-.29.11-.11.23-.19.31-.31.08-.11.04-.19-.04-.35-.08-.14-.75-1.81-1.04-2.48-.28-.65-.57-.54-.6-.57-.02-.02-.08-.08-.14-.08z"></path>
            </svg>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppChat;
