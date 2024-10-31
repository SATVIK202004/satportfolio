import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SAT Weather Website',
      description: 'A weather application providing real-time weather information.',
      link: '#'
    },
    {
      title: 'Resume Builder',
      description: 'Collection of resume builder projects with different templates.',
      links: ['#', '#', '#']
    },
    {
      title: 'SAT JARVIS',
      description: 'AI-powered voice assistant that helps users perform various tasks through voice commands.',
      link: '#'
    },
    {
      title: 'SAT Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills.',
      link: 'https://satvik202004.vercel.app/index.html'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-2">
                {Array.isArray(project.links) ? (
                  project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                    >
                      Version {i + 1} <ExternalLink size={16} />
                    </a>
                  ))
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;