import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* SVG Background Split - Mobile First */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile: Horizontal Split (Red top, Cream bottom) */}
        <svg
          className="md:hidden absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red top section */}
          <rect x="0" y="0" width="100" height="50" fill="hsl(0, 70%, 45%)" />
          {/* Cream bottom section */}
          <rect x="0" y="50" width="100" height="50" fill="hsl(45, 30%, 92%)" />
        </svg>

        {/* Desktop: Diagonal Split */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cream left section */}
          <polygon
            points="0,0 55,0 45,100 0,100"
            fill="hsl(45, 30%, 92%)"
          />

          {/* Red right section */}
          <polygon
            points="55,0 100,0 100,100 45,100"
            fill="hsl(0, 70%, 45%)"
          />

          {/* Subtle shadow overlay on the diagonal edge */}
          <defs>
            <linearGradient id="diagonalShadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="48%" stopColor="transparent" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(0,0,0,0.1)" stopOpacity="1" />
              <stop offset="52%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#diagonalShadow)" />
        </svg>
      </div>

      {/* Hero Content - Full Width for Clip-Path Alignment */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-0 text-center min-h-screen md:min-h-0 w-full">
        <div className="w-full mx-auto space-y-6 md:space-y-8 pb-8 md:pb-0">
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
            {/* Mobile: Single dark red layer only */}
            <span className="block md:hidden text-[hsl(0,70%,35%)]">
              With Python as my blade and the Cloud as my domain,
            </span>
            <span className="block md:hidden text-[hsl(0,70%,35%)] mt-2">
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
        </div>
      </div>

      {/* Scroll Down Indicator - Centered */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#about"
          className="text-[hsl(45,30%,92%)] flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity drop-shadow-lg"
        >
          <span className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Scroll Down</span>
          <ArrowDown size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
