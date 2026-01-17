
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-6">Cookie Policy</h1>
        
        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">What are Cookies?</h2>
            <p className="text-slate-600 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">How We Use Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              HexaTrue uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> We use Vercel Analytics to understand how visitors interact with our website, which helps us improve our content and user experience. These cookies collect information in an anonymous form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Managing Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Third-Party Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Some cookies may be placed by third-party services that appear on our pages. We do not control the use of these cookies by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Updates to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
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

export default CookiePolicy;