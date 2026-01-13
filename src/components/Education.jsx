import React from 'react';

const Education = () => {
  const coursework = [
    "Artificial Intelligence",
    "Operating Systems",
    "Software Engineering",
    "Data Analysis",
    "Calculus",
  ];

  return (
    <section id="education" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight uppercase">
              MASTERING THE LOGIC
              <br />
              OF <span className="font-accent italic font-normal text-olive normal-case">Algorithms &</span> MARKET
              <br />
              DYNAMICS
            </h2>
          </div>

          {/* Right - Education Card */}
          <div className="card">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-olive/10 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal">
                  SUNY Plattsburgh
                </h3>
                <p className="text-olive font-body text-sm mt-1">
                  B.S. in Computer Science & Economics
                </p>
                <p className="text-charcoal-light text-sm mt-1">
                  Expected May 2026 • Plattsburgh, NY
                </p>
              </div>
            </div>

            <div className="flex gap-6 mb-8">
              <div className="bg-cream rounded-xl px-5 py-4">
                <p className="font-display text-3xl font-bold text-charcoal">3.65</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider">GPA / 4.0</p>
              </div>
              <div className="bg-olive/10 rounded-xl px-5 py-4">
                <p className="font-display text-lg font-semibold text-charcoal">Dean's List</p>
                <p className="text-xs text-olive uppercase tracking-wider">All Semesters</p>
              </div>
            </div>

            <div>
              <h4 className="font-body text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <span key={index} className="tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
