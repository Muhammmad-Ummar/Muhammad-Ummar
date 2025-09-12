import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import myPic from "../assets/ummar1.png";
import cvFile from "../assets/CV.pdf";
import { Download, Mail, ArrowRight, Code, Sparkles, ChevronDown, Zap } from "lucide-react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`relative w-full min-h-screen px-4 pt-20 md:pt-24 flex items-center justify-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
    >
      {/* Animated floating shapes */}  
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 100 + 30;
          const ShapeComponent = i % 3 === 0 ? Triangle : i % 3 === 1 ? CircleShape : Square;
          
          return (
            <motion.div
              key={i}
              className={`absolute opacity-10 ${isDark ? "text-yellow-400" : "text-blue-500"}`}
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 80 - 40, 0],
                x: [0, Math.random() * 60 - 30, 0],
                rotate: [0, Math.random() * 180 - 90],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <ShapeComponent />
            </motion.div>
          );
        })}
      </div>

      {/* Animated connection lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="40%"
            stroke={isDark ? "#fbbf24" : "#3b82f6"}
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="70%"
            y1="80%"
            x2="90%"
            y2="60%"
            stroke={isDark ? "#fbbf24" : "#3b82f6"}
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="20%"
            y1="80%"
            x2="40%"
            y2="60%"
            stroke={isDark ? "#ec4899" : "#8b5cf6"}
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 z-10">
        {/* Left: Text */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className={`text-sm font-semibold tracking-wider uppercase mb-4 inline-flex items-center gap-2 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              
            </motion.span>
            <strong>Hello, I'm</strong>
          </motion.span>

          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Muhammad Ummar
          </motion.h1>

          <motion.div
            className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <TypewriterText text="MERN Stack and AI/ML Developer" speed={100} />
          </motion.div>

          <motion.p
            className={`mt-4 max-w-lg text-base md:text-lg mx-auto md:mx-0 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Crafting exceptional digital experiences with modern web technologies.
            Specializing in responsive design, performance optimization, and scalable architecture.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <HeroButton
              href="#projects"
              text="View Projects"
              icon={<ArrowRight size={18} />}
              isDark={isDark}
              filled
            />
            <HeroButton
              href="#contact"
              text="Contact Me"
              icon={<Mail size={18} />}
              isDark={isDark}
            />
            <HeroButton
              href={cvFile}
              text="Download CV"
              icon={<Download size={18} />}
              isDark={isDark}
              download
            />
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-1 flex justify-center mb-8 md:mb-0"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Floating tech badges */}
          <motion.div
            className={`absolute -top-2 -right-2 md:-top-4 md:-right-4 p-2 md:p-3 rounded-full shadow-lg z-20 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring" }}
            whileHover={{ 
              y: -5,
              rotate: 10,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <Code
              size={20}
              className={isDark ? "text-yellow-400" : "text-blue-600"}
            />
          </motion.div>
          
          <motion.div
            className={`absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 p-2 md:p-3 rounded-full shadow-lg z-20 ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ 
              y: -5,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
           
          </motion.div>

          {/* Main profile image container */}
          <motion.div
            className="relative w-full h-full max-w-xs rounded-full"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}  
          >
            {/* Gradient glow effect */}
            <motion.div
              className={`absolute -inset-2 md:-inset-4 rounded-full opacity-50 z-0 blur-xl ${
                isDark
                  ? "bg-gradient-to-tr from-yellow-400/30 via-pink-500/30 to-purple-500/30"
                  : "bg-gradient-to-tr from-blue-400/30 via-indigo-500/30 to-purple-500/30"
              }`}
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Profile image with border */}
<div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">
  <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-200 dark:bg-gray-800">
    {/* Profile Image */}
    <img
      src={myPic}
      alt="Muhammad Ummar"
      className="w-full h-full object-cover rounded-full relative z-10"
    />

    {/* ✅ Green online status indicator */}
    <motion.div
      className="absolute bottom-5 right-3 z-30"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 500 }}
    >
      <div className="relative">
        {/* Solid green dot */}
        <motion.div
          className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white shadow-md"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsing glow */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full opacity-0"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  </div>
</div>


            {/* Animated rings around profile */}
            <motion.div
              className={`absolute -inset-4 md:-inset-2 rounded-full border-1 ${
                isDark ? "border-yellow-900" : "border-blue-400/20"
              }`}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className={`absolute -inset-6 md:-inset-1 rounded-full border ${
                isDark ? "border-pink-500/10" : "border-indigo-500"
              }`}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            

            {/* Floating particles around profile */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  isDark ? "bg-yellow-400/40" : "bg-blue-500/40"
                }`}
                style={{
                  width: Math.random() * 8 + 4 + "px",
                  height: Math.random() * 8 + 4 + "px",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 40],
                  x: [0, (Math.random() - 0.5) * 40],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator - only show on larger screens */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Scroll to explore
          </span>
          <ChevronDown 
            size={24} 
            className={isDark ? "text-yellow-400" : "text-blue-600"} 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

// ==================
// 🔠 TypewriterText
// ==================
const TypewriterText = ({ text, speed = 100 }) => {
  const letters = text.split("");
  const totalDuration = (letters.length * speed) / 1000; // seconds

  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * (speed / 1000),
            type: "spring",
            stiffness: 300,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      {/* Blinking cursor that starts AFTER typing finishes */}
      <motion.span
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          delay: totalDuration, // start after typing ends
          duration: 1,
          repeat: Infinity,
        }}
      >
        |
      </motion.span>
    </span>
  );
};


// =====================
// ⏺ HeroButton
// =====================
const HeroButton = ({
  href,
  text,
  icon,
  isDark,
  filled = false,
  download = false,
}) => {
  const baseStyle =
    "px-4 py-2 md:px-6 md:py-3 rounded-xl font-medium flex items-center gap-2 relative overflow-hidden group text-sm md:text-base";
  const filledStyle = isDark
    ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900"
    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white";
  const outlineStyle = isDark
    ? "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
    : "border border-blue-600 text-blue-600 hover:bg-blue-600/10";

  
  return (
    <motion.a
      href={href}
      className={`${baseStyle} ${filled ? filledStyle : outlineStyle}`}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400 }}
      download={download}
    >
      {/* Shine effect on hover */}
      <motion.span
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {text}
      </motion.span>
      
      <motion.span
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {icon}
      </motion.span>
    </motion.a>
  );
};

// Geometric shape components
const Triangle = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,15 85,85 15,85" fill="currentColor" />
  </svg>
);

const CircleShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="40" fill="currentColor" />
  </svg>
);

const Square = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="15" y="15" width="70" height="70" fill="currentColor" />
  </svg>
);