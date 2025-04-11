const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-6 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          {/* Left: Name or Logo */}
          <div className="text-lg font-semibold">© 2025 Manish Chavan</div>
  
          {/* Center: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/manishopeninfo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:manishchavan639@gmail.com"
              className="hover:text-gray-200 transition"
            >
              Email
            </a>
          </div>
  
          {/* Right: Scroll to top */}
          <a
            href="#home"
            className="text-sm bg-white text-purple-600 px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            ↑ Back to Top
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  