import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "ITS Helpdesk",
      company: "SUNY Plattsburgh",
      period: "Jan 2025 – Present",
      location: "Plattsburgh, NY",
      current: true,
      responsibilities: [
        "Assist students, faculty, and staff with IT inquiries and system access issues",
        "Provide technical support and troubleshooting for hardware, software, and network-related issues",
        "Diagnose and resolve technical problems via phone, email, and in-person support"
      ]
    },
    {
      title: "IT Technician Intern",
      company: "SUNY Plattsburgh",
      period: "Dec 2024 – Jan 2025",
      location: "Plattsburgh, NY",
      current: false,
      responsibilities: [
        "Assembled and configured computers from the ground up, including hardware installation",
        "Deployed and maintained computer systems across campus",
        "Maintained and managed college servers, assisting with system updates and security patches"
      ]
    },
    {
      title: "Senator",
      company: "Student Government",
      period: "Jan 2023 – May 2024",
      location: "Plattsburgh, NY",
      current: false,
      responsibilities: [
        "Developed and executed comprehensive public relations strategies to enhance student engagement",
        "Planned and promoted student government activities with effective communication"
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
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-olive/10 text-olive text-xs font-body font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-olive font-body text-sm">
                    @ {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="font-body text-sm text-charcoal-light">
                    {exp.period}
                  </span>
                  <span className="text-xs text-charcoal-light">
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-charcoal-light text-sm">
                    <span className="text-olive mt-1">•</span>
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
