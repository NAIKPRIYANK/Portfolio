import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

const experienceData = [
    {
        company: "OIT Technology Pvt. Ltd.",
        role: "Jr. Flutter Developer",
        duration: "May 2024 - Present",
        description: "Developing and maintaining cross-platform mobile applications using Flutter and Dart. Working with REST APIs and state management solutions.",
        achievements: [
            "Implemented clean architecture principles in mobile applications",
            "Optimized app performance by 40%",
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
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white"
        >
          Work <span className="text-purple-600 dark:text-purple-400">Experience</span>
        </motion.h1>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-700" />
              )}

              <div className="flex gap-8">
                {/* Timeline marker */}
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.role}</p>
                    </div>
                    <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
