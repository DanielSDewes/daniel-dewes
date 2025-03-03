import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-indigo-400">
              Daniel Dewes
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building modern web applications with React and Node.js. 
              Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/DanielSDewes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/daniel-dewes-5bb69a235/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:danielsilvadewe@gmail.com" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Daniel Dewes. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <p>
            Designed and built with <span className="text-red-500">❤</span> by Daniel Dewes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;