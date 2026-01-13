import React from 'react';

const About = () => {
  const stats = [
    { value: "98%", label: "Problem Solving" },
    { value: "95%", label: "Full-Stack Dev" },
    { value: "92%", label: "AI & ML" },
    { value: "90%", label: "Data Analysis" },
  ];

  return (
    <section id="about" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight uppercase">
              CRAFTING INTUITIVE
              <br />
              <span className="font-accent italic font-normal text-olive normal-case">& Impactful</span>
              <br />
              SOLUTIONS
            </h2>

            <p className="mt-8 text-charcoal-light leading-relaxed max-w-lg">
              I blend creativity and strategy to design intuitive interfaces and
              compelling tech solutions. From full-stack development to AI innovation,
              my skills ensure seamless and engaging experiences.
            </p>

            <a href="#contact" className="btn btn-primary mt-8 group">
              CONTACT ME
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-sand pl-6 py-2">
                  <p className="font-display text-5xl md:text-6xl font-bold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-charcoal-light mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="font-body font-semibold text-charcoal text-sm uppercase tracking-wider mb-3">
                  Organizations
                </h4>
                <ul className="space-y-2 text-charcoal-light text-sm">
                  <li>• Small Mutual Investing Fund</li>
                  <li>• Nepalese In Plattsburgh</li>
                  <li>• CEO Club</li>
                </ul>
              </div>
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="font-body font-semibold text-charcoal text-sm uppercase tracking-wider mb-3">
                  Certifications
                </h4>
                <ul className="space-y-2 text-charcoal-light text-sm">
                  <li>• Excel Yellow Belt</li>
                  <li>• Oracle Cloud Infrastructure</li>
                  <li>• CPR Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
