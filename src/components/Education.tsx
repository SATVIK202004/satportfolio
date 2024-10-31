import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech ECE',
      institution: 'KL University',
      period: '2022-present',
      score: 'CGPA- 9.46'
    },
    {
      degree: 'MPC',
      institution: 'Bhashyam junior college',
      period: '2020-2022',
      score: '93%'
    },
    {
      degree: 'SSC',
      institution: 'Bhashyam high school',
      period: '2019-2020',
      score: '94%'
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{edu.period}</p>
                  <p className="text-green-400 font-semibold">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;