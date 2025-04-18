import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiChevronUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-900 relative">
      {/* Wave SVG Divider */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C115.42,13.44,232.17,36.94,321.39,56.44Z" 
            className="fill-indigo-600 dark:fill-indigo-900">
          </path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Logo & About Section */}
          <div className="md:col-span-5">
            <h2 className="text-white font-bold text-2xl mb-4">Priyank Naik</h2>
            <p className="text-purple-100 dark:text-purple-200 leading-relaxed mb-6">
              A passionate Flutter and React developer focused on creating exceptional digital experiences with clean code and intuitive design.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/NAIKPRIYANK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/priyank-naik-99a695207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:priyanknaik17@gmail.com"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-purple-400/30">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
                  About Me
                </a>
              </li>
              <li>
                <a href="#project" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-purple-300 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-purple-400/30">Get in Touch</h3>
            <div className="text-purple-100 dark:text-purple-200 space-y-3">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:manishchavan639@gmail.com" className="hover:text-white transition-colors">
                  priyanknaik17@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Based in:</span>
                <span>Pune, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-400/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-100 dark:text-purple-200 text-sm mb-4 md:mb-0">
            © {currentYear} NAIKPRIYANK. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Back to top"
            >
              <HiChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;