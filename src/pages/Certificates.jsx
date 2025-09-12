import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const certificates = [
  {
    title: "Advanced React Developer",
    issuer: "Meta",
    date: "June 2023",
    skills: ["React Hooks", "Context API", "Performance Optimization"],
    link: "#",
    image: "/certificates/react-cert.jpg",
    ribbonColor: "bg-yellow-500"
  },
  {
    title: "Full Stack Web Development",
    issuer: "University of London",
    date: "March 2023",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    link: "#",
    image: "/certificates/fullstack-cert.jpg",
    ribbonColor: "bg-blue-500"
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "January 2023",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    link: "#",
    image: "/certificates/js-algos-cert.jpg",
    ribbonColor: "bg-purple-500"
  },
  {
    title: "Responsive Web Design",
    issuer: "Google",
    date: "November 2022",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    link: "#",
    image: "/certificates/responsive-cert.jpg",
    ribbonColor: "bg-green-500"
  }
];

const Certificates = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: { y: 80, opacity: 0, rotate: -2 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 15,
        mass: 0.5
      }
    },
    hover: {
      y: -10,
      rotate: 0.5,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const floatingAnim = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const shimmerAnim = {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section
      id="certificates"
      className={`py-20 px-4 sm:px-8 relative overflow-hidden ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full blur-xl opacity-20"
        animate={floatingAnim}
        style={{
          backgroundColor: isDark ? "#F59E0B" : "#3B82F6",
          scale: 1.5
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full blur-xl opacity-15"
        animate={{
          ...floatingAnim,
          y: [0, -25, 0]
        }}
        style={{
          backgroundColor: isDark ? "#F59E0B" : "#3B82F6",
          scale: 1.8
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
            initial={{ letterSpacing: "0.2em", opacity: 0.5 }}
            whileInView={{ 
              letterSpacing: "0.05em",
              opacity: 1,
              transition: { duration: 1.2 }
            }}
            viewport={{ once: true }}
          >
            CERTIFIC<span className={isDark ? "text-yellow-400" : "text-blue-600"}>ATIONS</span>
          </motion.h2>
          <motion.div 
            className={`w-32 h-1 mx-auto ${isDark ? "bg-yellow-500" : "bg-blue-600"} relative overflow-hidden`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`absolute inset-0 ${isDark ? "bg-yellow-400" : "bg-blue-400"} opacity-70`}
              animate={shimmerAnim}
              style={{
                background: `linear-gradient(90deg, transparent, ${isDark ? "rgba(245, 158, 11, 0.7)" : "rgba(59, 130, 246, 0.7)"}, transparent)`,
                backgroundSize: "200% 100%"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover="hover"
              className={`rounded-xl overflow-hidden shadow-2xl ${isDark ? "bg-gray-800" : "bg-white"} border ${isDark ? "border-gray-700" : "border-gray-200"} relative group`}
              style={{
                boxShadow: isDark 
                  ? "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 5px 10px -5px rgba(245, 158, 11, 0.1)"
                  : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(59, 130, 246, 0.2)"
              }}
            >
              {/* Ribbon effect */}
              <div className={`absolute top-0 right-6 w-2 h-24 ${cert.ribbonColor} transform -translate-y-1/2`} 
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)" }} />
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${isDark ? "bg-yellow-400" : "bg-blue-400"} blur-md`} />
              
              <div className="h-48 overflow-hidden relative">
                <motion.img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-gray-900/80 to-transparent" : "from-white/80 to-transparent"}`} />
              </div>
              
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3 
                    className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} group-hover:underline`}
                    whileHover={{ x: 3 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.span 
                    className={`text-sm ${isDark ? "text-yellow-400" : "text-blue-600"} font-medium px-2 py-1 rounded-full ${isDark ? "bg-gray-700" : "bg-blue-50"}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.date}
                  </motion.span>
                </div>
                
                <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Issued by <span className="font-medium">{cert.issuer}</span>
                </p>
                
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Skills Demonstrated:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${isDark ? "bg-gray-700 text-yellow-400" : "bg-blue-100 text-blue-800"}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm font-medium ${isDark ? "text-yellow-400 hover:text-yellow-300" : "text-blue-600 hover:text-blue-500"} group/link`}
                  whileHover={{ x: 5 }}
                >
                  View Certificate
                  <motion.svg 
                    className="w-4 h-4 ml-2"
                    animate={{
                      x: [0, 4, 0],
                      transition: { 
                        duration: 1.5,
                        repeat: Infinity 
                      }
                    }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </motion.svg>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? "bg-yellow-400" : "bg-blue-600"} group-hover/link:w-full transition-all duration-300`} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className={`inline-flex items-center px-8 py-4 rounded-full font-medium relative overflow-hidden ${isDark ? "bg-yellow-500/10 border border-yellow-400/30 text-yellow-400" : "bg-blue-600/10 border border-blue-500/30 text-blue-600"} group/button`}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: isDark ? "rgba(245, 158, 11, 0.15)" : "rgba(59, 130, 246, 0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            animate={{
              y: [0, -8, 0],
              transition: { repeat: Infinity, duration: 6 }
            }}
          >
            <span className="relative z-10">View All Certifications</span>
            <motion.svg 
              className="w-5 h-5 ml-3 relative z-10" 
              animate={{
                y: [0, -3, 0],
                transition: { 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </motion.svg>
            
            {/* Button shine effect */}
            <motion.div
              className={`absolute inset-0 ${isDark ? "bg-yellow-400/20" : "bg-blue-400/20"} opacity-0 group-hover/button:opacity-100`}
              animate={shimmerAnim}
              style={{
                background: `linear-gradient(90deg, transparent, ${isDark ? "rgba(245, 158, 11, 0.3)" : "rgba(59, 130, 246, 0.3)"}, transparent)`,
                backgroundSize: "200% 100%"
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;