import { Code2, Cloud, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[hsl(var(--cream))] md:bg-[hsl(var(--background))]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-heading mb-12 sm:mb-16 text-center text-[hsl(var(--charcoal))] md:text-white">
          The <span className="text-[hsl(var(--blood-red))]">Origin Story</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Professional Journey */}
          <div className="space-y-6">
            <div className="mobile-card p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <Code2 className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[hsl(var(--charcoal))] md:text-white">
                    Software Engineer
                  </h3>
                  <p className="text-body text-[hsl(var(--charcoal))] md:text-gray-300">
                    Architecting enterprise-grade BPMN automation systems and scalable 
                    microservices. Engineered high-performance Python applications 
                    processing millions of workflows, achieving 40% efficiency gains 
                    through algorithmic optimization and cloud-native design.
                  </p>
                </div>
              </div>
            </div>

            <div className="mobile-card p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <Cloud className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[hsl(var(--charcoal))] md:text-white">
                    Core Expertise
                  </h3>
                  <p className="text-body text-[hsl(var(--charcoal))] md:text-gray-300">
                    Specialized in Python, AWS, Azure, Docker, and PostgreSQL. 
                    Built distributed systems handling real-time data streams, 
                    designed RESTful APIs serving 10K+ requests/min with 99.9% 
                    uptime through strategic caching and load balancing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mobile-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[hsl(var(--charcoal))] md:text-white">
                    Engineering Philosophy
                  </h3>
                  <p className="text-body text-[hsl(var(--charcoal))] md:text-gray-300">
                    Applying SOLID principles and DRY methodology to craft maintainable, 
                    scalable architectures. Every system emphasizes clean code, 
                    testability, and performance—from concept to deployment via 
                    DevOps automation and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Code */}
          <div className="space-y-6">
            <h3 className="text-heading text-2xl sm:text-3xl mb-6 text-[hsl(var(--charcoal))] md:text-white">
              Beyond the Terminal
            </h3>
            
            <div className="glass-card p-6 sm:p-8 text-center">
              <p className="text-body italic text-[hsl(var(--charcoal))] md:text-gray-300 mb-4">
                "Any developer who claims to know everything about a language 
                either hasn't used it in production, or is lying."
              </p>
              <p className="text-caption text-[hsl(var(--blood-red))] font-semibold">
                — Why I'm always learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
