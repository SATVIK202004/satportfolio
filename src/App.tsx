import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, Download, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Internships />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-6 text-center">
        <p>© 2024 Peddisetty Venkat Satvik. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;