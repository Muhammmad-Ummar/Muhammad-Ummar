import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { ExternalLink, Github, Eye, Zap, Wifi, WifiOff } from "lucide-react";

const ProjectCard = ({ title, description, image, link, tags = [], index, isDark, isLive = false, githubLink }) => {
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 12,
        delay: 0.2 + index * 0.05
      }
    },
    hover: {
      y: -2,
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const buttonArrowAnim = {
    x: [0, 4, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Enhanced status animations
  const statusVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.1 + index * 0.08,
        type: "spring",
        stiffness: 600,
        damping: 15
      }
    }
  };

  // Advanced live status animation
  const livePulseAnim = {
    scale: [1, 1.06, 1],
    boxShadow: [
      "0 0 0 0 rgba(74, 222, 128, 0)",
      "0 0 0 4px rgba(74, 222, 128, 0.3)",
      "0 0 0 0 rgba(74, 222, 128, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  // Offline status animation
  const offlinePulseAnim = {
    scale: [1, 1.04, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Signal waves animation
  const signalAnim = {
    scale: [1, 1.8, 1],
    opacity: [0.5, 0, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
      delay: 0.5
    }
  };

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden h-full flex flex-col group ${
        isDark ? "bg-gray-800/80" : "bg-white/90"
      } shadow-lg hover:shadow-xl transition-all duration-300 border ${
        isDark ? "border-gray-700/40" : "border-gray-200/60"
      } backdrop-blur-sm`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-30px" }}
      style={{
        boxShadow: isDark 
          ? "0 8px 25px -8px rgba(0, 0, 0, 0.3)" 
          : "0 8px 25px -8px rgba(0, 0, 0, 0.1)"
      }}
    >
      {/* Professional Status Indicator */}
      <motion.div 
        className={`absolute top-2 left-2 md:top-3 md:left-3 z-20 flex items-center gap-1 md:gap-2 px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${
          isLive 
            ? (isDark ? "bg-green-500/95 text-black" : "bg-green-100/95 text-green-800") 
            : (isDark ? "bg-gray-600/95 text-gray-300" : "bg-gray-200/95 text-gray-600")
        } backdrop-blur-md border ${
          isLive 
            ? (isDark ? "border-green-400/50" : "border-green-300/40") 
            : (isDark ? "border-gray-500/40" : "border-gray-300/40")
        }`}
        variants={statusVariants}
        initial="hidden"
        whileInView="visible"
        animate={isLive ? livePulseAnim : offlinePulseAnim}
      >
        {/* Animated icon */}
        <motion.div
          animate={isLive ? { rotate: [0, 10, -10, 0] } : { rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isLive ? (
            <Wifi size={10} className="fill-current" />
          ) : (
            <WifiOff size={10} />
          )}
        </motion.div>
        
        <span className="text-[10px] md:text-xs font-semibold">
          {isLive ? "LIVE" : "OFFLINE"}
        </span>

        {/* Signal waves for live status */}
        {isLive && (
          <div className="absolute -inset-1 md:-inset-1.5 rounded-full pointer-events-none overflow-hidden">
            <motion.span 
              className="absolute inset-0 rounded-full border border-green-400/50"
              animate={signalAnim}
            />
          </div>
        )}
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div 
        className={`absolute inset-0 rounded-xl opacity-0 ${
          isDark ? "bg-blue-400/10" : "bg-blue-500/5"
        } blur-xl`}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Image container */}
      <motion.div 
        className="relative overflow-hidden h-28 md:h-36"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDark ? "from-gray-900/70 via-gray-900/20" : "from-white/70 via-white/20"
        } to-transparent`} />
        
        {/* Hover overlay with buttons */}
        <motion.div 
          className="absolute inset-0 bg-black/50 opacity-0 flex items-center justify-center gap-1 md:gap-2"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="View Live Demo"
            >
              <Eye size={14} className="text-white" />
            </motion.a>
          )}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="View Source Code"
            >
              <Github size={14} className="text-white" />
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="p-2 md:p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <motion.h3 
            className={`text-sm md:text-lg font-semibold mb-1 md:mb-2 line-clamp-1 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className={`text-xs md:text-sm mb-2 md:mb-3 line-clamp-2 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        {tags.length > 0 && (
          <div className="mb-2 md:mb-3 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, i) => (
              <motion.span
                key={i}
                className={`text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${
                  isDark 
                    ? "bg-gray-700/50 text-gray-300 border border-gray-600/50" 
                    : "bg-gray-100 text-gray-700 border border-gray-200/50"
                }`}
                variants={tagVariants}
                whileHover="hover"
              >
                {tag}
              </motion.span>
            ))}
            {tags.length > 3 && (
              <span className={`text-[10px] md:text-xs px-1.5 py-0.5 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}>
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-1 md:gap-2">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center px-2 py-1.5 md:px-3 md:py-2 rounded-lg text-[10px] md:text-xs font-medium transition relative overflow-hidden ${
                isDark
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Demo</span>
              <motion.span 
                className="ml-0.5 md:ml-1 relative z-10"
                animate={buttonArrowAnim}
              >
                <ExternalLink size={10} />
              </motion.span>
            </motion.a>
          )}
          
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1.5 md:p-2 rounded-lg border text-[10px] md:text-xs font-medium transition-colors ${
                isDark
                  ? "bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-gray-600/70"
                  : "bg-gray-100 text-gray-700 border-gray-200/50 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={10} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Accent border animation */}
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
          isDark ? "bg-blue-500" : "bg-blue-400"
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: index * 0.08 + 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ProjectCard;