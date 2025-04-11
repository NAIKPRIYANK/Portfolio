import portfolioImage from "../assets/Projects/portfolio.png";
import GarbageSystem from "../assets/Projects/garbageSystem.jpg";

const projectList = [
  {
    title: "Portfolio",
    image: portfolioImage,
    description:
      "Personal Portfolio Website. Don't need much info about it, just scroll down. You're here only!",
    codeLink: "https://github.com/manishopeninfo/Portfolio",
  },
  {
    title: "Smart Garbage Management Application",
    image: GarbageSystem,
    description:
      "To analyze city’s waste production by combining smart sensor information with an intelligent waste management system.",
    codeLink: "https://github.com/your-username/earth-voyager",
  },
  {
    title: "Google Keep Clone",
    image: portfolioImage,
    description:
      "A simple Google Keep clone built with ReactJS. Store, manage and delete notes easily.",
    codeLink: "https://github.com/your-username/google-keep-clone",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-white py-24 px-6 md:px-20 lg:px-32 min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">
        Projects
      </h1>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projectList.map((project, index) => (
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg group">
          {/* Image */}
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        
          {/* Always-visible Title */}
          <div className="absolute bottom-0 w-full z-20 transition-all duration-300 group-hover:bottom-[70%]">
            <div className="py-2 text-center text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-xl">
              {project.title}
            </div>
          </div>
        
          {/* Slide-up Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-[70%] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-white bg-opacity-90 flex flex-col justify-end items-center text-center space-y-3 px-4 pb-5 pt-6 z-10">
            <p className="text-sm text-gray-800">{project.description}</p>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              💻 Code
            </a>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Project;
