import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-charcoal tracking-tight">
            Professional
            <span className="font-accent italic text-olive ml-2">Credentials</span> & Community.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Column 1: Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-charcoal">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal">Certifications</h3>
            </div>

            <div className="space-y-1">

              {/* Item 1 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">FINRA Securities Industry Essentials (SIE)</h4>
                  <p className="text-charcoal-light text-sm mt-0.5">Demonstrating regulatory and capital markets knowledge.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Bloomberg Market Concepts (BMC)</h4>
                  <p className="text-charcoal-light text-sm mt-0.5">Core proficiency in financial markers and terminal usage.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Oracle Cloud Infrastructure</h4>
                  <p className="text-charcoal-light text-sm mt-0.5">Cloud computing and architecture fundamentals.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Excel Yellow Belt</h4>
                  <p className="text-charcoal-light text-sm mt-0.5">Advanced data manipulation and spreadsheet modeling.</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-1.5 h-1.5 rounded-full bg-olive animate-pulse"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Financial Modeling (In Progress)</h4>
                  <p className="text-charcoal-light text-sm mt-0.5">Advanced valuation and forecasting techniques.</p>
                  <p className="text-[10px] font-medium text-olive mt-1.5 uppercase tracking-wider">Note: Also preparing for Series 7/63 exams.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Leadership */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center text-charcoal">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal">Leadership & Societies</h3>
            </div>

            <div className="space-y-1">
              {/* Item 1 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Small Mutual Investing Fund</h4>
                  <p className="text-charcoal-light text-sm mt-0.5 font-medium italic mb-0.5">Active Analyst & Member</p>
                  <p className="text-charcoal-light text-sm">Collaborating on equity analysis and portfolio construction.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Student Government Association</h4>
                  <p className="text-charcoal-light text-sm mt-0.5 font-medium italic mb-0.5">Senator (2023-2024)</p>
                  <p className="text-charcoal-light text-sm">Led public relations strategies and student engagement initiatives.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">CEO Club</h4>
                  <p className="text-charcoal-light text-sm mt-0.5 font-medium italic mb-0.5">Member</p>
                  <p className="text-charcoal-light text-sm">Engaging in entrepreneurship and business leadership workshops.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="group flex gap-4 p-3 rounded-xl hover:bg-cream transition-colors duration-300">
                <div className="mt-2 min-w-[5px] h-[5px] rounded-full bg-olive"></div>
                <div>
                  <h4 className="font-body font-semibold text-charcoal text-base">Nepalese In Plattsburgh (NAP)</h4>
                  <p className="text-charcoal-light text-sm mt-0.5 font-medium italic mb-0.5">Active Community Member</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
