import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <h2 className="section-title">About Me</h2>
      <div className="bg-primary/10 p-6 rounded-lg">
        <p className="text-light/90 leading-relaxed mb-4">
          I am a Computer Science and Economics student at SUNY Plattsburgh with a passion for technology and innovation. 
          Currently maintaining a 3.65 GPA, I have consistently been on the Dean's List while actively participating in 
          various campus activities and technical projects.
        </p>
        <p className="text-light/90 leading-relaxed mb-4">
          My experience spans from IT support to software development, where I've worked on projects ranging from 
          full-stack web applications to VR face recognition tools. I'm particularly interested in artificial intelligence 
          and automation technologies.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-primary/20 px-4 py-2 rounded-lg">
            <h3 className="text-secondary font-semibold mb-1">Societies</h3>
            <ul className="text-light/80 text-sm">
              <li>Small Mutual Investing Fund Club</li>
              <li>Nepalese In Plattsburgh (NAP)</li>
              <li>CEO Club</li>
            </ul>
          </div>
          <div className="bg-primary/20 px-4 py-2 rounded-lg">
            <h3 className="text-secondary font-semibold mb-1">Certifications</h3>
            <ul className="text-light/80 text-sm">
              <li>Excel Yellow Belt</li>
              <li>Oracle Cloud Infrastructure</li>
              <li>CPR Certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 