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
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
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

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700"
        : "bg-transparent"
    }`}>
      <div className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center group gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-md group-hover:rotate-[8deg] transform transition">
            P
          </div>
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:from-purple-500 group-hover:to-indigo-500 transition-all">
            DevPriyank
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              )}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:shadow transition"
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transition-all duration-500 ${isDark ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <FiMoon size={20} className="text-indigo-600" />
              </div>
              <div className={`absolute inset-0 transition-all duration-500 ${isDark ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <FiSun size={20} className="text-purple-600" />
              </div>
            </div>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
            {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 transition"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-center transition ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
