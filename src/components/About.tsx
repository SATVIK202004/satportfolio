import React from 'react';

const About = () => {
  const details = {
    name: 'Peddisetty Venkat Satvik',
    age: '19',
    dob: '20/11/2004',
    languages: ['Telugu', 'English'],
    strengths: ['Project Management', 'Communication', 'Time Management'],
    location: 'India, AP, Guntur',
    email: 'satvikpeddisetty20@gmail.com'
  };

  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-gray-300 mb-6">
            I am currently pursuing my third year of a BTech undergraduate degree at KL University,
            specializing in Artificial Intelligence and Intelligent Process Automation. I strongly
            believe in the value of continuous learning and staying adaptable in the ever-evolving
            world of software engineering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-gray-400 capitalize">{key}:</span>
                <span className="text-white">
                  {Array.isArray(value) ? value.join(', ') : value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;