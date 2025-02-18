import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", experience: "3+ years" },
        { name: "C/C++", experience: "3+ years" },
        { name: "JavaScript", experience: "1+ years" },
        { name: "Matlab", experience: "0+ years" },
        { name: "React", experience: "0+ years" }
      ]
    },
    {
      title: "Technology",
      skills: [
        "Git/Github",
        "Linux",
        "UNIX",
        "Windows",
        "Artificial Intelligence",
        "Automation"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-secondary mb-4">{category.title}</h3>
            <div className="space-y-3">
              {Array.isArray(category.skills) && category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  {typeof skill === 'object' ? (
                    <>
                      <span className="text-light">{skill.name}</span>
                      <span className="text-secondary text-sm">{skill.experience}</span>
                    </>
                  ) : (
                    <span className="text-light">{skill}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 