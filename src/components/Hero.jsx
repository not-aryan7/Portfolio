import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative bg-cream pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]">

          {/* Left Content */}
          <div className="order-2 lg:order-1 py-12">


            {/* Main Heading */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="inline-block px-3 py-1 mb-6 border border-charcoal/20 rounded-full bg-cream-dark/50 backdrop-blur-sm">
                <span className="font-body text-[10px] font-medium tracking-[0.2em] text-charcoal-light uppercase">
                  BASED IN NEW YORK
                </span>
              </div>
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-medium text-charcoal leading-[1.0] tracking-tight mb-6">
                Bridging
                <br />
                <span className="font-accent italic font-normal">Code</span> & Capital.
              </h1>
            </div>

            {/* Description */}
            <div
              className={`max-w-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="font-body text-sm md:text-base font-medium text-charcoal tracking-wide mb-3 uppercase opacity-90">
                Full Stack Developer | Financial Analyst | Economics & CS Dual Major
              </h3>
              <p className="font-body text-charcoal-light leading-relaxed text-lg">
                I build software that solves real financial problems — from trading dashboards to valuation models. CS and Econ dual major who codes and understands the numbers behind it.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-10 flex items-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <a href="#projects" className="btn btn-primary group !px-8 !py-4 !text-xs !tracking-[0.15em] uppercase">
                VIEW SELECTED WORK
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Social Links (Placeholder for matching style) */}
              <div className="flex items-center gap-3 px-4">
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/aryan-rajbhandari-a8b72b239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPxmIVBxmS16whkHMh7W%2FZg%3D%3D" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-sand hover:bg-charcoal hover:text-cream transition-colors text-charcoal">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                {/* Github Icon */}
                <a href="https://github.com/not-aryan7" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-sand hover:bg-charcoal hover:text-cream transition-colors text-charcoal">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Memoji */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute inset-0 bg-olive/10 rounded-3xl transform rotate-3"></div>

              {/* Main image container */}
              <div className="relative bg-cream-dark rounded-3xl overflow-hidden w-[300px] h-[380px] sm:w-[350px] sm:h-[440px] md:w-[400px] md:h-[500px]">
                <img
                  src="/memoji.png"
                  alt="Aryan Rajbhandari"
                  className="w-full h-full object-contain object-center scale-125 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
