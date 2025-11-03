
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[hsl(var(--cream))] md:bg-[hsl(var(--background))]">
      <div className="container mx-auto">
        <h2 className="text-heading mb-8 sm:mb-12 text-center text-[hsl(var(--charcoal))] md:text-white">
          Get In <span className="text-[hsl(var(--blood-red))]">Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto glass-card p-4 sm:p-6 md:p-8">
          <p className="text-body text-center text-[hsl(var(--charcoal))] md:text-gray-300 mb-6 sm:mb-8">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <a 
              href="https://github.com/AadeshGurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-[hsl(var(--blood-red))]/10 group-hover:bg-[hsl(var(--blood-red))]/20 transition-colors duration-300">
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-[hsl(var(--blood-red))] group-hover:text-[hsl(var(--blood-red))] transition-colors" />
              </div>
              <span className="text-sm sm:text-base text-[hsl(var(--charcoal))] md:text-gray-300 group-hover:text-[hsl(var(--blood-red))] transition-colors">GitHub</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/aadeshgurav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-[hsl(var(--blood-red))]/10 group-hover:bg-[hsl(var(--blood-red))]/20 transition-colors duration-300">
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-[hsl(var(--blood-red))] group-hover:text-[hsl(var(--blood-red))] transition-colors" />
              </div>
              <span className="text-sm sm:text-base text-[hsl(var(--charcoal))] md:text-gray-300 group-hover:text-[hsl(var(--blood-red))] transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:contact@aadeshgurav.com" 
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-[hsl(var(--blood-red))]/10 group-hover:bg-[hsl(var(--blood-red))]/20 transition-colors duration-300">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[hsl(var(--blood-red))] group-hover:text-[hsl(var(--blood-red))] transition-colors" />
              </div>
              <span className="text-sm sm:text-base text-[hsl(var(--charcoal))] md:text-gray-300 group-hover:text-[hsl(var(--blood-red))] transition-colors">Email</span>
            </a>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-caption text-[hsl(var(--charcoal))] md:text-gray-400 mb-2 sm:mb-4">Based in:</p>
            <p className="text-body font-semibold text-[hsl(var(--charcoal))] md:text-white">Ratnagiri, Maharashtra, India</p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-caption text-[hsl(var(--charcoal))] md:text-gray-400">
            &copy; {new Date().getFullYear()} Aadesh Gurav. All rights reserved.
          </p>
          <p className="text-caption text-[hsl(var(--charcoal))] md:text-gray-600 mt-2">
            Built with <span className="text-[hsl(var(--blood-red))]">React</span>, <span className="text-[hsl(var(--blood-red))]">TypeScript</span>, and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
