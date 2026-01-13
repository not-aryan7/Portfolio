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
            {/* Logo/Name */}
            <div
              className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-charcoal rounded-full"></div>
                <span className="font-body font-semibold text-charcoal tracking-wide">ARYAN</span>
              </div>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-body text-lg text-charcoal-light mb-2">Hey, I'm Aryan,</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight">
                A SOFTWARE
                <br />
                <span className="font-accent italic font-normal text-olive">& Tech</span>
                <br />
                <span className="text-charcoal">DEVELOPER</span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`mt-8 max-w-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-charcoal-light leading-relaxed">
                Transforming ideas into powerful solutions — full-stack development and AI innovation
                that captivates, engages, and delivers results.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <a href="#contact" className="btn btn-primary group">
                CONTACT ME
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                  className="w-full h-full object-contain object-center p-8"
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
