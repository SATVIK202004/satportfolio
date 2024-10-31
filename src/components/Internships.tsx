import React from 'react';

const Internships = () => {
  const internships = [
    {
      role: 'WEB DEVELOPMENT INTERN',
      company: 'PRODIGY INFOTECH',
      period: 'MAY 2024 - JUNE 2024',
      description: 'Completed a two-month internship focusing on web development. Gained practical experience and enhanced skills in creating and managing web applications.'
    },
    {
      role: 'WEB DEVELOPMENT INTERN',
      company: 'INTERNPE',
      period: 'MAY 2024 - JUNE 2024',
      description: 'Completed a two-month internship focusing on web development. Gained practical experience and enhanced skills in creating and managing web applications.'
    },
    {
      role: 'WEB DEVELOPMENT INTERN',
      company: 'BHARAT INTERN',
      period: 'MAY 2024 - JUNE 2024',
      description: 'Completed a two-month internship focusing on web development. Gained practical experience and enhanced skills in creating and managing web applications.'
    },
    {
      role: 'ARTIFICIAL INTELLIGENCE INTERN',
      company: 'CODEALPHA',
      period: 'MAY 2024 - JUNE 2024',
      description: 'Completed a two-month internship focusing on artificial intelligence. Gained practical experience and enhanced skills in AI development and applications.'
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Internship Experience</h2>
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{internship.role}</h3>
                  <p className="text-purple-400">{internship.company}</p>
                </div>
                <p className="text-gray-400">{internship.period}</p>
              </div>
              <p className="text-gray-300">{internship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;