import { useEffect, useState, useRef } from "react";

function Welcome({ onFinish, userImage }) {
  const [isVisible, setIsVisible] = useState(true);
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const subtitle = " Crafting digital experiences with passion";
  const containerRef = useRef(null);

  useEffect(() => {
    // Enhanced floating particles with more variety
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 20 + 5,
      animationDelay: Math.random() * 7,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 65%)`, // Blues and purples only
      shape: Math.random() > 0.8 ? "square" : Math.random() > 0.6 ? "triangle" : "circle",
      opacity: Math.random() * 0.6 + 0.2,
      blur: Math.random() * 8 + 4
    }));
    setParticles(newParticles);

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < subtitle.length) {
        setTypedText((prev) => prev + subtitle.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 120);
      });
    }, 50);

    // Exit animation
    const exitTimer = setTimeout(() => setIsVisible(false), 5000);
    const finishTimer = setTimeout(() => onFinish(), 5500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, subtitle]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black transition-all duration-1000 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-blue-900/15 to-purple-900/10 animate-pulse"></div>
      
      {/* Moving grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-move-grid"></div>
      </div>
      
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute ${
              p.shape === "square" 
                ? "rounded" 
                : p.shape === "triangle" 
                  ? "w-0 h-0 border-transparent border-b-[length:var(--size)] border-l-[length:calc(var(--size)/2)] border-r-[length:calc(var(--size)/2)]" 
                  : "rounded-full"
            } animate-float`}
            style={{
              "--size": `${p.size}px`,
              width: p.shape !== "triangle" ? `${p.size}px` : "0",
              height: p.shape !== "triangle" ? `${p.size}px` : "0",
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDuration: `${p.animationDuration}s`,
              animationDelay: `${p.animationDelay}s`,
              background: p.shape !== "triangle" ? p.color : "transparent",
              borderBottomColor: p.shape === "triangle" ? p.color : "transparent",
              boxShadow: `0 0 ${p.blur}px ${p.size/2}px ${p.color}`,
              opacity: p.opacity,
              filter: `blur(${p.size/4}px)`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced glow effects - darker and less pink */}
      <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-800 rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-indigo-900 rounded-full filter blur-2xl opacity-10 animate-ping"></div>
      <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-4 md:p-8 w-full max-w-4xl mx-4">
        {/* Profile Image Container */}
        <div
          className={`relative mb-6 md:mb-8 transition-all duration-1000 ${
            isVisible
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 rotate-12 opacity-0"
          }`}
        >
          {/* Outer ring */}
          <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-70 animate-spin-slow"></div>
          
          {/* Middle ring */}
          <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-50 animate-spin-reverse"></div>
          
          {/* Inner image container */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-transparent bg-gray-900 p-1">
            <div className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-1000 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}>
              <img
                src="/ummar1.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover transform hover:scale-110 transition-transform duration-700"
                onLoad={handleImageLoad}
                style={{
                  filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))"
                }}
              />
            </div>
            
            {/* Loading shimmer effect */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full animate-pulse"></div>
            )}
          </div>

          {/* Orb effects */}
          <span className="absolute -top-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-cyan-400 rounded-full blur-md animate-ping shadow-lg shadow-cyan-400/40"></span>
          <span className="absolute -bottom-2 -right-2 w-4 h-4 md:w-5 md:h-5 bg-blue-400 rounded-full blur-md animate-bounce shadow-lg shadow-blue-400/40 delay-500"></span>
        </div>

        {/* Heading */}
        <h1
          className={`relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 ${
            isVisible ? "opacity-100" : "opacity-0 -translate-y-6"
          } transition-all duration-1000`}
          style={{
            textShadow: "0 0 8px rgba(96, 165, 250, 0.4), 0 0 16px rgba(96, 165, 250, 0.2)",
            filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))"
          }}
        >
          Welcome
          {/* Underline effect */}
          <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 font-light transition-all duration-1000 px-2 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
          style={{ minHeight: "1.5rem" }}
        >
          {typedText}
          <span className="inline-block w-0.5 h-4 md:h-5 bg-white ml-0.5 animate-pulse"></span>
        </p>

        {/* Progress bar */}
        <div className="relative mt-8 md:mt-12 w-48 sm:w-56 md:w-64 lg:w-72 h-1.5 md:h-2 bg-gray-800 rounded-full mx-auto overflow-hidden border border-gray-700">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left transition-all duration-100"
            style={{ transform: `scaleX(${progress / 100})` }}
          ></div>
          <div className="absolute inset-0 rounded-full border border-white/10"></div>
          {/* Glowing effect on progress */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-md" style={{ transform: `scaleX(${progress / 100})` }}></div>
        </div>
        
        {/* Percentage indicator */}
        <div className="text-xs md:text-sm text-gray-400 mt-2 font-mono">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-5 left-5 w-12 h-12 md:top-10 md:left-10 md:w-16 md:h-16 border-t-2 border-l-2 border-blue-500 opacity-50 animate-pulse"></div>
      <div className="absolute top-5 right-5 w-12 h-12 md:top-10 md:right-10 md:w-16 md:h-16 border-t-2 border-r-2 border-indigo-500 opacity-50 animate-pulse delay-500"></div>
      <div className="absolute bottom-5 left-5 w-12 h-12 md:bottom-10 md:left-10 md:w-16 md:h-16 border-b-2 border-l-2 border-purple-500 opacity-50 animate-pulse delay-700"></div>
      <div className="absolute bottom-5 right-5 w-12 h-12 md:bottom-10 md:right-10 md:w-16 md:h-16 border-b-2 border-r-2 border-cyan-500 opacity-50 animate-pulse delay-1000"></div>

      {/* Floating text elements */}
      <div className="absolute top-1/4 left-5 md:left-10 text-xs text-blue-400/30 animate-float-slow">DESIGN</div>
      <div className="absolute top-1/3 right-5 md:right-10 text-xs text-indigo-400/30 animate-float-slower">DEVELOP</div>
      <div className="absolute bottom-1/4 left-1/4 text-xs text-purple-400/30 animate-float-slowest">CREATE</div>
    </div>
  );
}

export default Welcome;