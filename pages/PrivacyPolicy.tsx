
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-6">Privacy Policy</h1>
        
        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At HexaTrue ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and protect your information when you visit our website (hexatrue.com) and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect personal information that you provide directly to us, such as your name, email address, and any other information you choose to provide when you fill out a contact form or communicate with us.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and details about your website usage via Vercel Analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>To provide and maintain our services.</li>
              <li>To respond to your inquiries and support requests.</li>
              <li>To improve our website performance and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <strong>Projects@hexatrue.com</strong>.
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8">
            Last Updated: 2024-07-29
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;