import React from 'react';

const Projects = () => {
  const processSteps = [
    {
      title: "DISCOVER & RESEARCH",
      description: "Understanding user needs, market trends, and project goals to lay a strong foundation."
    },
    {
      title: "DESIGN & PROTOTYPE",
      description: "Crafting intuitive interfaces and visual solutions with wireframes, mockups, and prototypes."
    },
    {
      title: "REFINE & DELIVER",
      description: "Testing, iterating, and finalizing designs for a seamless, polished experience."
    }
  ];

  const otherProjects = [
    {
      title: "Metascan",
      description: "VR face recognition tool that detects faces and searches for identities online with secure data handling.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
    },
    {
      title: "Car Inventory Management",
      description: "Full-stack inventory management system with responsive interface for seamless browsing.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Featured Project Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight uppercase">
              A STREAMLINED
              <br />
              PROCESS FOR
              <br />
              <span className="font-accent italic font-normal text-olive normal-case">Exceptional Design</span>
            </h2>

            <p className="mt-6 text-charcoal-light leading-relaxed max-w-lg">
              A strategic, creative process that ensures intuitive and impactful solutions.
            </p>

            <div className="mt-10 space-y-8">
              {processSteps.map((step, index) => (
                <div key={index}>
                  <h4 className="font-body font-semibold text-charcoal text-sm uppercase tracking-wider">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-charcoal-light text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CryptoDashboard Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-olive/5 rounded-3xl transform -rotate-2"></div>
            <div className="relative img-hover rounded-3xl overflow-hidden border border-sand/50 shadow-lg">
              <img
                src="/crypto-dashboard.png"
                alt="CryptoDashboard - Market Pulse"
                className="w-full h-auto"
              />
            </div>

            {/* Project label */}
            <div className="absolute -bottom-4 left-6 bg-charcoal text-cream px-4 py-2 rounded-full">
              <a
                href="https://github.com/not-aryan7/dashboardcrypto.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm"
              >
                CryptoDashboard
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="border-t border-sand/50 pt-16">
          <h3 className="font-display text-2xl font-bold text-charcoal mb-8 uppercase tracking-wide">
            Other Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>

                <h4 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-olive transition-colors">
                  {project.title}
                </h4>
                <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
