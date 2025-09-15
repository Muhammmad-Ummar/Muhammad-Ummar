import { motion } from "framer-motion";
import ProjectCard from "../compnents/ProjectCard";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const projectData = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS showcasing my skills and projects.",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/d08c50224396507.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
    link: "https://ummarportfolio.me",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    isLive: true,
  },
  {
    title: "E-Commerce App",
    description: "A full-stack MERN e-commerce platform with user auth, cart, and admin panel.",
    image: "https://www.picmote.com/static/background.eb78315a.png",
    link: "https://github.com/yourusername/ecommerce-app",
    tags: ["MERN Stack", "Redux", "JWT Auth"],
    isLive: false
  },
  {
    title: "AgeCalc Pro",
    description: "A Age calculate Calculator.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZpHVKQV_cmq9l0favyqWRoIsvxC50W3ylQ&s",
    link: "https://age-calculator-orpin-chi-67.vercel.app/",
    tags: ["React","tailwind"],
    isLive: true
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using Socket.io, Node.js, and React.",
    image: "https://www.figma.com/community/resource/8658d5e2-db4e-49df-aee2-c517f4285709/thumbnail",
    link: "https://github.com/muhammmad-ummar/chat-app",
    tags: ["Socket.io", "Node.js", "React"],
    isLive: false
  },
    {
    title: "TikTok Video Downloader",
    description: "A web application to download TikTok videos without watermark.",
    image: "https://www.joyoshare.com/images/resource/download-tiktok-videos.jpg",
    link: "https://tik-tok-video-downloader-eight.vercel.app/",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    isLive: true,
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`min-h-screen py-24 px-4 sm:px-8 transition-all duration-500 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-300 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${
            isDark ? "text-yellow-400" : "text-blue-600"
          }`}>
            My Work
          </span>
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6   ${
              isDark 
               ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            }`}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <div className={`h-1 w-20 mx-auto mt-4 rounded-full ${
            isDark 
            ? "bg-gradient-to-r from-yellow-400 to-pink-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"
          }`}></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index} 
              isDark={isDark}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium text-sm ${
              isDark 
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black" 
                : "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
            } shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Want to see more? Contact me
            <span className="ml-2">👉</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;