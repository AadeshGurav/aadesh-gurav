
import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python 3.x', level: 90, category: 'languages' },
    { name: 'Rust', level: 85, category: 'languages' },
    { name: 'JavaScript', level: 85, category: 'languages' },
    
    // Web Technologies
    { name: 'HTML5', level: 90, category: 'web' },
    { name: 'CSS3', level: 85, category: 'web' },
    { name: 'React.js', level: 85, category: 'web' },
    { name: 'Node.js', level: 80, category: 'web' },
    
    // Databases
    { name: 'MongoDB', level: 75, category: 'databases' },
    { name: 'PostgreSQL', level: 80, category: 'databases' },
    { name: 'MySQL', level: 75, category: 'databases' },
    
    // DevOps & Cloud
    { name: 'Docker', level: 75, category: 'devops' },
    { name: 'Kubernetes', level: 70, category: 'devops' },
    { name: 'AWS', level: 65, category: 'devops' },
    { name: 'Firebase', level: 70, category: 'devops' },
  ];
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Programming Languages' },
    { id: 'web', name: 'Web Technologies' },
    { id: 'databases', name: 'Databases' },
    { id: 'devops', name: 'DevOps & Cloud' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Generate random animation delays for gradients
  const [animationDelays, setAnimationDelays] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Create random animation delays for each skill
    const delays: { [key: string]: string } = {};
    skills.forEach((skill) => {
      // Generate random delay between 0 and 2 seconds
      const delay = Math.random() * 2;
      delays[skill.name] = `-${delay}s`;
    });
    setAnimationDelays(delays);
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          The <span className="text-[hsl(var(--blood-red))]">Arsenal</span>
        </h2>
        
        <div className="mb-8 sm:mb-12 custom-scrollbar overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 relative z-20">
          <div className="flex space-x-2 md:space-x-4 min-w-max pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 sm:px-4 py-2 rounded-sm text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap relative z-20
                  ${activeCategory === category.id 
                    ? 'bg-[hsl(var(--blood-red))] text-white border-2 border-[hsl(var(--blood-red))]' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 group hover:border-[hsl(var(--blood-red))]/30 transition-all duration-300">
              <div className="mb-3">
                <h3 className="text-base sm:text-lg font-medium mb-3">{skill.name}</h3>
              </div>
              <div className="w-full h-2.5 bg-gray-800/50 rounded-sm overflow-hidden">
                <div 
                  className="h-full rounded-sm transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    background: 'hsl(var(--blood-red))',
                    animationDelay: animationDelays[skill.name] || '0s'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 glass-card text-center border-l-4 border-[hsl(var(--blood-red))] max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 italic">
            "Mastery is not a destination. Every bug fixed, every system optimized, every line refactored—this is the path of continuous improvement."
          </p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[hsl(var(--blood-red))] font-medium">
            — The Engineer's Creed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
