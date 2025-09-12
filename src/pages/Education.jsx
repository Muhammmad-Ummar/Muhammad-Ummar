import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="education"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-300 text-gray-800"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span 
            className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Academic Background
          </motion.span>
          
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Educational Journey
          </motion.h2>
          
          <motion.div 
            className={`h-1 w-16 sm:w-20 mx-auto mt-4 rounded-full ${
              isDark 
             ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Education Card */}
        <motion.div
          className={`rounded-xl overflow-hidden border ${
            isDark
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          } shadow-lg mx-auto`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Icon Header */}
          <motion.div 
            className={`p-1 ${isDark ? "bg-gray-700" : "bg-gray-100"}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className={`text-4xl p-4 rounded-lg flex items-center justify-center ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              animate={{ 
                rotate: [0, -5, 0, 5, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              🎓
            </motion.div>
          </motion.div>
          
          {/* Card Content */}
          <div className="p-6 md:p-8">
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-4 md:mb-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-1 ${
                  isDark ? "text-yellow-400" : "text-blue-600"
                }`}>
                  BS Software Engineering
                </h3>
                <p className="font-medium text-lg">University of Central Punjab</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${
                  isDark ? "bg-gray-700 text-yellow-400" : "bg-blue-100 text-blue-800"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                Current Student
              </motion.div>
            </motion.div>

            {/* Details Grid */}
            <motion.div 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex items-start">
                  <span className={`mr-3 text-lg mt-0.5 ${
                    isDark ? "text-yellow-400" : "text-blue-600"
                  }`}>📅</span>
                  <div>
                    <p className="text-sm font-medium opacity-80">Duration</p>
                    <p>2022 - Present</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <span className={`mr-3 text-lg mt-0.5 ${
                    isDark ? "text-yellow-400" : "text-blue-600"
                  }`}>📚</span>
                  <div>
                    <p className="text-sm font-medium opacity-80">Current Semester</p>
                    <p>7th Semester</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex items-start">
                  <span className={`mr-3 text-lg mt-0.5 ${
                    isDark ? "text-yellow-400" : "text-blue-600"
                  }`}>📊</span>
                  <div>
                    <p className="text-sm font-medium opacity-80">Current CGPA</p>
                    <p>3.60 / 4.0</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <span className={`mr-3 text-lg mt-0.5 ${
                    isDark ? "text-yellow-400" : "text-blue-600"
                  }`}>🏆</span>
                  <div>
                    <p className="text-sm font-medium opacity-80">Achievement</p>
                    <p>Dean's List Honors</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Coursework Section */}
            <motion.div 
              className={`mt-8 pt-6 border-t ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-sm font-semibold mb-4 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}>
                KEY COURSEWORK:
              </h4>
              
              <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Data Structures & Algorithms",
                  "Software Design & Architecture",
                  "Database Systems",
                  "Operating Systems",
                  "Computer Networks",
                  "Web Technologies",
                  "Software Engineering",
                  "Artificial Intelligence"
                ].map((course, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className={`inline-block mr-2 mt-1 ${
                      isDark ? "text-yellow-400" : "text-blue-500"
                    }`}>•</span>
                    <span className="text-sm">{course}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-sm ${
              isDark 
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black" 
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            } shadow-lg`}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Pursuing Excellence in Software Engineering</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;