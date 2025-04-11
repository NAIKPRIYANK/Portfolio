import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeGIF from '../assets/Home/home_lottie.json';
import Lottie from 'lottie-react';
import GIT from '../assets/Home/github.svg';
import EMAIL from '../assets/Home/gmail.svg';
import LINKEDIN from '../assets/Home/linkedin.svg';
import STACKOVER from '../assets/Home/stackoverflow.svg';

const Home = () => {
    const [ref, inView] = useInView({ 
        triggerOnce: false, 
        threshold: 0.1 
    });

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.5, delay: 0.6 } 
        },
    };

    return (
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-white via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Left Section */}
            <div className="flex-1 max-w-2xl">
                <motion.div
                    variants={headingVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-4"
                >
                    <h2 className="text-2xl text-purple-600 dark:text-purple-400 font-medium">Welcome to my portfolio 👋</h2>
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-800 dark:from-purple-400 dark:via-indigo-400 dark:to-indigo-600 text-transparent bg-clip-text">
                        I'm Manish Chavan
                    </h1>
                </motion.div>

                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    A passionate <span className="text-purple-600 dark:text-purple-400 font-semibold">Flutter</span> and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">ReactJS</span> developer crafting pixel-perfect, high-performance mobile and web applications. Focused on clean code, modern UI/UX, and scalable solutions that make a difference. 🚀
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex gap-6 mt-8"
                >
                    <a 
                        href="https://github.com/manish3203" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <img src={GIT} alt="GitHub" className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                    </a>
                    <a 
                        href="mailto:manishchavan639@gmail.com"
                        className="group"
                    >
                        <img src={EMAIL} alt="Email" className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                    </a>
                    <a 
                        href="https://in.linkedin.com/in/manish-chavan-a16119235" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <img src={LINKEDIN} alt="LinkedIn" className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                    </a>
                    <a 
                        href="https://stackoverflow.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <img src={STACKOVER} alt="Stack Overflow" className="w-8 h-8 transition-transform group-hover:scale-110 group-hover:-rotate-12" />
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="mt-10 flex gap-4"
                >
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#project"
                        className="px-6 py-3 text-purple-600 font-semibold border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>

            {/* Right Section with Lottie Animation */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 1, delay: 0.3 } 
                    }
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex-1 mt-12 md:mt-0 max-w-lg"
            >
                <Lottie 
                    animationData={HomeGIF} 
                    loop={true}
                    className="w-full h-full drop-shadow-2xl"
                />
            </motion.div>
        </section>
    );
};

export default Home;