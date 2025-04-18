import { motion } from "framer-motion";
import portfolioImage from "../assets/Projects/project1.png";
import TempDev from "../assets/Projects/tempDev.png";
import todo from "../assets/Projects/todo.png";

const projectList = [
  {
    title: "Portfolio Website",
    image: portfolioImage,
    description: "Modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and interactive UI components.",
    codeLink: "https://github.com/NAIKPRIYANK/Portfolio",
    demoLink: "https://naikpriyank.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Temporal Dev",
    image: TempDev,
    description: "Built “Temporal Dev”, a Python project with Custom Tkinter, featuring file and exception handling for smooth debugging. Integrated AI-powered coding suggestions and real-time tech updates to enhance productivity.",
    codeLink: "https://github.com/SuperX-ASLK/Temporal-DEV",
    tech: ["Python", "Tkinter", "Firebase"]
  },
  {
    title: "To Do App",
    image: todo,
    description: "Developed a ToDo app using Flutter and Dart with SQLite for local data storage. Implemented task creation, update, deletion, and real-time UI updates for a smooth user experience.",
    codeLink: "https://github.com/NAIKPRIYANK/Flutter_Projects/tree/main/to_do_listV2",
    tech: ["Dart", "Flutter", "SQLite"]
  },
];

const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="project" className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 dark:text-white"
        >
          Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                  >
                    View Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-purple-600 dark:bg-gray-800 dark:text-purple-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
