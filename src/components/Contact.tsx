
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="neon-text">Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto glass-card p-8 border border-neon-purple/20">
          <p className="text-center text-lg text-gray-300 mb-8">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="https://github.com/AadeshGurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-neon-purple/10 group-hover:bg-neon-purple/20 transition-colors duration-300">
                <Github className="h-8 w-8 text-neon-purple" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/aadeshgurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors duration-300">
                <Linkedin className="h-8 w-8 text-neon-blue" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:contact@aadeshgurav.com" 
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-4 rounded-full bg-neon-pink/10 group-hover:bg-neon-pink/20 transition-colors duration-300">
                <Mail className="h-8 w-8 text-neon-pink" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">Email</span>
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Based in:</p>
            <p className="text-xl font-medium">Pune, Maharashtra, India</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aadesh Gurav. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with <span className="text-neon-purple">React</span>, <span className="text-neon-blue">TypeScript</span>, and a touch of <span className="text-neon-pink">humor</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
