import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "IT TECHNICIAN INTERN",
      company: "SUNY PLATTSBURGH",
      period: "Dec 2025 – Jan 2025",
      location: "Plattsburgh, NY",
      responsibilities: [
        "Assembled and configured computers from the ground up, including hardware installation and system setup",
        "Deployed and maintained computer systems across campus, ensuring optimal performance",
        "Maintained and managed college servers, assisting with system updates and security patches"
      ]
    },
    {
      title: "ITS HELPDESK",
      company: "SUNY PLATTSBURGH",
      period: "Jan 2025 – Present",
      location: "Plattsburgh, NY",
      responsibilities: [
        "Assisted students, faculty, and staff with IT inquiries and system access issues",
        "Provided technical support and troubleshooting for hardware, software, and network-related issues",
        "Diagnosed and resolved technical problems via phone, email, and in-person support"
      ]
    },
    {
      title: "SENATOR",
      company: "STUDENT GOVERNMENT",
      period: "Jan 2023 – May 2024",
      location: "Plattsburgh, NY",
      responsibilities: [
        "Developed and executed comprehensive public relations strategies to enhance student engagement and awareness",
        "Planned and promoted student government activities, ensuring effective communication with the student body"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                <p className="text-light/80">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-secondary">{exp.period}</p>
                <p className="text-light/80">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-light/90 space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 