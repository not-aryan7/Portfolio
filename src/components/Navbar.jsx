import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="w-3 h-3 bg-charcoal rounded-full"></div>
            <span className="font-body font-bold text-xs md:text-sm text-charcoal tracking-[0.2em] uppercase">ARYAN RAJBHANDARI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#about" className="font-body text-xs text-charcoal-light hover:text-charcoal transition-colors tracking-widest uppercase">ABOUT</a>
            <a href="#experience" className="font-body text-xs text-charcoal-light hover:text-charcoal transition-colors tracking-widest uppercase">TIMELINE</a>
            <a href="#projects" className="font-body text-xs text-charcoal-light hover:text-charcoal transition-colors tracking-widest uppercase">WORK</a>
            <a href="#contact" className="font-body text-xs text-charcoal-light hover:text-charcoal transition-colors tracking-widest uppercase">CONTACT</a>
          </div>

          {/* Menu Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-2.5 bg-charcoal text-cream rounded-full font-body text-xs tracking-wider transition-all hover:bg-olive"
            >
              Let's Talk
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-full h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}
              />
              <span
                className={`absolute left-0 top-2 w-full h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-charcoal transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-cream/98 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-3xl text-charcoal hover:text-olive transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
