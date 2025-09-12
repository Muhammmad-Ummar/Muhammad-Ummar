import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { ThemeContext } from "../context/ThemeContext";
import { GitBranch, Github, Star, Users, Book, GitCommit, GitFork, GitPullRequest, Eye, Zap, Calendar } from "lucide-react";

const GHTimeLine = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    following: 0,
    contributions: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [topRepos, setTopRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch GitHub data
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const username = "Muhammmad-Ummar"; // Replace with your username
        
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        // Fetch repositories
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        const reposData = await reposRes.json();

        // Fetch events (recent activity)
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        const eventsData = await eventsRes.json();

        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

        // Process recent activity
        const processedActivities = eventsData.slice(0, 5).map(event => {
          let description = "";
          let icon = <GitCommit size={16} />;
          
          switch(event.type) {
            case "PushEvent":
              description = `Pushed ${event.payload.commits?.length || 0} commit${event.payload.commits?.length !== 1 ? 's' : ''} to ${event.repo.name}`;
              icon = <GitCommit size={16} />;
              break;
            case "WatchEvent":
              description = `Starred ${event.repo.name}`;
              icon = <Star size={16} />;
              break;
            case "ForkEvent":
              description = `Forked ${event.repo.name}`;
              icon = <GitFork size={16} />;
              break;
            case "PullRequestEvent":
              description = `${event.payload.action} pull request in ${event.repo.name}`;
              icon = <GitPullRequest size={16} />;
              break;
            case "CreateEvent":
              description = `Created ${event.payload.ref_type} in ${event.repo.name}`;
              icon = <GitBranch size={16} />;
              break;
            default:
              description = `Performed ${event.type} on ${event.repo.name}`;
          }

          return {
            id: event.id,
            type: event.type,
            repo: event.repo.name,
            description,
            icon,
            date: new Date(event.created_at).toLocaleDateString()
          };
        });

        // Process top repositories
        const processedRepos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description",
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || "Unknown",
            url: repo.html_url,
            updated: new Date(repo.updated_at).toLocaleDateString()
          }));

        setStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          stars: totalStars || 0,
          following: userData.following || 0,
          contributions: 0 // This would require a different API call
        });

        setRecentActivity(processedActivities);
        setTopRepos(processedRepos);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (isLoading) {
    return (
      <section className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`w-12 h-12 rounded-full border-4 border-t-transparent ${
            isDark ? 'border-yellow-400' : 'border-blue-600'
          }`}
        />
      </section>
    );
  }

  return (
    <section
      id="github"
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 md:py-24 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-blue-50 to-white"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-yellow-400/10" : "bg-blue-500/10"
            }`}
            style={{
              width: Math.random() * 60 + 20 + "px",
              height: Math.random() * 60 + 20 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0, 0.2, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span
            className={`text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 inline-flex items-center gap-2 ${
              isDark ? "text-yellow-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <GitBranch size={14} />
            </motion.div>
            My GitHub Journey
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
          >
            GitHub Timeline
          </motion.h2>

          <motion.div
            className={`h-1 w-16 md:w-20 mx-auto rounded-full ${
              isDark
                ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                : "bg-gradient-to-r from-blue-500 to-indigo-600"
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {[
            { label: "Repos", value: stats.repos, icon: <Book size={16} className="md:w-5" />, color: "text-blue-500" },
            { label: "Followers", value: stats.followers, icon: <Users size={16} className="md:w-5" />, color: "text-green-500" },
            { label: "Stars", value: stats.stars, icon: <Star size={16} className="md:w-5" />, color: "text-yellow-500" },
            { label: "Following", value: stats.following, icon: <Eye size={16} className="md:w-5" />, color: "text-purple-500" },
            { label: "Contribs", value: "1.2K+", icon: <GitCommit size={16} className="md:w-5" />, color: "text-pink-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.03 }}
              className={`p-3 md:p-4 rounded-lg text-center backdrop-blur-sm ${
                isDark 
                  ? "bg-gray-800/70 border border-gray-700" 
                  : "bg-white/80 border border-gray-200"
              } shadow-md`}
            >
              <div className={`mb-1 md:mb-2 ${item.color}`}>
                {item.icon}
              </div>
              <div className={`text-lg md:text-xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
                {item.value}
              </div>
              <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <h3
              className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2 ${
                isDark ? "text-yellow-400" : "text-blue-600"
              }`}
            >
              <Zap size={18} className="md:w-5" />
              Recent Activity
            </h3>

            <div
              className={`rounded-xl md:rounded-2xl p-4 md:p-6 ${
                isDark ? "bg-gray-800/70" : "bg-white/80"
              } backdrop-blur-sm border ${
                isDark ? "border-gray-700" : "border-gray-200"
              } shadow-lg`}
            >
              {recentActivity.length === 0 ? (
                <motion.div
                  className={`text-center italic text-sm md:text-base ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No recent public GitHub activity <strong>check back soon!</strong>
                </motion.div>
              ) : (
                recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className={`flex items-start gap-3 py-3 ${
                      index !== recentActivity.length - 1
                        ? "border-b border-gray-700/30"
                        : ""
                    }`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`p-1.5 md:p-2 rounded-full mt-0.5 ${
                        isDark
                          ? "bg-yellow-400/20 text-yellow-400"
                          : "bg-blue-600/20 text-blue-600"
                      }`}
                    >
                      {activity.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-medium text-sm md:text-base truncate ${
                          isDark ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {activity.repo.split("/")[1]}
                      </div>
                      <div
                        className={`text-xs md:text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {activity.description}
                      </div>
                    </div>

                    <div
                      className={`text-xs whitespace-nowrap ${
                        isDark ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {activity.date}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

          {/* Top Repositories */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <h3 className={`text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2 ${isDark ? "text-yellow-400" : "text-blue-600"}`}>
              <Star size={18} className="md:w-5" />
              Top Repositories
            </h3>
            <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 ${isDark ? "bg-gray-800/70" : "bg-white/80"} backdrop-blur-sm border ${isDark ? "border-gray-700" : "border-gray-200"} shadow-lg`}>
              {topRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  className={`p-3 md:p-4 rounded-lg mb-3 ${isDark ? "bg-gray-700/50 hover:bg-gray-700/70" : "bg-gray-100/50 hover:bg-gray-100/70"} transition-all`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className={`font-semibold text-sm md:text-base truncate max-w-[60%] ${isDark ? "text-yellow-400" : "text-blue-600"}`}>
                      {repo.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                        <Star size={12} className="md:w-3.5" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                        <GitFork size={12} className="md:w-3.5" />
                        {repo.forks}
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs md:text-sm mb-2 line-clamp-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {repo.description}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className={`text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-600/50 text-gray-300" : "bg-gray-200 text-gray-700"}`}>
                      {repo.language}
                    </div>
                    <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                      <Calendar size={10} className="inline mr-1 md:w-3" />
                      {repo.updated}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Graph */}
        <motion.div
          className={`rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden ${
            isDark
              ? "bg-gray-800/70 backdrop-blur-sm border border-gray-700"
              : "bg-white/80 backdrop-blur-sm border border-gray-200"
          } shadow-lg mb-10 md:mb-12`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Github
                size={32}
                className={isDark ? "text-yellow-400" : "text-blue-600"}
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <GitHubCalendar
              username="Muhammmad-Ummar"
              blockSize={10}
              blockMargin={3}
              fontSize={11}
              colorScheme={isDark ? "dark" : "light"}
              style={{ margin: "0 auto", minWidth: "700px" }}
            />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true, margin: "-30px" }}
        >
          <motion.a
            href="https://github.com/Muhammmad-Ummar"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base ${
              isDark
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-600 hover:to-yellow-700"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
            } shadow-md transition-all`}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Github size={18} className="md:w-5" />
            View My GitHub Profile
          </motion.a>
        </motion.div>
      </div>

      {/* Subtle pulsing background */}
      <motion.div
        className={`absolute rounded-full opacity-5 ${
          isDark ? "bg-yellow-400" : "bg-blue-500"
        }`}
        style={{
          width: 300,
          height: 300,
          top: "20%",
          left: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute rounded-full opacity-5 ${
          isDark ? "bg-purple-500" : "bg-indigo-500"
        }`}
        style={{
          width: 350,
          height: 350,
          bottom: "15%",
          right: "15%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default GHTimeLine;