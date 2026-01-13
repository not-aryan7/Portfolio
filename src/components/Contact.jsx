import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      label: "Email",
      value: "aryanrajbhandari77@gmail.com",
      href: "mailto:aryanrajbhandari77@gmail.com",
    },
    {
      label: "Phone",
      value: "518-335-2809",
      href: "tel:518-335-2809",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/not-aryan7",
      icon: "M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/aryan-rajbhandari",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-warm-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm text-olive uppercase tracking-wider mb-4">
          What's Next?
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-charcoal-light text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question or just want to say hi, I'll get back to you!
        </p>

        <a
          href="mailto:aryanrajbhandari77@gmail.com"
          className="btn btn-primary mb-12"
        >
          Say Hello
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Contact methods */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="text-center group"
            >
              <p className="text-xs text-charcoal-light uppercase tracking-wider mb-1">
                {method.label}
              </p>
              <p className="text-charcoal group-hover:text-olive transition-colors font-medium">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:text-olive hover:bg-olive/10 transition-all"
              aria-label={social.name}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
