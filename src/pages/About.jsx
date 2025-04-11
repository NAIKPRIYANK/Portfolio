import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = {
    languages: ["Dart", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["Flutter", "ReactJS", "Node.js", "Express.js", "Tailwind CSS"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    tools: ["Git", "VS Code", "Android Studio", "Postman", "Docker"]
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-purple-600 dark:text-purple-400">Me</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span> Who Am I?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold">Manish</span>, a dedicated developer with a passion for creating seamless digital experiences. I specialize in mobile app development with <span className="text-purple-600 dark:text-purple-400 font-medium">Flutter</span> and web development using <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span>. My journey in tech is driven by a constant desire to learn and create impactful solutions.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span> What I Do
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I transform ideas into reality through clean, efficient code and intuitive user interfaces. My expertise spans from crafting responsive web applications to building native-like mobile experiences. I focus on writing maintainable code and implementing modern best practices in software development.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">My Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 capitalize flex items-center gap-2">
                  {category === "languages" && "🚀"}
                  {category === "frameworks" && "⚛️"}
                  {category === "databases" && "🗄️"}
                  {category === "tools" && "🛠️"}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-800/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
