import { Code2, Cloud, Zap, BookOpen, Globe, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[hsl(var(--background))]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center">
          The <span className="text-[hsl(var(--blood-red))]">Origin Story</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Professional Journey */}
          <div className="space-y-6">
            <div className="glass-card p-6 sm:p-8 border-l-4 border-[hsl(var(--blood-red))]">
              <div className="flex items-start gap-4 mb-4">
                <Code2 className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Software Engineer</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Architecting enterprise-grade BPMN automation systems and scalable microservices. 
                    Engineered high-performance Python applications processing millions of workflows, 
                    achieving 40% efficiency gains through algorithmic optimization and cloud-native design.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 border-l-4 border-[hsl(var(--blood-red))]">
              <div className="flex items-start gap-4 mb-4">
                <Cloud className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Core Expertise</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Specialized in Python, AWS, Docker, and PostgreSQL. Built distributed systems 
                    handling real-time data streams and designed RESTful APIs serving 10K+ requests/min 
                    with 99.9% uptime through strategic caching and load balancing.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 border-l-4 border-[hsl(var(--blood-red))]">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Engineering Philosophy</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Code is craftsmanship. Every system I build emphasizes clean architecture, 
                    maintainability, and performance. From concept to deployment, I apply DevOps 
                    principles and CI/CD automation for rapid, reliable delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beyond Code */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Beyond the Terminal</h3>
            
            <div className="glass-card p-5 sm:p-6 hover:border-[hsl(var(--blood-red))]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Continuous Learner</h4>
                  <p className="text-sm text-gray-400">
                    Exploring Rust systems programming, Kubernetes orchestration, and ML engineering patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6 hover:border-[hsl(var(--blood-red))]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Tech Philosophy</h4>
                  <p className="text-sm text-gray-400">
                    Believer in open source, clean code principles, and the power of automation to solve real problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6 hover:border-[hsl(var(--blood-red))]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Coffee className="w-5 h-5 text-[hsl(var(--blood-red))] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">When Not Coding</h4>
                  <p className="text-sm text-gray-400">
                    Debugging life over coffee, optimizing workflows, and occasionally touching grass.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 sm:p-8 glass-card text-center border border-[hsl(var(--blood-red))]/20">
              <p className="text-sm sm:text-base italic text-gray-300">
                "Any developer who claims to know everything about a language either hasn't used it in production, or is lying."
              </p>
              <p className="mt-3 text-xs sm:text-sm text-[hsl(var(--blood-red))]">
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
