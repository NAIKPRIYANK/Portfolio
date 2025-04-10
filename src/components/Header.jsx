import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // adjust for offset/header

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(link.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white text-black h-[60px] flex lg:items-center lg:justify-center px-6 fixed top-0 w-full z-50 shadow-md">
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className={`hover:text-gray-400 transition ${
              activeSection === link.id ? "font-bold underline underline-offset-4" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white flex flex-col items-center py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 text-lg hover:text-gray-400 ${
                activeSection === link.id ? "font-bold underline" : ""
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
