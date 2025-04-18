import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(null);

  const educationData = [
    {
      degree: "Bachelor Of Engineering",
      institution: "Zeal College Of Engineering And Research | SPPU",
      duration: "2020 - 2024",
      status: "Completed",
      description:
        "Specialized in Computer Engineering with focus on software development and system design.",
      grade: "8.92 CGPA",
      achievements: [
        "Led team project on AI-based system optimization",
        "Published research paper on database management",
        "Participated in national coding competitions",
      ],
      icon: "⚙️",
    },
    {
      degree: "HSC Science",
      institution: "S.V.M Jr. College of Science, Kudase",
      duration: "2018 - 2020",
      status: "Completed",
      description:
        "Completed Higher Secondary education with focus on Physics, Chemistry, and Mathematics.",
      grade: "63.54%",
      achievements: [
        "Science club president",
        "Mathematics olympiad participant",
        "College quiz team member",
      ],
      icon: "🔬",
    },
    {
      degree: "SSC",
      institution: "Madyamik Vidyalaya, Maneri",
      duration: "2017 - 2018",
      status: "Completed",
      description: "Completed Secondary School education with distinction.",
      grade: "74.80%",
      achievements: [
        "School topper in mathematics",
        "Active participant in literary activities",
        "Merit scholarship recipient",
      ],
      icon: "📚",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen py-20 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Purple floating particles background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-600/40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.4 + Math.random() * 0.5,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: -200,
              opacity: [1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-indigo-800 tracking-tight mb-3">
            EDUCATION
          </h2>
          <p className="text-purple-600 text-lg">
            KNOWLEDGE ACQUISITION TIMELINE
          </p>
        </motion.div>

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {index < educationData.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "calc(100% + 4rem)" } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 1 }}
                  className="absolute left-6 top-12 w-px bg-gradient-to-b from-indigo-400 via-purple-400 to-indigo-600 z-0"
                />
              )}

              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
                className={`dark:bg-gray-800 relative flex flex-col md:flex-row bg-white border transition-all duration-300 rounded-2xl overflow-hidden shadow-xl cursor-pointer ${
                  activeCard === index
                    ? "border-indigo-500"
                    : "border-gray-200"
                }`}
              >
                <div className="md:w-32 flex items-center justify-center bg-purple-100 p-6">
                  <div className="text-3xl text-purple-700">{edu.icon}</div>
                </div>

                <div className="flex-1 p-6 text-gray-800">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                      <p className="text-indigo-500">{edu.institution}</p>
                    </div>
                    <div className="mt-3 md:mt-0 flex gap-3 items-center">
                      <span className="text-sm text-gray-500">
                        {edu.duration}
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-200 text-purple-800 rounded font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3">{edu.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          edu.status === "Completed"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <span>{edu.status}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-500"
                    >
                      ▼
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeCard === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-gray-200">
                          <h4 className="text-purple-600 font-semibold mb-2">
                            Key Achievements
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {edu.achievements.map((achieve, i) => (
                              <li key={i}>{achieve}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="mt-28 text-center relative z-10"
        >
          <p className="text-2xl text-purple-800 italic mb-3">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
          <p className="text-indigo-500 font-medium tracking-wide">
            — Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
