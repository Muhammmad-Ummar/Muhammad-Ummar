import { useState, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkle, ThumbsUp, MessageSquare, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const containerRef = useRef(null);

  const stars = [1, 2, 3, 4, 5];
  const feedbackMessages = {
    1: "We're sorry to hear that. What went wrong?",
    2: "We appreciate your feedback. How can we improve?",
    3: "Thanks for your rating! What could make it better?",
    4: "Glad you liked it! What stood out to you?",
    5: "Wow! We're thrilled you loved it!"
  };

  const handleRating = (star) => {
    setRating(star);
    if (!submitted && star > 0) {
      setSubmitted(true);
    }
  };

  const resetRating = () => {
    setRating(0);
    setHover(0);
    setSubmitted(false);
    setFeedbackText("");
    setShowSuccess(false);
  };

  const handleSubmit = () => {
    // Simulate form submission
    setShowSuccess(true);
    
    // Reset after some time
    setTimeout(() => {
      resetRating();
    }, 5000);
  };

  // Enhanced Firework component with more dynamic properties
  const Firework = ({ x, y, size, color, delay }) => (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        boxShadow: `0 0 20px 5px ${color}`,
      }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ 
        scale: [0, 3, 4],
        opacity: [1, 0.8, 0]
      }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut",
        delay: delay || 0,
        times: [0, 0.7, 1]
      }}
    />
  );

  // Function to generate multiple fireworks
  const generateFireworks = (count) => {
    const fireworks = [];
    for (let i = 0; i < count; i++) {
      const x = `${Math.random() * 100}%`;
      const y = `${Math.random() * 100}%`;
      const size = Math.random() * 15 + 5;
      const colors = ["#ff5722", "#e91e63", "#ffeb3b", "#4caf50", "#2196f3", "#9c27b0", "#00bcd4"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 0.5;
      
      fireworks.push(
        <Firework key={i} x={x} y={y} size={size} color={color} delay={delay} />
      );
    }
    return fireworks;
  };

  // Particle explosion effect for stars
  const StarParticles = ({ count, originX, originY }) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const distance = Math.random() * 100 + 50;
      const duration = Math.random() * 0.5 + 0.5;
      
      particles.push(
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: originX,
            top: originY,
            width: 8,
            height: 8,
          }}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: [1, 0.5, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: duration,
            ease: "easeOut",
          }}
        >
          <Star 
            size={8} 
            fill={isDark ? "#facc15" : "#3b82f6"} 
            color={isDark ? "#facc15" : "#3b82f6"} 
          />
        </motion.div>
      );
    }
    return <>{particles}</>;
  };

  return (
    <section
      id="rating"
      className={`min-h-screen px-4 sm:px-8 py-24 flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
      ref={containerRef}
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkle className="inline mr-2" size={16} />
            </motion.span>
            User Feedback
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
            >
              <Sparkle className="inline ml-2" size={16} />
            </motion.span>
          </motion.span>
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6  ${
              isDark 
              
               ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Share Your Experience
          </motion.h2>
          <motion.div
            className={`h-1 w-20 mx-auto mt-4 rounded-full ${
              isDark
               ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div
          className={`rounded-2xl p-8 sm:p-12 ${
            isDark ? "bg-gray-800" : "bg-white"
          } shadow-xl border ${
            isDark ? "border-gray-700" : "border-gray-200"
          } relative overflow-hidden`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Success message with enhanced fireworks */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Multiple random fireworks */}
                {generateFireworks(15)}
                
                <motion.div
                  className={`p-8 rounded-xl text-center max-w-md ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } relative z-20`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring", damping: 15, delay: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 0.5, repeat: 3 }}
                  >
                    <Sparkle 
                      size={48} 
                      className={`mx-auto mb-4 ${
                        isDark ? "text-yellow-400" : "text-blue-600"
                      }`} 
                      fill="currentColor" 
                    />
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-yellow-400" : "text-blue-600"
                  }`}>
                    Thank You!
                  </h3>
                  <p className={`mb-6 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}>
                    Thanks for your valuable feedback. We appreciate you taking the time to share your experience with us.
                  </p>
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      isDark
                        ? "bg-yellow-600 hover:bg-yellow-700 text-black"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center">
            <motion.h3
              className={`text-2xl font-bold mb-8 flex items-center justify-center ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <MessageSquare className="mr-3" size={24} />
              </motion.span>
              How would you rate your experience?
            </motion.h3>

            <motion.div
              className="flex justify-center gap-1 sm:gap-3 mb-8 relative"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              viewport={{ once: true }}
            >
              {stars.map((star) => (
                <motion.button
                  key={star}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0, y: 10 },
                    visible: { 
                      scale: 1, 
                      opacity: 1, 
                      y: 0,
                      transition: { type: "spring", stiffness: 500, damping: 15 }
                    },
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { type: "spring", stiffness: 500 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      rotate: (hover || rating) >= star ? [0, 10, -10, 0] : 0,
                      scale: (hover || rating) >= star ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star
                      size={48}
                      fill={
                        (hover || rating) >= star
                          ? isDark
                            ? "#facc15"
                            : "#3b82f6"
                          : "none"
                      }
                      color={
                        (hover || rating) >= star
                          ? isDark
                            ? "#facc15"
                            : "#3b82f6"
                          : isDark
                          ? "#4b5563"
                          : "#d1d5db"
                      }
                      strokeWidth={1.5}
                      className="transition-all duration-300"
                    />
                  </motion.div>
                  <AnimatePresence>
                    {star === 5 && rating === 5 && (
                      <motion.span
                        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                          isDark ? "text-yellow-400" : "text-blue-600"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        Excellent!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {rating > 0 ? (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className={`p-6 rounded-xl mb-6 ${
                      isDark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.p
                      className={`text-xl font-semibold mb-2 flex items-center justify-center ${
                        isDark ? "text-yellow-300" : "text-blue-700"
                      }`}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <motion.span
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
                      >
                        <ThumbsUp className="mr-2" size={20} />
                      </motion.span>
                      {feedbackMessages[rating]}
                    </motion.p>
                    <motion.textarea
                      className={`w-full mt-4 p-3 rounded-lg text-sm ${
                        isDark
                          ? "bg-gray-800 border-gray-600 text-gray-200"
                          : "bg-white border-gray-300 text-gray-800"
                      } border focus:outline-none focus:ring-2 ${
                        isDark ? "focus:ring-yellow-500" : "focus:ring-blue-500"
                      }`}
                      placeholder="Share your thoughts (optional)..."
                      rows="3"
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    />
                  </motion.div>

                  <div className="flex justify-center gap-4">
                    <motion.button
                      onClick={handleSubmit}
                      className={`px-6 py-2 rounded-lg font-medium text-sm ${
                        isDark
                          ? "bg-yellow-600 hover:bg-yellow-700 text-black"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      } transition-colors relative overflow-hidden`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
                      />
                      Submit Feedback
                    </motion.button>
                    <motion.button
                      onClick={resetRating}
                      className={`px-6 py-2 rounded-lg font-medium text-sm ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Change Rating
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="prompt"
                  className={`text-lg ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Select a star to rate your experience
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Additional Call-to-Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-sm shadow-lg ${
              isDark
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            } relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
            />
            <motion.span
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mr-2"
            >
              💖
            </motion.span>
            Your feedback means the world to us!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rating;