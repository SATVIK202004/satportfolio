import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
            alt="Peddisetty Venkat Satvik"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi 👋, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Peddisetty Venkat Satvik
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            ECE Undergraduate | AI Enthusiast | Web Developer
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;