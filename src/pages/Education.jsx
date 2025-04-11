import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor Of Engineering",
    institution: "Zeal College Of Engineering And Research | SPPU",
    duration: "2020 - 2024",
    status: "Completed",
  },
  {
    degree: "HSC Science",
    institution: "R.C. Kale College, Chiplun",
    duration: "2018 - 2020",
    status: "Completed",
  },
  {
    degree: "SSC",
    institution: "United English School, Chiplun",
    duration: "2017 - 2018",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white py-24 px-6 md:px-20 lg:px-32 min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14">
        Education
      </h1>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline */}
        <div className="absolute lg:left-6 left-2 top-0 h-full w-1 bg-blue-500 rounded-full" />

        <div className="flex flex-col gap-8 lg:ml-12 ml-4">
          {educationData.map((edu, index) => (
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
                      {edu.degree}
                    </h2>
                    <p className="text-gray-600 text-md">{edu.institution}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {edu.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <FaGraduationCap className="text-blue-500 text-3xl opacity-90 mb-1" />
                    <span className="text-green-600 font-semibold text-sm">
                      {edu.status}
                    </span>
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
