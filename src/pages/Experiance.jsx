import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
    {
        company: "OIT Technology Pvt. Ltd.",
        role: "Jr. Flutter Developer",
        duration: "May 2024 - Present",
    },
    {
        company: "Biencaps Systems Pvt. Ltd.",
        role: "Flutter Developer | Intern",
        duration: "Dec 2023 - Feb 2024",
    },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="bg-white py-24 px-6 md:px-20 lg:px-32 min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">
        Work Experience
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline */}
        <div className="absolute lg:left-6 left-2 top-0 h-full w-1 bg-blue-500 rounded-full" />

        <div className="flex flex-col gap-8 lg:ml-12 ml-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative lg:pl-8 pl-2"
            >
              {/* Dot on timeline */}
              <div className="absolute lg:-left-[30px] -left-[14px] top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              <div className="group bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl lg:p-8 p-3 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                      {exp.company}
                    </h2>
                    <p className="text-gray-600 text-md">{exp.role}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {exp.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <FaBriefcase className="text-blue-500 text-3xl opacity-90 mb-1" />
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
