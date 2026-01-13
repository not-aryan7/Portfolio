import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-sand/50">
        <p className="text-charcoal-light text-sm font-body">
          Designed & Built by <span className="text-olive font-medium">Aryan Rajbhandari</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
