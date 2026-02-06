import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Intern",
      company: "Clinton County",
      period: "Spring 2026 (Current)",
      location: "Plattsburgh, NY",
      current: true,
      responsibilities: [
        "Supporting users across multiple government departments with technical troubleshooting and system access.",
        "Assisting in network administration, system maintenance, and cybersecurity threat monitoring.",
        "Writing up IT docs and user guides so people can actually follow along."
      ]
    },
    {
      title: "Microfinance Analyst (Intern)",
      company: "Maitri Multipurpose Cooperative Ltd",
      period: "May 2025 – Aug 2025",
      location: "Kathmandu, Nepal",
      current: false,
      responsibilities: [
        "Analyzed client financial data and repayment capacity to support credit risk evaluation and loan approvals.",
        "Automated monthly portfolio reports using Excel, significantly improving data accuracy and tracking speed."
      ]
    },
    {
      title: "Technical Support Specialist",
      company: "SUNY Plattsburgh | ITS Helpdesk",
      period: "Jan 2025 – Present",
      location: "Plattsburgh, NY",
      current: true,
      responsibilities: [
        "Providing diagnostic support for hardware, software, and network issues for students and faculty.",
        "Resolved technical inquiries via phone and in-person, maintaining high service standards."
      ]
    },
    {
      title: "Senator",
      company: "Student Government Association",
      period: "Jan 2023 – May 2024",
      location: "Plattsburgh, NY",
      current: false,
      responsibilities: [
        "Ran PR efforts and worked on getting more students engaged with campus events."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-12 uppercase tracking-tight">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card group hover:border-olive/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal group-hover:text-olive transition-colors">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-olive/10 text-olive text-xs font-body font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-charcoal font-body text-sm font-medium">
                    @ {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="font-body text-sm text-charcoal-light font-medium">
                    {exp.period}
                  </span>
                  <span className="text-xs text-charcoal-light">
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-charcoal-light text-sm">
                    <span className="text-olive mt-1.5 min-w-[6px] h-[6px] rounded-full bg-olive/60"></span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
