import emailjs from "emailjs-com";
import { useContext, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Send, MessageSquare, Mail, User, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    emailjs.send(
      "service_4cvf04q",
      "template_3lt9puk",
      formData,
      "loPRsNWVd_QjgnIG1"
    ).then(() => {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    }).catch(() => {
      setStatus("❌ Failed to send message. Please try again.");
      setIsSubmitting(false);
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonArrowAnim = {
    x: [0, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-12 md:py-24 px-4 sm:px-6 transition-colors duration-500 ${
        isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
    >
      {/* Background elements - Reduced number on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-10 ${
              isDark ? "bg-yellow-400" : "bg-blue-500"
            }`}
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className={`text-sm font-semibold tracking-wider uppercase mb-3 inline-flex items-center gap-2 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MessageSquare size={16} />
            Let's Connect
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
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className={`h-1 w-16 md:w-20 mx-auto mt-4 rounded-full ${
              isDark ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="flex flex-col lg:grid gap-8 md:gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div 
            className="space-y-4 md:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
              variants={itemVariants}
            >
              <Mail size={20} className="hidden sm:block" />
              Contact Information
            </motion.h3>

            {/* Contact Cards - Grid layout for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  href: "tel:+923269464890",
                  icon: <FaPhoneAlt size={18} />,
                  title: "Phone",
                  subtitle: "+92 326 9464890",
                  color: isDark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"
                },
                {
                  href: "mailto:ummarmughal48@gmail.com",
                  icon: <FaEnvelope size={18} />,
                  title: "Email",
                  subtitle: "ummarmughal48@gmail.com",
                  color: isDark ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"
                },
                {
                  href: "https://www.linkedin.com/in/muhammad-ummar1",
                  icon: <FaLinkedin size={18} />,
                  title: "LinkedIn",
                  subtitle: "Muhammad Ummar",
                  color: isDark ? "bg-blue-600/20 text-blue-300" : "bg-blue-100 text-blue-600"
                },
                {
                  href: "https://wa.me/923269464890?text=Hello%20Ummar,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
                  icon: <FaWhatsapp size={18} />,
                  title: "WhatsApp",
                  subtitle: "+92 326 9464890",
                  color: isDark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={itemVariants}
                  className={`flex items-center p-4 md:p-5 rounded-xl md:rounded-2xl transition-all group backdrop-blur-sm ${
                    isDark 
                      ? "bg-gray-800/70 hover:bg-gray-700/70 border border-gray-700/50" 
                      : "bg-white/80 hover:bg-white border border-gray-200/50"
                  } shadow-lg`}
                  whileHover="hover"
                  variants1={cardHoverVariants}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div 
                    className={`p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4 ${item.color} group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1 overflow-hidden">
                    <p className={`text-xs md:text-sm font-medium ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {item.title}
                    </p>
                    <p className={`text-sm md:text-base font-semibold truncate ${
                      isDark ? "text-white group-hover:text-yellow-400" : "text-gray-800 group-hover:text-blue-600"
                    } transition-colors`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <motion.span
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      isDark ? "text-yellow-400" : "text-blue-600"
                    } ml-2`}
                    animate={buttonArrowAnim}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>

            {/* Response Time Info */}
            <motion.div
              variants={itemVariants}
              className={`p-4 md:p-5 rounded-xl md:rounded-2xl mt-6 md:mt-8 backdrop-blur-sm flex items-center gap-3 md:gap-4 ${
                isDark 
                  ? "bg-purple-500/10 border border-purple-500/20" 
                  : "bg-purple-100/80 border border-purple-200/50"
              }`}
            >
              <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${
                isDark ? "bg-purple-500/20 text-purple-400" : "bg-purple-100 text-purple-600"
              }`}>
                <Clock size={18} />
              </div>
              <div>
                <p className={`font-semibold text-sm md:text-base ${isDark ? "text-purple-300" : "text-purple-700"}`}>
                  Quick Response
                </p>
                <p className={`text-xs md:text-sm ${isDark ? "text-purple-400/80" : "text-purple-600/80"}`}>
                  I respond within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.form 
              ref={formRef}
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl backdrop-blur-sm ${
                isDark 
                  ? "bg-gray-800/70 border border-gray-700/50" 
                  : "bg-white/80 border border-gray-200/50"
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h3 
                className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 ${
                  isDark ? "text-yellow-400" : "text-blue-600"
                }`}
                variants={itemVariants}
              >
                <Send size={20} className="hidden sm:block" />
                Send a Message
              </motion.h3>

              <div className="space-y-4 md:space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className={`block mb-2 md:mb-3 font-medium flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <User size={14} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 md:py-3 rounded-lg md:rounded-xl border focus:outline-none focus:ring-2 transition text-sm md:text-base ${
                      isDark
                        ? "bg-gray-700/50 border-gray-600 focus:ring-yellow-400/50 placeholder-gray-500"
                        : "border-gray-300 focus:ring-blue-500/50 placeholder-gray-400"
                    }`}
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className={`block mb-2 md:mb-3 font-medium flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <Mail size={14} />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 md:py-3 rounded-lg md:rounded-xl border focus:outline-none focus:ring-2 transition text-sm md:text-base ${
                      isDark
                        ? "bg-gray-700/50 border-gray-600 focus:ring-yellow-400/50 placeholder-gray-500"
                        : "border-gray-300 focus:ring-blue-500/50 placeholder-gray-400"
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className={`block mb-2 md:mb-3 font-medium flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    <MessageSquare size={14} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 md:py-3 rounded-lg md:rounded-xl border focus:outline-none focus:ring-2 transition text-sm md:text-base ${
                      isDark
                        ? "bg-gray-700/50 border-gray-600 focus:ring-yellow-400/50 placeholder-gray-500"
                        : "border-gray-300 focus:ring-blue-500/50 placeholder-gray-400"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition flex items-center justify-center gap-2 relative overflow-hidden text-sm md:text-base ${
                      isDark
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 md:w-5 md:h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane size={14} className="md:size-4" />
                      </>
                    )}
                    
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </motion.div>

                {status && (
                  <motion.p 
                    className={`text-center mt-3 md:mt-4 font-medium p-2 md:p-3 rounded-lg md:rounded-xl text-sm md:text-base ${
                      status.includes("✅") 
                        ? (isDark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600")
                        : (isDark ? "bg-red-500/20 text-red-400" : "bg-red-100 text-red-600")
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;