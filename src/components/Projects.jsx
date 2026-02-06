import React from 'react';

const Projects = () => {
  const features = [
    {
      title: "MARKET PULSE",
      description: "Real-time market monitoring with multi-source data aggregation, correlation matrices, and volatility analysis for instant situational awareness."
    },
    {
      title: "PORTFOLIO VAULT",
      description: "Advanced performance tracking including BTC benchmarking, Sharpe ratios, and drawdown analytics for professional-grade portfolio management."
    },
    {
      title: "ALERT STUDIO",
      description: "Automated vigilance system that triggers alerts for volatility spikes, correlation breaks, and critical drawdown thresholds."
    }
  ];

  const otherProjects = [
    {
      title: "DataPilot",
      description: "A local-first analytics engine that lets you query spreadsheets using plain English. Upload a CSV or Excel, ask a question, and get SQL + tables + charts instantly — powered by a RAG pipeline with Ollama, DuckDB, and FAISS.",
      technologies: ["FastAPI", "DuckDB", "FAISS", "Ollama", "Vite"],
      link: "https://github.com/not-aryan7/DataPilot",
      icon: (
        <svg className="w-6 h-6 text-charcoal group-hover:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Company Acquisition & Valuation Model",
      description: "A versatile financial model designed to evaluate business acquisitions across various industries. Features include automated DCF valuation, sensitivity analysis, and dynamic debt servicing schedules.",
      technologies: ["Excel", "Financial Modeling"],
      link: "https://github.com/not-aryan7",
      icon: (
        <svg className="w-6 h-6 text-charcoal group-hover:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Retirement Monte Carlo Simulator",
      description: "A Python-based stochastic simulation tool that projects portfolio survival rates by running thousands of market scenarios to account for sequence of returns risk.",
      technologies: ["Python", "NumPy", "Matplotlib"],
      link: "#",
      buttonLabel: "View Simulation",
      icon: (
        <svg className="w-6 h-6 text-charcoal group-hover:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Metascan",
      description: "VR face recognition tool that detects faces and searches for identities online with secure data handling.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      link: "#",
      icon: (
        <svg className="w-6 h-6 text-charcoal group-hover:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Car Inventory Management",
      description: "Full-stack inventory management system with responsive interface for seamless browsing.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      icon: (
        <svg className="w-6 h-6 text-charcoal group-hover:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
  ];

  return (
    <section id="projects" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Featured Project Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Content */}
          <div>
            <span className="font-body text-xs font-semibold tracking-widest text-charcoal-light uppercase mb-4 block">
              FEATURED PROJECT
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight uppercase mb-6">
              HIMALAYAN
              <br />
              <span className="font-accent italic font-normal text-olive normal-case">Crypto Desk</span>
            </h2>

            <p className="text-charcoal-light leading-relaxed max-w-lg mb-10 text-lg">
              A crypto dashboard I built that pulls live market data, tracks my portfolio, and sends me alerts when things move. Everything in one place instead of jumping between tabs.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group cursor-default">
                  <h4 className="font-body font-semibold text-charcoal text-sm uppercase tracking-wider mb-2 group-hover:text-olive transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-charcoal-light text-sm leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-olive/5 rounded-3xl transform -rotate-2"></div>
            <div className="relative img-hover rounded-3xl overflow-hidden border border-sand/50 shadow-lg">
              <img
                src="/crypto-dashboard.png"
                alt="Himalayan Crypto Desk Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Project label/button */}
            <div className="absolute -bottom-4 left-6 flex gap-3">
              <a
                href="https://dashboardcryptoterminal.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal text-cream px-6 py-3 rounded-full flex items-center gap-2 font-body text-xs font-medium tracking-widest uppercase hover:bg-olive transition-colors shadow-lg"
              >
                VIEW LIVE APP
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="border-t border-sand/50 pt-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-display text-2xl font-bold text-charcoal uppercase tracking-wide">
              Selected Works
            </h3>
            <a href="https://github.com/not-aryan7" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-medium text-charcoal hover:text-olive transition-colors">
              VIEW GITHUB
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="card group hover:!border-olive/30 transition-all duration-300 flex flex-col h-full relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-charcoal/5 group-hover:bg-olive/10 flex items-center justify-center transition-colors">
                    {project.icon}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-charcoal-light hover:text-charcoal transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>

                <h4 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-olive transition-colors">
                  {project.title}
                </h4>
                <p className="text-charcoal-light text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tag group-hover:bg-white group-hover:border-olive/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.buttonLabel && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex self-start items-center gap-2 text-xs font-semibold text-charcoal uppercase tracking-wider border-b border-charcoal/20 pb-0.5 hover:text-olive hover:border-olive transition-colors">
                      {project.buttonLabel}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  )}
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
