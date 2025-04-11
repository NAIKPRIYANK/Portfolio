import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Project", id: "project" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const offset = 200;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop - offset) {
          setActiveSection(link.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg" 
        : "bg-white dark:bg-gray-900"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
          Manish.dev
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className={`relative px-2 py-1 transition-colors dark:text-gray-300 ${
                activeSection === link.id 
                ? "text-purple-600 dark:text-purple-400 font-semibold" 
                : "hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full" />
              )}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transform transition-transform duration-500 ${isDark ? 'rotate-0' : 'rotate-90 opacity-0'}`}>
                <FiMoon size={24} />
              </div>
              <div className={`absolute inset-0 transform transition-transform duration-500 ${isDark ? '-rotate-90 opacity-0' : 'rotate-0'}`}>
                <FiSun size={24} />
              </div>
            </div>
          </button>
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-lg py-4 space-y-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-6 py-2 ${
                activeSection === link.id 
                ? "text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/30" 
                : "hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
