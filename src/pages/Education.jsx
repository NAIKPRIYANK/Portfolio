import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor Of Engineering",
      institution: "Zeal College Of Engineering And Research | SPPU",
      duration: "2020 - 2024",
      status: "Completed",
      description: "Specialized in Computer Engineering with focus on software development and system design.",
      grade: "8.31 CGPA"
    },
    {
      degree: "HSC Science",
      institution: "R.C. Kale College, Chiplun",
      duration: "2018 - 2020",
      status: "Completed",
      description: "Completed Higher Secondary education with focus on Physics, Chemistry, and Mathematics.",
      grade: "63.54%"
    },
    {
      degree: "SSC",
      institution: "United English School, Chiplun",
      duration: "2017 - 2018",
      status: "Completed",
      description: "Completed Secondary School education with distinction.",
      grade: "74.80%"
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white"
        >
          Education <span className="text-purple-600 dark:text-purple-400">Journey</span>
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex md:items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
              }`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{edu.duration}</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{edu.grade}</span>
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

export default Education;
