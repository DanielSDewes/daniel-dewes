import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
      liveLink: 'https://example.com/ecommerce',
      githubLink: 'https://github.com/danieldewes/ecommerce',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      liveLink: 'https://example.com/taskmanager',
      githubLink: 'https://github.com/danieldewes/taskmanager',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Features include interactive maps, charts, and location search.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'Leaflet', 'CSS Modules'],
      liveLink: 'https://example.com/weather',
      githubLink: 'https://github.com/danieldewes/weather',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with a rich text editor, categories, tags, and user comments. Includes admin dashboard for content management.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Draft.js', 'JWT Authentication'],
      liveLink: 'https://example.com/blog',
      githubLink: 'https://github.com/danieldewes/blog',
    },
    {
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that allows users to log workouts, track progress, and set fitness goals. Includes data visualization and progress reports.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'D3.js', 'Health API'],
      liveLink: 'https://example.com/fitness',
      githubLink: 'https://github.com/danieldewes/fitness',
    },
    {
      title: 'Real Estate Listings',
      description: 'A real estate platform featuring property listings, advanced search filters, interactive maps, and virtual tours. Includes agent dashboard and lead management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS S3', 'Elasticsearch'],
      liveLink: 'https://example.com/realestate',
      githubLink: 'https://github.com/danieldewes/realestate',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl">
            Here are some of the projects I've worked on. Each project represents different challenges and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/danieldewes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Code className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;