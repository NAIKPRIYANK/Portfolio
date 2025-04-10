import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const skills = {
    languages: ["Dart", "Java", "JavaScript"],
    frameworks: ["Flutter", "ReactJS"],
    databases: ["MySQL", "PostgreSQL"]
  };

  return (
    <section
      id="about"
      className="justify-center flex flex-col md:px-20 bg-white text-black xl:justify-center"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-12 uppercase tracking-wide text-center">
        About Me
      </h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full mb-20">
        <motion.div
          {...fadeUp}
          className="flex-1 bg-white bg-opacity-80 border border-gray-200 p-6 m-5 lg:m-0 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 backdrop-blur-md"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-3 flex items-center gap-2">
            Who Am I? <span className="text-2xl">🤖</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
          I’m <strong>Manish</strong> — a passionate developer who specializes in building smooth and scalable mobile applications using <strong>Flutter</strong>, and creating modern, responsive websites with <strong>ReactJS</strong>.

          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="flex-1 bg-white bg-opacity-80 border border-gray-200 p-6 m-5 lg:m-0 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 backdrop-blur-md"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-3 flex items-center gap-2">
            What I Do <span className="text-2xl">🧠</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            From front-end magic to backend logic, I build clean UI/UX, manage data with powerful databases, and deploy production-ready apps with performance in mind.
          </p>
        </motion.div>
      </div>

      {/* Rich Tech Stack Section */}
        <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="w-full text-center px-4 md:px-0"
            >
            <h2 className="text-4xl font-bold text-gray-800 mb-14 tracking-wide">Tech Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
                {/* Languages */}
                <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all"
                >
                <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center justify-center gap-2">
                    🧑‍💻 Languages
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.languages.map((item) => (
                    <span
                        key={item}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </motion.div>

                {/* Frameworks */}
                <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all"
                >
                <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center justify-center gap-2">
                    ⚙️ Frameworks
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.frameworks.map((item) => (
                    <span
                        key={item}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </motion.div>

                {/* Databases */}
                <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-all"
                >
                <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center justify-center gap-2">
                    🗄️ Databases
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.databases.map((item) => (
                    <span
                        key={item}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
                    >
                        {item}
                    </span>
                    ))}
                </div>
                </motion.div>

            </div>
        </motion.div>

    </section>
  );
};

export default About;
