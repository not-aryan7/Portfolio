import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <h2 className="section-title">Contact</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-primary/10 p-6 rounded-lg space-y-6">
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:aryanrajbhandari77@gmail.com" className="text-light hover:text-secondary">
              aryanrajbhandari77@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:518-335-2809" className="text-light hover:text-secondary">
              518-335-2809
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <div className="space-x-4">
              <a 
                href="https://github.com/not-aryan7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light hover:text-secondary"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/aryan-rajbhandari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light hover:text-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 