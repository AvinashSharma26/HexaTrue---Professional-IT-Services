
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
              Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently, enhance user experience, and provide information to the owners of the site. They allow websites to remember your actions and preferences over a period, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">How We Use Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              HexaTrue uses different types of cookies for various purposes to improve your browsing experience and our services:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of our website. They enable core functionalities such as page navigation and access to secure areas of the website. The website cannot function properly without these cookies. They do not store any personally identifiable information.</li>
              <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have asked for, such as watching a video or commenting on a blog. The information these cookies collect may be anonymized, and they cannot track your browsing activity on other websites.</li>
              <li><strong>Analytics Cookies:</strong> We use Vercel Analytics to understand how visitors interact with our website, such as which pages are visited most often, how much time users spend on a page, and if they encounter any errors. This helps us improve the way our website works and identify areas for improvement. These cookies collect information in an anonymous form and are only used with your consent.</li>
              <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers. While HexaTrue currently does not directly use these for targeted advertising on our own site, third-party services embedded on our site (e.g., social media share buttons, embedded videos) might use them if you interact with those features. These cookies are only used with your consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Managing Your Cookie Preferences</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to decide whether to accept or reject cookies. You can manage your preferences through our cookie consent banner. Additionally, most web browsers allow you to control cookies through their settings. You can usually find these settings in the 'Options' or 'Preferences' menu of your browser.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Please note that if you choose to block or delete cookies, this may affect your experience on our website and limit your access to certain functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Third-Party Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Some content or applications on the HexaTrue website are served by third-parties, such as embedded content from social media platforms. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our website. We do not control these third parties' tracking technologies or how they may be used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">Updates to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices.
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