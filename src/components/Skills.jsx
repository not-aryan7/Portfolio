import React from 'react';

const Skills = () => {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "C/C++",
    "TensorFlow",
    "MongoDB",
    "Git/GitHub",
    "Linux",
    "AI/ML",
    "Automation",
    "Data Analysis"
  ];

  return (
    <section id="skills" className="py-12 border-y border-sand/50 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-between">
          <h3 className="font-body text-sm font-semibold text-charcoal uppercase tracking-wider">
            TRUSTED TECHNOLOGIES
          </h3>
          <p className="text-charcoal-light text-sm hidden md:block">
            Tools and frameworks I use regularly
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-3 mx-2 bg-warm-white rounded-full border border-sand/50"
            >
              <div className="w-2 h-2 bg-olive rounded-full"></div>
              <span className="font-body text-charcoal whitespace-nowrap">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
