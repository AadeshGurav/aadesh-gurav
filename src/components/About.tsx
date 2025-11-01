
import { Code, BookOpen, Cpu, BookMarked } from 'lucide-react';

const About = () => {
  const interests = [
    { 
      icon: <Cpu className="w-6 h-6 text-neon-purple" />, 
      title: 'Physics',
      description: 'Exploring the universe beyond textbooks'
    },
    { 
      icon: <BookOpen className="w-6 h-6 text-neon-blue" />, 
      title: 'Philosophy',
      description: 'Contemplating the nature of reality and knowledge'
    },
    { 
      icon: <Code className="w-6 h-6 text-neon-pink" />, 
      title: 'Mathematics',
      description: 'Finding beauty in patterns and logical structures'
    },
    { 
      icon: <BookMarked className="w-6 h-6 text-neon-purple" />, 
      title: 'Vedic Tradition',
      description: 'Studying ancient wisdom and its modern applications'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About <span className="neon-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-300">
              With <span className="text-white font-semibold">3 years of experience</span> in software development, 
              I specialize in architecting enterprise-grade BPMN automation, microservices, 
              and scalable web applications.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300">
              Currently working as an <span className="text-white font-semibold">Associate Software Developer</span> at 
              SSK Innovation, where I focus on building robust, scalable solutions for 
              enterprise clients.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300">
              I hold a <span className="text-white font-semibold">Bachelor's in Computer Science</span> from Mumbai University, 
              where I developed a strong foundation in algorithms, data structures, and 
              software architecture.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300">
              When I'm not coding, you might find me diving into physics theories, 
              exploring philosophical concepts, or attempting to learn new languages 
              (both human and programming).
            </p>
            
            <div className="pt-2 sm:pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Languages I Speak</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Marathi (Native)</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Hindi</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-neon-purple/10 rounded-full text-sm border border-neon-purple/30">
                  Learning: German
                </span>
                <span className="px-3 py-1 bg-neon-purple/10 rounded-full text-sm border border-neon-purple/30">
                  Learning: Russian
                </span>
                <span className="px-3 py-1 bg-neon-purple/10 rounded-full text-sm border border-neon-purple/30">
                  Learning: Sanskrit
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Interests Beyond Coding</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 sm:p-6 transition-all duration-300 hover:shadow-neon"
                >
                  <div className="mb-3 sm:mb-4">{interest.icon}</div>
                  <h4 className="text-base sm:text-lg font-medium mb-2">{interest.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400">{interest.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 glass-card border border-neon-purple/30">
              <p className="text-sm sm:text-base text-gray-300 italic">
                "I'm not just a developer who can make your app work; I'm the developer who'll 
                make your app work while explaining why quantum physics suggests it 
                shouldn't be possible."
              </p>
              <p className="text-right mt-2 text-sm sm:text-base text-neon-purple">— My coding philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
