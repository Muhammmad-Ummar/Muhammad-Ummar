import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Code, Database, Cpu, Cloud, GitBranch, Palette, Terminal, Server, Zap, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 95, icon: <Palette size={16} /> },
  { name: "JavaScript", level: 90, icon: <Zap size={16} /> },
  { name: "React.js", level: 88, icon: <Code size={16} /> },
  { name: "Node.js", level: 85, icon: <Server size={16} /> },
  { name: "MongoDB", level: 80, icon: <Database size={16} /> },
  { name: "Git", level: 90, icon: <GitBranch size={16} /> },
  { name: "Tailwind", level: 92, icon: <Sparkles size={16} /> },
  { name: "Python", level: 70, icon: <Terminal size={16} /> },
  { name: "C++", level: 90, icon: <Cpu size={16} /> },
  { name: "AWS", level: 75, icon: <Cloud size={16} /> }
];

const coreConcepts = [
  { name: "OOP Principles", icon: "🧩" },
  { name: "Data Structures", icon: "📊" },
  { name: "Algorithms", icon: "🧠" },
  { name: "Design Patterns", icon: "🎭" },
  { name: "REST APIs", icon: "🔌" },
  { name: "MVC Architecture", icon: "🏗️" }
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const conceptItem = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  const progressPulse = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="skills"
      className={`min-h-screen py-8 md:py-16 px-4 sm:px-6 relative overflow-hidden ${
        isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-yellow-400/10" : "bg-blue-500/10"
            }`}
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              rotate: [0, 360],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className={`text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 md:mb-4 inline-flex items-center gap-1 md:gap-2 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={14} />
            Technical Expertise
          </motion.span>
          
          <motion.h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${
              isDark 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div
            className={`w-16 md:w-24 h-0.5 md:h-1 mx-auto rounded-full ${
              isDark ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          {/* Technical Skills - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className={`p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm ${
              isDark ? "bg-gray-800/70 border border-gray-700/50" : "bg-white/80 border border-gray-200/50"
            } shadow-lg md:shadow-xl`}
          >
            <motion.h3 
              className={`text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Code size={18} className="md:size-6" />
              Technical Proficiency
            </motion.h3>
            
            <motion.div 
              className="space-y-3 md:space-y-5"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="group relative"
                >
                  <div className="flex items-center mb-2 md:mb-3">
                    <motion.div 
                      className={`p-1 md:p-2 rounded-md md:rounded-lg mr-2 md:mr-3 ${
                        isDark ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-600/20 text-blue-600"
                      }`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className={`text-xs md:text-sm font-medium flex-grow ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      {skill.name}
                    </span>
                    <span className={`text-xs md:text-sm font-bold ${isDark ? "text-yellow-400" : "text-blue-600"}`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className={`h-1.5 md:h-2.5 rounded-full overflow-hidden ${
                    isDark ? "bg-gray-700/50" : "bg-gray-200/70"
                  } relative`}>
                    <motion.div
                      className={`h-full rounded-full relative ${
                        isDark ? "bg-gradient-to-r from-yellow-500 to-yellow-600" : "bg-gradient-to-r from-blue-600 to-indigo-600"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.15,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                      viewport={{ once: true }}
                      animate={progressPulse}
                    >
                      {/* Progress bar shine */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                        style={{
                          background: "linear-gradient(90deg, transparent, white, transparent)"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Core Concepts - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className={`p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm ${
              isDark ? "bg-gray-800/70 border border-gray-700/50" : "bg-white/80 border border-gray-200/50"
            } shadow-lg md:shadow-xl`}
          >
            <motion.h3 
              className={`text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 md:gap-3 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Cpu size={18} className="md:size-6" />
              Core Concepts
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 gap-2 md:gap-4"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {coreConcepts.map((concept, index) => (
                <motion.div
                  key={index}
                  variants={conceptItem}
                  whileHover="hover"
                  className={`p-2 md:p-4 rounded-lg md:rounded-xl border text-center group relative overflow-hidden ${
                    isDark 
                      ? "bg-gray-700/30 border-gray-600/50 hover:border-yellow-400/50" 
                      : "bg-white/50 border-gray-200/70 hover:border-blue-500/50"
                  } transition-all backdrop-blur-sm`}
                >
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 ${
                    isDark ? "bg-yellow-400" : "bg-blue-400"
                  } transition-opacity duration-300 rounded-lg md:rounded-xl`} />
                  
                  <motion.span 
                    className="text-xl md:text-2xl mb-1 md:mb-2 block"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      transition: { 
                        duration: 4,
                        delay: index * 0.5,
                        repeat: Infinity 
                      }
                    }}
                  >
                    {concept.icon}
                  </motion.span>
                  <span className={`text-xs md:text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {concept.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Continuous Learning Badge */}
            <motion.div 
              className="mt-4 md:mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-full font-medium relative overflow-hidden group ${
                  isDark 
                    ? "bg-yellow-500/15 text-yellow-400 border border-yellow-400/30" 
                    : "bg-blue-600/15 text-blue-600 border border-blue-500/30"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  y: [0, -3, 0],
                  transition: { repeat: Infinity, duration: 4 }
                }}
              >
                <motion.span 
                  className="mr-1 md:mr-2 text-sm"
                  animate={{ 
                    rotate: [0, 15, 0],
                    transition: { repeat: Infinity, duration: 6 }
                  }}
                >
                  📚
                </motion.span>
                Continuous Learning
                
                {/* Button shine effect */}
                <motion.div
                  className={`absolute inset-0 ${
                    isDark ? "bg-yellow-400/20" : "bg-blue-400/20"
                  } opacity-0 group-hover:opacity-100`}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;