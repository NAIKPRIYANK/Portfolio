import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import MyProfile from '../assets/Home/removebg1.png';
import HomeGIF from '../assets/Home/home_lottie.json';
import Lottie from 'lottie-react';
import GIT from '../assets/Home/github.svg';
import EMAIL from '../assets/Home/gmail.svg';
import LINKEDIN from '../assets/Home/linkedin.svg';
import STACKOVER from '../assets/Home/stackoverflow.svg';
import instagram from '../assets/Home/instagram.svg';




const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Animated skill tags
    const skills = [
        "Flutter", "ReactJS", "JavaScript", "Dart",
        "UI/UX", "Firebase", "Node.js", "Mobile Dev"
    ];

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const nameArray = "Priyank Naik".split('');

    return (
        // <div className='flex justify-center w-full'>
        <section
        ref={ref}
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden w-full max-w-full"
      
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Dynamic background gradient */}
            <div     />

            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden z-0 ">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
                        style={{
                            width: `${(i + 2) * 10}rem`,
                            height: `${(i + 2) * 10}rem`,
                            left: `${(i * 15) - 10}%`,
                            top: `${(i * 15) - 20}%`,
                        }}
                        animate={{
                            x: [0, 10, -10, 0],
                            y: [0, -15, 15, 0],
                            scale: [1, 1.05, 0.95, 1],
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>

            {/* Interactive cursor effect */}
            {isHovering && (
                <motion.div
                    className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl pointer-events-none z-10 "
                    animate={{
                        x: cursorPosition.x - 80,
                        y: cursorPosition.y - 80,
                    }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                />
            )}

            {/* Content container */}
            <div className="container mt-[100px] md:mt-0 px-6 md:px-12 z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left ">

                {/* Left section */}
                <div className="flex-1 max-w-2xl ml-0 md:ml-28 flex flex-col items-center md:items-start">

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="inline-block relative">
                            <div  />
                            <span className="relative text-xl md:text-2xl font-medium  py-2 rounded-lg">
                                Hello Guys 👋
                            </span>
                        </div>
                    </motion.div>

                    {/* Animated name */}
                    <div className="overflow-hidden">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            I'm{' '}
                            <span className="inline-block">
                                {nameArray.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={letterVariants}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className={`inline-block ${letter === ' ' ? 'mr-2' : ''} bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 dark:from-indigo-400 dark:via-purple-400 dark:to-fuchsia-400 text-transparent bg-clip-text`}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            A passionate developer creating elegant digital experiences with a focus on performance and user-centered design.
                        </p>
                    </motion.div>

                   
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex gap-5 mb-10"
                    >
                        {[
                            { name: 'GitHub',href: 'https://github.com/NAIKPRIYANK', icon: 'github.svg' },
                            { name: 'Email',href: 'mailto:priyanknaik17@gmail.com', icon: 'gmail.svg' },
                            { name: 'LinkedIn',href: 'https://www.linkedin.com/in/priyank-naik-99a695207/', icon: 'linkedin.svg' },
                            { name: 'Instagram',href: 'https://github.com/yourusername', icon: 'instagram.svg' },
                        ].map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className="group w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: -10,
                                    backgroundColor: ['#ffffff', '#f9fafb', '#f3f4f6', '#ffffff'],
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="w-6 h-6 text-indigo-600 dark:text-indigo-400">
                                    {/* Replace with your actual SVG imports */}
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d={
                                            i === 0 ? "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" :
                                                i === 1 ? "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" :
                                                    i === 2 ? "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" :
                                                       "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                        } />
                                    </svg>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <motion.a
                            href="#contact"
                            className="group relative px-8 py-4 overflow-hidden rounded-lg font-semibold text-white"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300" />
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)]" />
                            <span className="relative flex items-center gap-2">
                                <span>Let's Talk</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </motion.a>

                        <motion.a
                            href="#project"
                            className="group relative px-8 py-4 overflow-hidden rounded-lg font-semibold text-indigo-600 dark:text-indigo-400"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg group-hover:border-indigo-500 dark:group-hover:border-indigo-300 transition-colors duration-300" />
                            <span className="relative flex items-center gap-2">
                                <span>View Work</span>
                                <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right section - 3D rotating cube effect */}
                <div className="flex-1 max-w-md relative mr-0 md:mr-24 flex justify-center">

                    <div className="w-full h-80 md:h-96">
                        <motion.div
                           className="cube relative w-full h-full transform-style-preserve-3d"
                           animate={{
                             rotateY: [0, 15, 0],
                             rotateX: [0, 0, 0], // keep it flat
                           }}
                           transition={{
                             duration: 8,
                             ease: "easeInOut",
                             repeat: Infinity,
                             repeatType: "reverse", // flips back and forth
                           }}
                        >
                        

                            

                           

                            {/* Left face - Contact */}
                         

                           

                            {/* Bottom face */}
                            <div className="flex-1 max-w-md">
                                <motion.div
                                    className="flex flex-col items-center justify-center text-white"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <img
                                        src={MyProfile}
                                        alt="Priyank Naik Profile"
                                        className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover object-top border-4 border-white shadow-xl mb-6"

                                    />
                                 
                                    {/* <p className="text-indigo-200 text-lg">App Developer & Backend Developer </p> */}
                                </motion.div>
                            </div>


                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
        

            
            <motion.div
                className="absolute bottom-8 transform -translate-x-1/2 flex flex-col items-center cursor-pointer justify-center"
                onClick={handleScroll} 
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2"  >Scroll Down</span>
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
       

            {/* Custom CSS for 3D effects */}
            {/* <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .rotateY-90 {
            transform: rotateY(90deg) translateZ(calc(100%));
          }
          .rotateY-180 {
            transform: rotateY(180deg) translateZ(calc(100%));
          }
          .rotateY-270 {
            transform: rotateY(-90deg) translateZ(calc(100%));
          }
          .rotateX-90 {
            transform: rotateX(90deg) translateZ(calc(100%));
          }
          .rotateX-270 {
            transform: rotateX(-90deg) translateZ(calc(100%));
          }
          .cube-face {
            backface-visibility: hidden;
            transform-origin: center;
            transition: transform 0.6s ease;
          }
          .cube-face-front {
            transform: translateZ(calc(100%));
          }
          .cube-face-back {
            transform: rotateY(180deg) translateZ(calc(100%));
          }
        `}</style> */}
        </section>
        // </div>
    );
};

export default Home;
