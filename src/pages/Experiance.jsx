import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaCalendarAlt, FaTrophy, FaTools } from "react-icons/fa";

const experienceData = [
    {
        company: "OIT Technology Pvt. Ltd.",
        role: "Flutter Developer",
        duration: "May 2024 - Present",
        description: "Developing and maintaining cross-platform mobile applications using Flutter and Dart. Working with REST APIs and state management solutions.",
        achievements: [
            "Implemented clean architecture principles in mobile applications",
            "Optimized app performance",
            "Developed reusable UI components"
        ],
        technologies: ["Flutter", "Dart", "REST APIs", "Firebase"]
    },
    {
        company: "Biencaps Systems Pvt. Ltd.",
        role: "Flutter Developer | Intern",
        duration: "Dec 2023 - Feb 2024",
        description: "Gained hands-on experience in mobile app development using Flutter framework. Collaborated with senior developers on various projects.",
        achievements: [
            "Built 3+ feature-rich mobile applications",
            "Integrated third-party APIs and services",
            "Implemented responsive UI designs"
        ],
        technologies: ["Flutter", "RESTful APIs", "Git", "Material Design"]
    }
];

const WorkExperience = () => {
  // Animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const decorationVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "4rem",
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    }
  };
  
  const backgroundBlobVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.3,
      transition: { 
        duration: 2, 
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 5
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background decorative elements */}
      <motion.div 
        variants={backgroundBlobVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4"
      />
      <motion.div 
        variants={backgroundBlobVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/4"
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4"
          >
            PROFESSIONAL JOURNEY
          </motion.span>
          
          <motion.h1 
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold dark:text-white"
          >
            Work <span className="text-purple-600 dark:text-purple-400">Experience</span>
          </motion.h1>
          
          <motion.div 
            variants={decorationVariants}
            className="h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4"
          />
        </motion.div>

        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-purple-200 dark:from-purple-500 dark:via-purple-400 dark:to-purple-700 transform -translate-x-1/2"
          />
          
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 last:mb-0 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline marker with pulse animation */}
              <motion.div 
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index * 0.2
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-600 dark:border-purple-400 shadow-lg flex items-center justify-center"
                >
                  <FaBriefcase className="text-purple-600 dark:text-purple-400 text-xl" />
                  
                  {/* Pulse effect */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-4 border-purple-400 dark:border-purple-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 p-8 border-t-4 border-purple-600 dark:border-purple-400"
                >
                  <div className="flex flex-col gap-4 mb-6">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-2xl font-bold text-gray-800 dark:text-white"
                    >
                      {exp.company}
                    </motion.h3>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium flex items-center gap-1"
                      >
                        <FaCode className="text-xs" /> {exp.role}
                      </motion.span>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-sm flex items-center gap-1"
                      >
                        <FaCalendarAlt className="text-xs" /> {exp.duration}
                      </motion.span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border-l-4 border-purple-300 dark:border-purple-700"
                    >
                      <p className="text-gray-700 dark:text-gray-300 italic">{exp.description}</p>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        <FaTrophy className="text-purple-500 dark:text-purple-400" /> Key Achievements
                      </h4>
                      <ul className="space-y-2 pl-6">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative before:absolute before:left-[-20px] before:top-2 before:w-3 before:h-3 before:bg-purple-600 dark:before:bg-purple-400 before:rounded-full"
                          >
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        <FaTools className="text-purple-500 dark:text-purple-400" /> Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -2, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-purple-200 dark:border-purple-700 rounded-lg text-sm font-medium transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;