import React from 'react';
import { User, FileText, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl">
            Get to know me better - my background, experience, and what drives me as a developer.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="mr-2 text-indigo-600 dark:text-indigo-400" size={24} />
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My name is Daniel Dewes, I am 20 years old, and I am originally from Brazil, Rio Grande do Sul. I am fluent in two languages, English and Portuguese. I am currently in the seventh semester of the Computer Science program at URI Santo Ângelo and have been working as a developer for two years at Solution Sistemas e Gestão.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At university, I studied advanced computer architecture, programming logic, and languages such as Python, which I used to create a game; Java, which I used to develop a scoring control program for a sports event; and C++, which I used to implement advanced sorting algorithms and binary tree management.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              As a developer at Solution, I face daily challenges in designing solutions that meet client demands, identifying bugs in the code, and collaborating with fellow developers and testers. I also work with data conversion between systems, which has given me experience with various database management systems (DBMS) such as pgAdmin, MySQL, SQL Server, Oracle, and Firebird.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="mr-2 text-indigo-600 dark:text-indigo-400" size={24} />
              My Experience
            </h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">Junior Full-Stack Developer</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
              </div>
              <p className="text-indigo-600 dark:text-indigo-400 mb-2">Solution Sistemas e Gestão.</p>
              <p className="text-gray-600 dark:text-gray-400">
                Maintenance and System Improvements:
Responsible for handling maintenance requests and implementing enhancements in the Solution system using the GeneXus IDE.

Analysis and Planning:
Conduct analyses to determine the best approach for implementing future improvements, ensuring alignment with system and team requirements.

Training and Technical Support:
Instruct and assist development team members, focusing on training three new employees in the use of the GeneXus IDE, coding standards, and understanding business rules.

Incident Management:
Analyze errors and issues reported by the support team, providing solutions within SLA deadlines and overseeing the implementation of necessary fixes.

Data Conversion:
Perform data migration for companies transitioning from other management systems to Solution, gaining hands-on experience with various database management systems (DBMS) such as pgAdmin, MySQL, SQL Server, Firebird, and Oracle.








              </p>
            </div>
            
            
            
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;