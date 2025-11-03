import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Split - Mobile First */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile: Horizontal Split (Red top, Cream bottom) */}
        <div className="md:hidden absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--blood-red)) 50%, hsl(var(--cream)) 50%)',
            }}
          />
        </div>
        
        {/* Desktop: Diagonal Split */}
        <div className="hidden md:block absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)',
              background: 'hsl(var(--cream))',
            }}
          />
          
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)',
              background: 'hsl(var(--blood-red))',
            }}
          />
          
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 49%, rgba(0,0,0,0.1) 50%, transparent 51%)',
            }}
          />
        </div>
      </div>
      
      {/* Hero Content - Mobile First */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-0 text-center min-h-screen md:min-h-0">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 pb-8 md:pb-0">
          {/* Headline - Dual-layer clipping technique */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight md:leading-tight">
            {/* Mobile: Single white layer only */}
            <span className="block md:hidden text-white mb-2">
              I am Aadesh Gurav,
            </span>
            <span className="block md:hidden text-white mb-2">
              a Software Engineer
            </span>
            <span className="block md:hidden text-white">
              forging robust systems.
            </span>
            
            {/* Desktop: Dual-layer clipping */}
            <span className="hidden md:block mb-2 md:mb-0">
              <span className="hero-text-layer-container">
                <span className="hero-text-white-layer">I am Aadesh Gurav,</span>
                <span className="hero-text-charcoal-layer">I am Aadesh Gurav,</span>
              </span>
            </span>
            <span className="hidden md:block mb-2 md:mb-0">
              <span className="hero-text-layer-container">
                <span className="hero-text-white-layer">a Software Engineer</span>
                <span className="hero-text-charcoal-layer">a Software Engineer</span>
              </span>
            </span>
            <span className="hidden md:block">
              <span className="hero-text-layer-container">
                <span className="hero-text-white-layer">forging robust systems.</span>
                <span className="hero-text-charcoal-layer">forging robust systems.</span>
              </span>
            </span>
          </h1>
          
          {/* Sub-headline - Dual-layer clipping technique */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 max-w-4xl mx-auto">
            {/* Mobile: Single charcoal layer only */}
            <span className="block md:hidden text-[hsl(var(--charcoal))]">
              With Python as my blade and the Cloud as my domain,
            </span>
            <span className="block md:hidden text-[hsl(var(--charcoal))] mt-2">
              I craft solutions from concept to code.
            </span>
            
            {/* Desktop: Dual-layer clipping */}
            <span className="hidden md:inline">
              <span className="hero-sub-layer-container">
                <span className="hero-sub-white-layer">
                  With Python as my blade and the Cloud as my domain,
                </span>
                <span className="hero-sub-charcoal-layer">
                  With Python as my blade and the Cloud as my domain,
                </span>
              </span>
            </span>
            <span className="hidden md:block mt-2">
              <span className="hero-sub-layer-container">
                <span className="hero-sub-white-layer">
                  I craft solutions from concept to code.
                </span>
                <span className="hero-sub-charcoal-layer">
                  I craft solutions from concept to code.
                </span>
              </span>
            </span>
          </p>
          
          {/* CTA Button - Enhanced contrast */}
          <div className="pt-2 md:pt-4">
            <a 
              href="#about" 
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white text-[hsl(var(--blood-red))] border-2 border-white rounded-none hover:bg-[hsl(var(--charcoal))] hover:text-white hover:border-[hsl(var(--charcoal))] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Explore My Path
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator - Mobile optimized */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a 
          href="#about" 
          className="text-[hsl(var(--charcoal))] md:text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity drop-shadow-lg"
        >
          <span className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Scroll Down</span>
          <ArrowDown size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
