import React from 'react';

const Services = () => {
  const services = [
    {
      title: "FULL-STACK DEVELOPMENT",
      description: "Intuitive and engaging applications tailored for your needs."
    },
    {
      title: "AI & AUTOMATION",
      description: "Smart solutions that make your workflows effortless."
    },
    {
      title: "RESPONSIVE & MODERN UI",
      description: "Pixel-perfect designs optimized for all devices."
    },
    {
      title: "DATA ANALYSIS",
      description: "Insights that drive informed business decisions."
    }
  ];

  return (
    <section className="py-12 border-y border-sand/50 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sand/50">
          {services.map((service, index) => (
            <div key={index} className="px-4 md:px-6 py-4">
              <h3 className="font-body text-xs font-semibold text-charcoal tracking-wider uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
