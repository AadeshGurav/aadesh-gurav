import { useState } from 'react';
import { ExternalLink, Github, Code2, Database, Zap } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Enterprise BPMN Automation Platform',
      description: 'Python + FastAPI + PostgreSQL + Docker — Architected microservices-based workflow engine processing 500K+ workflows monthly. Reduced manual intervention by 60% through intelligent task routing and real-time monitoring dashboards.',
      image: '/placeholder.svg',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
      links: {
        github: '#',
        live: '#'
      },
      icon: Database,
    },
    {
      id: 2,
      title: 'Real-time Data Processing Pipeline',
      description: 'React + Node.js + WebSockets + D3.js — Engineered scalable data ingestion system handling 10K concurrent connections. Built interactive visualization dashboards with sub-second latency, serving live analytics to 5K+ users.',
      image: '/placeholder.svg',
      tech: ['React.js', 'Node.js', 'WebSockets', 'D3.js', 'Express'],
      links: {
        github: '#',
        live: '#'
      },
      icon: Zap,
    },
    {
      id: 3,
      title: 'Cloud-Native Deployment Automation',
      description: 'Kubernetes + Terraform + Python + AWS — Automated infrastructure provisioning reducing deployment time by 75%. Implemented CI/CD pipelines with automated testing, achieving 99.8% deployment success rate across 50+ microservices.',
      image: '/placeholder.svg',
      tech: ['Kubernetes', 'Terraform', 'Python', 'AWS', 'Jenkins'],
      links: {
        github: '#'
      },
      icon: Code2,
    },
    {
      id: 4,
      title: 'Multi-tenant SaaS Authentication System',
      description: 'Node.js + MongoDB + JWT + OAuth2 — Designed secure authentication layer supporting 10K+ organizations. Implemented role-based access control, SSO integration, and audit logging meeting SOC 2 compliance standards.',
      image: '/placeholder.svg',
      tech: ['Node.js', 'MongoDB', 'JWT', 'OAuth2', 'Redis'],
      links: {
        github: '#',
        live: '#'
      },
      icon: Database,
    },
  ];

  const handleTabHover = (id: number) => {
    setActiveTab(id);
  };

  const handleTabLeave = () => {
    setActiveTab(null);
  };

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--cream))] md:bg-[hsl(var(--background))]">
      <div className="container mx-auto">
        <h2 className="text-heading mb-12 sm:mb-16 text-center text-[hsl(var(--charcoal))] md:text-white">
          Scrolls of <span className="text-[hsl(var(--blood-red))]">Accomplishment</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card p-6 sm:p-8 hover:border-[hsl(var(--blood-red))]/30 transition-all duration-300 group"
                onMouseEnter={() => handleTabHover(project.id)}
                onMouseLeave={handleTabLeave}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[hsl(var(--blood-red))]/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-[hsl(var(--blood-red))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[hsl(var(--charcoal))] md:text-white group-hover:text-[hsl(var(--blood-red))] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-body text-[hsl(var(--charcoal))] md:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[hsl(var(--blood-red))]/10 border border-[hsl(var(--blood-red))]/20 rounded-sm text-xs sm:text-sm text-[hsl(var(--charcoal))] md:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-sm text-[hsl(var(--charcoal))] md:text-gray-400 hover:text-[hsl(var(--blood-red))] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 text-sm text-[hsl(var(--charcoal))] md:text-gray-400 hover:text-[hsl(var(--blood-red))] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
