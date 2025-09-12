import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Code, Cpu, Database, Globe, Layers, Server, Sparkles, Target, Users, BookOpen, Heart } from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const techStack = [
    { 
      name: "Frontend", 
      icon: <Code size={20} className="sm:w-6 sm:h-6" />, 
      items: ["React", "Next.js", "Tailwind CSS"],
      color: isDark ? "from-blue-400 to-cyan-400" : "from-blue-600 to-cyan-600"
    },
    { 
      name: "Backend", 
      icon: <Server size={20} className="sm:w-6 sm:h-6" />, 
      items: ["Node.js", "Express", "MongoDB"],
      color: isDark ? "from-green-400 to-emerald-400" : "from-green-600 to-emerald-600"
    },
    { 
      name: "Tools", 
      icon: <Layers size={20} className="sm:w-6 sm:h-6" />, 
      items: ["Git", "Docker", "AWS"],
      color: isDark ? "from-purple-400 to-pink-400" : "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center px-3 sm:px-6 py-16 sm:py-24 overflow-hidden transition-all duration-500 ${
        isDark 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
          : "bg-gradient-to-br from-white via-blue-50 to-white"
      }`}
    >
      {/* Animated background particles - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-yellow-400/20" : "bg-blue-500/20"
            }`}
            style={{
              width: Math.random() * 10 + 3,
              height: Math.random() * 10 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Pulsing circles - smaller on mobile */}
      <motion.div
        className={`absolute rounded-full opacity-5 ${
          isDark ? "bg-yellow-400" : "bg-blue-500"
        }`}
        style={{
          width: 200,
          height: 200,
          top: '15%',
          left: '5%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute rounded-full opacity-5 ${
          isDark ? "bg-purple-500" : "bg-indigo-500"
        }`}
        style={{
          width: 300,
          height: 300,
          bottom: '10%',
          right: '5%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span
            className={`text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 inline-flex items-center gap-2 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
             
            </motion.span>
            Get To Know Me
          </motion.span>
          
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6  ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className={`h-1 w-16 sm:w-24 mx-auto rounded-full ${
              isDark
               ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 relative overflow-hidden ${
                isDark ? "bg-gray-800/80 backdrop-blur-sm" : "bg-white/90 backdrop-blur-sm"
              } shadow-lg border ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background pattern */}
              <div className={`absolute inset-0 opacity-5 ${
                isDark 
                  ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 to-transparent" 
                  : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"
              }`} />
              
              <motion.h3
                className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3 ${
                  isDark ? "text-yellow-400" : "text-blue-600"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  👋
                </motion.span>
                Who I Am
              </motion.h3>
              
              <motion.p
                className={`text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 relative z-10 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Hello! I'm <span className="font-bold text-blue-500 dark:text-yellow-400">Muhammad Ummar</span>, 
                a passionate <span className="font-semibold">Full Stack Developer</span> with over 2 years of 
                experience crafting digital solutions that make a difference.
              </motion.p>
              
              <motion.p
                className={`text-sm sm:text-base md:text-lg leading-relaxed relative z-10 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                I thrive on transforming complex ideas into elegant, user-friendly applications. 
                My passion lies in creating seamless digital experiences that solve real-world 
                problems through clean code and innovative thinking.
              </motion.p>

              {/* Floating elements */}
              <motion.div
                className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  isDark ? "bg-yellow-400" : "bg-blue-500"
                }`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.span>
              My Tech Stack
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {techStack.map((category, i) => (
                <motion.div
                  key={category.name}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border relative overflow-hidden group ${
                    isDark 
                      ? "bg-gray-800/80 border-gray-700 hover:bg-gray-700/50" 
                      : "bg-white/90 border-gray-200 hover:bg-white"
                  } backdrop-blur-sm shadow-sm flex flex-col items-center transition-all duration-300`}
                  whileHover={{ scale: 1.03, y: -3 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${category.color} transition-opacity duration-300`} />
                  
                  <motion.div 
                    className={`p-2 sm:p-3 rounded-full mb-2 sm:mb-3 relative z-10 ${
                      isDark 
                        ? "bg-gray-700 text-yellow-400" 
                        : "bg-blue-100 text-blue-600"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h4 className={`font-bold mb-1 sm:mb-2 text-sm sm:text-base relative z-10 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}>
                    {category.name}
                  </h4>
                  <ul className="text-center relative z-10">
                    {category.items.map((item, j) => (
                      <motion.li
                        key={j}
                        className={`text-xs sm:text-sm mb-1 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 + j * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="mt-14 sm:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h3 
            className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💡
            </motion.span>
            My Development Philosophy
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Clean Code",
                desc: "Writing maintainable, well-structured code with proper documentation and following best practices.",
                icon: <BookOpen size={20} className="sm:w-6 sm:h-6" />,
                color: isDark ? "text-blue-400" : "text-blue-600"
              },
              {
                title: "User Focus",
                desc: "Building intuitive interfaces with exceptional UX that solve real user problems effectively.",
                icon: <Users size={20} className="sm:w-6 sm:h-6" />,
                color: isDark ? "text-green-400" : "text-green-600"
              },
              {
                title: "Passion Driven",
                desc: "Constantly learning and staying current with emerging technologies to deliver innovative solutions.",
                icon: <Heart size={20} className="sm:w-6 sm:h-6" />,
                color: isDark ? "text-pink-400" : "text-pink-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border relative overflow-hidden group ${
                  isDark 
                    ? "bg-gray-800/60 border-gray-700" 
                    : "bg-white/90 border-gray-200"
                } backdrop-blur-sm shadow-sm`}
                whileHover={{ y: -3, scale: 1.01 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Hover effect background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 ${
                  isDark ? "bg-white" : "bg-gray-900"
                } transition-opacity duration-300`} />
                
                <motion.div 
                  className={`p-2 sm:p-3 rounded-full mb-3 sm:mb-4 inline-flex ${item.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}>
                  {item.title}
                </h4>
                <p className={`text-xs sm:text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className={`text-sm sm:text-base mb-4 sm:mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Interested in working together?
          </motion.p>
          <motion.a
            href="#contact"
            className={`inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all ${
              isDark
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-600 hover:to-yellow-700"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
            }`}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;