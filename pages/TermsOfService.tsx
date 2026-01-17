import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-6">Terms of Service</h1>
        
        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the HexaTrue website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              HexaTrue provides IT consulting, software development, cloud infrastructure, and digital transformation services. The specific scope of services for any engagement will be defined in a separate Master Services Agreement (MSA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website, including text, graphics, logos, and code, is the property of HexaTrue and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, HexaTrue shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <p className="text-sm text-slate-400 pt-8">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;