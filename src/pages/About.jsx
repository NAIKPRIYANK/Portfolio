import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const skills = {
    languages: ["Dart", "Java", "Python", "JavaScript"],
    frameworks: ["Flutter", "Angular js", "Tailwind CSS"],
    databases: ["MySQL", "PostgreSQL", "Firebase","SQLite,"],
    tools: ["Git", "VS Code", "Android Studio", "Postman", "Docker"]
  };

  const sectionVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    }
  };

  const emojis = {
    languages: "💻",
    frameworks: "⚛️",
    databases: "🗄️",
    tools: "🛠️"
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 px-6 md:px-16 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
            ABOUT
          </span>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Get to Know <span className="text-indigo-600 dark:text-indigo-400">Priyank</span>
          </h2>
        </motion.div>

        {/* Bio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-indigo-500"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">Who I Am</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold">Priyank</span>, a passionate developer focused on creating elegant digital experiences. 
              I specialize in building mobile apps with <span className="text-indigo-600 dark:text-indigo-400 font-medium">Flutter</span> and 
              modern web applications using <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-r-4 border-indigo-500"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">What I Do</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I transform ideas into reality through clean code and intuitive interfaces. My focus is on creating 
              responsive applications that provide exceptional user experiences, while maintaining best practices 
              in software development.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="pt-8"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          >
            My Tech Stack
          </motion.h3>
          
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 py-3 px-5">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{emojis[category]}</span>
                    <h4 className="text-lg font-medium text-white capitalize">{category}</h4>
                  </div>
                </div>
                
                <div className="p-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Quote/Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl shadow-lg"
        >
          <svg className="w-10 h-10 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg font-medium mb-4">
            I believe in creating software that not only works flawlessly but also enhances the lives of its users.
          </p>
          <p className="text-sm opacity-75">Priyank Naik</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;