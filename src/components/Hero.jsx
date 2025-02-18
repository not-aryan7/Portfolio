import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-4">
          Aryan Rajbhandari
        </h1>
        <h2 className="text-2xl md:text-3xl text-light mb-8">
          Computer Science & Economics Student
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-secondary hover:bg-primary text-light px-6 py-3 rounded-lg transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-secondary text-secondary hover:bg-secondary hover:text-light px-6 py-3 rounded-lg transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 