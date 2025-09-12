import { motion } from "framer-motion";
import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUpRight, Sparkles } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={20} />,
    url: "https://github.com/Muhammmad-Ummar",
    label: "GitHub",
    color: "hover:text-purple-500 dark:hover:text-purple-400",
    bgGradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/muhammad-ummar1",
    label: "LinkedIn",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
    bgGradient: "from-blue-600 to-sky-600"
  },
  {
    icon: <Twitter size={20} />,
    url: "https://x.com/UmmarMughal48",
    label: "Twitter",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
    bgGradient: "from-sky-500 to-blue-500"
  },
  {
    icon: <Mail size={20} />,
    url: "mailto:ummarmughal48@gmail.com",
    label: "Email",
    color: "hover:text-red-500 dark:hover:text-red-400",
    bgGradient: "from-red-500 to-pink-500"
  },
];

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden border-t transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-gray-700 text-gray-300"
          : "bg-gradient-to-b from-white via-gray-50 to-white border-gray-200 text-gray-700"
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(234, 179, 8, 0.4) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0,0,0,0) 70%)"
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, 15, -5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(0,0,0,0) 70%)"
        }}
        animate={{
          x: [0, -20, 10, 0],
          y: [0, -15, 5, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              isDark ? "bg-yellow-400" : "bg-blue-500"
            }`}
            style={{
              width: "1px",
              height: "100%",
              left: `${i * 5}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              isDark ? "bg-yellow-400" : "bg-blue-500"
            }`}
            style={{
              height: "1px",
              width: "100%",
              top: `${i * 5}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2 + 1,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isDark ? "bg-yellow-400/30" : "bg-blue-500/30"
          }`}
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%"
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 60],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8
          }}
        />
      ))}

      {/* Sparkle elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 180],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          <Sparkles size={14} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo & Tagline */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
                isDark
                  ? "bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-blue-600 via-green-500 to-emerald-500 text-transparent bg-clip-text"
              }`}
              whileHover={{ 
                scale: 1.02,
                backgroundPosition: "100%"
              }}
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "0% 0%",
                transition: "background-position 0.8s ease"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Muhammad Ummar
            </motion.h2>
            
            <motion.p
              className="flex items-center text-sm md:text-base mb-4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Crafted with <Heart size={18} className="mx-1.5 fill-red-500 text-red-500 animate-pulse" /> and React
            </motion.p>
            
            <motion.div
              className={`mt-2 h-1 w-24 rounded-full ${
                isDark ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-green-500"
              }`}
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.button
              onClick={scrollToTop}
              className={`mt-6 flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:text-yellow-400"
                  : "bg-white hover:bg-gray-100 border border-gray-200 hover:text-blue-600"
              } shadow-sm group/button relative overflow-hidden`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              Back to top
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="text-lg md:text-xl font-semibold mb-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Let's Connect
              <motion.span 
                className={`block h-0.5 mt-1 ${
                  isDark ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-green-500"
                }`}
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4">
              {socialLinks.map(({ icon, url, label, color, bgGradient }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                      : "bg-white hover:bg-gray-100 border border-gray-200"
                  } ${color} shadow-sm hover:shadow-lg group relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: isDark 
                      ? "0 10px 25px -5px rgba(250, 204, 21, 0.2)"
                      : "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={label}
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0,
                    rotate: 0,
                  } : {}}
                  transition1={{ 
                    delay: index * 0.1 + 0.4,
                    type: "spring",
                    stiffness: 500
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-xl opacity-0 group-hover:opacity-10 -z-10`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {icon}
                  </motion.div>
                  
                  <motion.span 
                    className={`absolute -bottom-6 text-xs font-medium opacity-0 group-hover:opacity-100 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {label}
                  </motion.span>
                  
                  {/* Hover shine effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t text-center text-sm flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div 
            className={`h-px w-40 mb-6 ${
              isDark ? "bg-gradient-to-r from-transparent via-yellow-400 to-transparent" 
                    : "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            }`}
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          
          <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              © {new Date().getFullYear()} Muhammad Ummar
            </motion.span>
            <span className="hidden sm:inline opacity-50">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              All rights reserved
            </motion.span>
            <span className="hidden sm:inline opacity-50">|</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="flex items-center"
            >
              Made with passion
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="ml-1"
              >
                ✨
              </motion.div>
            </motion.span>
          </p>
          
          <motion.p
            className="mt-4 text-xs opacity-70 flex items-center gap-1"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>Last updated:</span>
            <span className="font-medium">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;