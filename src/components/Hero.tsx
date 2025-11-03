import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Half - Cream */}
        <div 
          className="absolute inset-0 origin-top-left"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
            background: 'hsl(var(--cream))'
          }}
        />
        
        {/* Right Half - Blood Red */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
            background: 'hsl(var(--blood-red))'
          }}
        />
        
        {/* Mobile: Horizontal Split */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-[hsl(var(--cream))] via-[hsl(var(--cream))] to-[hsl(var(--blood-red))]" 
          style={{ clipPath: 'none' }} 
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight max-w-5xl">
          <span className="block text-[hsl(var(--charcoal))] md:text-white md:mix-blend-difference drop-shadow-sm">
            I am Aadesh Gurav,
          </span>
          <span className="block text-[hsl(var(--charcoal))] md:text-white md:mix-blend-difference drop-shadow-sm mt-2">
            a Software Engineer
          </span>
          <span className="block text-[hsl(var(--charcoal))] md:text-white md:mix-blend-difference drop-shadow-sm mt-2">
            forging robust systems.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl text-[hsl(var(--charcoal))] md:text-white md:mix-blend-difference leading-relaxed px-4">
          With Python as my blade and the Cloud as my domain,
          <span className="block mt-2">I craft solutions from concept to code.</span>
        </p>
        
        <a 
          href="#about" 
          className="px-8 py-4 text-base sm:text-lg font-medium bg-[hsl(var(--blood-red))] text-white border-2 border-[hsl(var(--charcoal))] md:border-white rounded-none hover:bg-[hsl(var(--charcoal))] hover:border-[hsl(var(--blood-red))] transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Explore My Path
        </a>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-[hsl(var(--charcoal))] md:text-white md:mix-blend-difference flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="mb-2 text-xs sm:text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
