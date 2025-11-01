
import { Github, ExternalLink, Database, Globe, Layers, BarChart } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  const projects = [
    {
      id: 'nebuladb',
      title: 'NebulaDB',
      description: 'A document database built from scratch in Rust with focus on performance and reliability.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      tech: ['Rust', 'NoSQL', 'Database Design', 'Systems Programming'],
      links: [
        { icon: <Github className="h-5 w-5" />, url: 'https://github.com/AadeshGurav/NebulaDB', label: 'View on GitHub' }
      ],
      icon: <Database className="h-8 w-8 text-neon-purple" />
    },
    {
      id: 'bpmn',
      title: 'Enterprise BPMN Automation Tool',
      description: 'Designed and implemented a Business Process Model and Notation automation tool for streamlining enterprise workflows.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tech: ['JavaScript', 'Node.js', 'React', 'BPMN 2.0', 'Microservices'],
      links: [],
      icon: <Layers className="h-8 w-8 text-neon-pink" />
    },
    {
      id: 'ecommerce',
      title: 'Microservices for E-commerce',
      description: 'Developed a scalable microservices-based architecture to enhance the performance and maintainability of an e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Docker', 'Kubernetes', 'RESTful API', 'MongoDB'],
      links: [],
      icon: <Layers className="h-8 w-8 text-neon-purple" />
    },
    {
      id: 'realtime',
      title: 'Real-time Data Processing App',
      description: 'Engineered a web application capable of processing and visualizing real-time data streams efficiently.',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80',
      tech: ['React.js', 'Node.js', 'WebSockets', 'D3.js', 'Express'],
      links: [],
      icon: <BarChart className="h-8 w-8 text-neon-blue" />
    }
  ];

  const handleTabHover = (id: string) => {
    setActiveTab(id);
  };

  const handleTabLeave = () => {
    setActiveTab(null);
  };

  return (
    <section id="projects" className="section-padding bg-black/30">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          My <span className="neon-text">Projekts</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card overflow-hidden transition-all duration-300 group hover:shadow-neon"
              onMouseEnter={() => handleTabHover(project.id)}
              onMouseLeave={handleTabLeave}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 glass-card border border-white/10">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-white/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.links.length > 0 && (
                  <div className="flex space-x-3 mt-4">
                    {project.links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-neon-purple transition-colors"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
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
