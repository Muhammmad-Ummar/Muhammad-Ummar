import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun, X, Menu, Sparkles, Mail } from "lucide-react";

const links = ["Home", "About", "Education", "Skills", "Projects"];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navRef = useRef(null);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Detect scroll for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      // Find active section based on scroll position
      const sections = links.map(link => document.getElementById(link.toLowerCase()));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveLink(links[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.32, 0.72, 0, 1]
      }
    }
  };

  const mobileItemVariants = {
    closed: { 
      x: 50, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    initial: { 
      boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
      scale: 1 
    },
    hover: {
      scale: 1.05,
      boxShadow: theme === "dark" 
        ? "0 6px 20px rgba(255, 215, 0, 0.25)" 
        : "0 6px 20px rgba(0, 120, 255, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* NavBar */}
      <motion.nav
        ref={navRef}
        className={`w-full top-0 left-0 z-50 fixed backdrop-blur-lg border-b transition-all duration-500 ${
          theme === "dark"
            ? "border-gray-800 text-white"
            : "border-gray-200 text-gray-800"
        } ${scrolled ? "py-2 bg-opacity-95 shadow-lg" : "py-4 bg-opacity-80"} ${
          theme === "dark" 
            ? scrolled ? "bg-gray-900/95" : "bg-gray-900/80" 
            : scrolled ? "bg-white/95" : "bg-white/80"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 20,
          duration: 0.6
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <motion.span
              variants={floatingVariants}
              animate="animate"
              className="mr-2"
            >
            
            </motion.span>
            <motion.h1
              className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"
              }`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 1 }
              }}
            >
              MyPortfolio
            </motion.h1>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div 
            className="hidden md:flex items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, idx) => (
              <motion.div
                key={idx}
                className="relative"
                onMouseEnter={() => setHoveredLink(idx)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <motion.a
                  href={`#${link.toLowerCase()}`}
                  className={`relative font-medium group py-2 transition-all duration-300 ${
                    activeLink === link 
                      ? theme === "dark" ? "text-yellow-400" : "text-blue-600"
                      : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      theme === "dark" 
                        ? activeLink === link 
                          ? "bg-yellow-400" 
                          : "bg-gradient-to-r from-yellow-400 to-pink-500" 
                        : activeLink === link 
                          ? "bg-blue-600" 
                          : "bg-gradient-to-r from-blue-600 to-cyan-500"
                    }`}
                    initial={{ width: activeLink === link ? "100%" : 0 }}
                    animate={{ width: hoveredLink === idx || activeLink === link ? "100%" : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              </motion.div>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full relative overflow-hidden group "
              title="Toggle Theme"
              
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className={`absolute inset-0 rounded-full ${
                  theme === "dark" 
                    ? "bg-yellow-400/10 group-hover:bg-yellow-400/20" 
                    : "bg-blue-400/10 group-hover:bg-blue-400/20"
                }`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {theme === "dark" ? (
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sun className="text-yellow-400" size={20} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: -15, scale: 1 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Moon className="text-blue-600" size={20} />
                </motion.div>
              )}
            </motion.button>
            
            <motion.a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-full font-semibold relative overflow-hidden group flex items-center gap-2"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail size={16} />
              </motion.span>
              <span className="relative z-10">Hire Me</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:from-yellow-300 group-hover:to-yellow-400 rounded-full"
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: 0.9,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 rounded-full"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.div 
            className="md:hidden flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full relative overflow-hidden group"
              title="Toggle Theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className={`absolute inset-0 rounded-full ${
                  theme === "dark" 
                    ? "bg-yellow-400/10 group-hover:bg-yellow-400/20" 
                    : "bg-blue-400/10 group-hover:bg-blue-400/20"
                }`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {theme === "dark" ? (
                <Sun className="text-yellow-400" size={20} />
              ) : (
                <Moon className="text-blue-600" size={20} />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-full relative overflow-hidden ${
                theme === "dark" 
                  ? "text-white hover:bg-gray-700/30" 
                  : "text-gray-800 hover:bg-gray-200/50"
              } transition`}
              aria-label="Toggle Menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className={`absolute inset-0 rounded-full ${
                  theme === "dark" 
                    ? "bg-gray-700/30" 
                    : "bg-gray-200/50"
                }`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Side Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.2 } }}
              className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            
            <motion.div
              className={`fixed right-0 top-0 h-full w-80 z-50 flex flex-col items-center justify-center space-y-8 ${
                theme === "dark" 
                  ? "bg-gradient-to-b from-gray-900 to-gray-800" 
                  : "bg-gradient-to-b from-white to-gray-100"
              } shadow-2xl`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <motion.button
                onClick={() => setOpen(false)}
                className={`absolute top-6 right-6 p-2 rounded-full ${
                  theme === "dark" 
                    ? "text-white hover:bg-gray-800/30" 
                    : "text-gray-800 hover:bg-gray-200/50"
                }`}
                aria-label="Close Menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <X size={28} />
              </motion.button>
              
              {links.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={`#${link.toLowerCase()}`}
                  className={`text-2xl font-bold transition-colors relative group ${
                    theme === "dark" 
                      ? activeLink === link ? "text-yellow-400" : "text-white hover:text-yellow-400"
                      : activeLink === link ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setActiveLink(link);
                  }}
                  variants={mobileItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-1 ${
                      theme === "dark" 
                        ? "bg-gradient-to-r from-yellow-400 to-pink-500" 
                        : "bg-gradient-to-r from-blue-600 to-cyan-500"
                    }`}
                    initial={{ width: activeLink === link ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.a
                href="#contact"
                className="relative overflow-hidden group px-8 py-3.5 rounded-full text-center mt-6 flex items-center gap-2"
                onClick={() => setOpen(false)}
                variants={mobileItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                <span className="relative z-10 font-bold text-black">Hire Me</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                  initial={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;