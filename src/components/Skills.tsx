import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C Programming', level: 75 },
    { name: 'HTML5', level: 70 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'Python', level: 55 },
    { name: 'Prompt Engineering', level: 75 },
    { name: 'Arduino Programming', level: 70 }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;