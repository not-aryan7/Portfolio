import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Car Inventory Management",
      description: [
        "Developed a full-stack car inventory management website with front-end and back-end integration",
        "Designed and implemented a responsive user interface for seamless browsing and inventory management"
      ],
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Metascan",
      description: [
        "Developed Metascan, a VR face recognition tool that detects faces, captures images, and searches for identities online",
        "Developed web scraping and API integration features to scan the internet for identity matching",
        "Implemented secure data handling and privacy measures to ensure responsible use of face recognition technology"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow"]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-primary/10 p-6 rounded-lg hover:bg-primary/20 transition duration-300">
            <h3 className="text-xl font-bold text-secondary mb-4">{project.title}</h3>
            <ul className="list-disc list-inside text-light/90 space-y-2 mb-4">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 