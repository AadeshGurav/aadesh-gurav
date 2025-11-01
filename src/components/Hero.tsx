
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading creative thoughts...');
  const [typedText, setTypedText] = useState('');
  
  const fullText = "High on Python, fueled by caffeine, and allergic to bugs";
  
  useEffect(() => {
    // Simulate loading - extended duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increased from 2000 to 3500ms
    
    // Loading text animation
    let count = 0;
    const loadingTexts = [
      'Loading creative thoughts...',
      'Initializing neon components...',
      'Compiling Rust code...',
      'Brewing coffee...',
      'Sprinkling humor...'
    ];
    
    const interval = setInterval(() => {
      count = (count + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[count]);
    }, 400);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
  
  useEffect(() => {
    if (!loading) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [loading]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden section-padding">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 to-transparent"></div>
      
      {/* Hero content */}
      <div className="container mx-auto z-10 flex flex-col items-center justify-center">
        {loading ? (
          <div className="text-center">
            <div className="text-2xl md:text-3xl mb-8 text-white/80">{loadingText}</div>
            <div className="w-64 md:w-96 h-1 bg-gray-800 overflow-hidden rounded-full mx-auto">
              <div className="progress-bar h-full"></div>
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Hi, I'm <span className="neon-text">Aadesh Gurav</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-10 min-h-[60px] sm:min-h-[80px]">{typedText}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#projects" 
                className="neon-button group text-sm sm:text-base"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2 bg-transparent text-white border border-white/20 rounded-md hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-white/70 hover:text-white flex flex-col items-center">
          <span className="mb-2 text-xs sm:text-sm">Scroll Down</span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
