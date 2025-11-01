
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Get In <span className="neon-text">Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto glass-card p-4 sm:p-6 md:p-8 border border-neon-purple/20">
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <a 
              href="https://github.com/AadeshGurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors duration-300">
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-neon-purple" />
              </div>
              <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/aadeshgurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors duration-300">
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-neon-blue" />
              </div>
              <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:contact@aadeshgurav.com" 
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-neon-pink/10 group-hover:bg-neon-pink/20 transition-colors duration-300">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-neon-pink" />
              </div>
              <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">Email</span>
            </a>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4">Based in:</p>
            <p className="text-lg sm:text-xl font-medium">Ratnagiri, Maharashtra, India</p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Aadesh Gurav. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Built with <span className="text-neon-purple">React</span>, <span className="text-neon-blue">TypeScript</span>, and a touch of <span className="text-neon-pink">humor</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
