import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <h2 className="section-title">Education</h2>
      <div className="bg-primary/10 p-6 rounded-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-secondary">SUNY PLATTSBURGH</h3>
            <p className="text-light/80">Bachelor of Science in Computer Science and Economics</p>
          </div>
          <div className="text-right">
            <p className="text-secondary">Expected May 2026</p>
            <p className="text-light/80">Plattsburgh, NY</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-light">GPA: 3.65/4.0</p>
            <p className="text-light">Dean's List (All Semesters)</p>
          </div>
          <div>
            <h4 className="text-secondary font-semibold mb-2">Relevant Coursework</h4>
            <ul className="grid grid-cols-2 gap-2 text-light/90">
              <li>Artificial Intelligence</li>
              <li>Operating Systems I</li>
              <li>Calculus</li>
              <li>Data Analysis I</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 