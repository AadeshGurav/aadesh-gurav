import React, { useState } from 'react';

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
    
    // Testing & Code Quality
    { name: 'Flake8', level: 80, category: 'testing' },
    { name: 'Jest', level: 75, category: 'testing' },
    { name: 'Selenium', level: 65, category: 'testing' },
    
    // Version Control
    { name: 'Git', level: 90, category: 'version-control' },
    { name: 'GitHub', level: 90, category: 'version-control' },
    
    // Other Tools & Frameworks
    { name: 'Express.js', level: 80, category: 'other' },
    { name: 'GraphQL', level: 75, category: 'other' },
    { name: 'RESTful API', level: 85, category: 'other' }
  ];
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Programming Languages' },
    { id: 'web', name: 'Web Technologies' },
    { id: 'databases', name: 'Databases' },
    { id: 'devops', name: 'DevOps & Cloud' },
    { id: 'testing', name: 'Testing & Quality' },
    { id: 'version-control', name: 'Version Control' },
    { id: 'other', name: 'Other Tools & Frameworks' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="neon-text">Skills</span>
        </h2>
        
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 
                  ${activeCategory === category.id 
                    ? 'bg-neon-purple/20 text-white border border-neon-purple shadow-neon' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-transparent'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-card p-6 group hover:shadow-neon transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 glass-card text-center border border-neon-purple/20 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            "I strongly believe that any developer who claims to know everything about a language is either lying or hasn't used it in a real project."
          </p>
          <p className="mt-4 text-sm text-neon-purple">
            That's why I'm always learning and improving my skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
