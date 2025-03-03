import React from 'react';
import { Code, Server, Database, Globe, Layout, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'Redux', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'GraphQL', level: 65 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Jest & Testing', level: 75 },
    { name: 'CI/CD', level: 70 },
    { name: 'Agile/Scrum', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Code className="text-indigo-600 dark:text-indigo-400 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
            </div>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Server className="text-indigo-600 dark:text-indigo-400 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Backend</h3>
            </div>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Other Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Globe className="text-indigo-600 dark:text-indigo-400 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Other Skills</h3>
            </div>
            
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Layout size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">Responsive Design</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Database size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">Database Design</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Smartphone size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">Mobile-First</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Code size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">Clean Code</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Server size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">API Integration</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full mb-3 transition-colors duration-300">
              <Globe size={32} />
            </div>
            <span className="text-gray-700 dark:text-gray-300 text-center">Web Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;