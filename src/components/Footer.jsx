import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Manish Chavan</h3>
            <p className="text-purple-100 dark:text-purple-200 text-sm">
              A passionate Flutter and React developer focused on creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#project" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/manish3203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/manish-chavan-a16119235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:manishchavan639@gmail.com"
                className="text-purple-100 dark:text-purple-200 hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-100 dark:text-purple-200 text-sm">
            © {new Date().getFullYear()} Manish Chavan. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className=" flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
          >
            Back to Top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
