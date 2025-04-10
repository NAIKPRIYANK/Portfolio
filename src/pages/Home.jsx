import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeGIF from '../assets/Home/home_lottie.json';
import Lottie from 'lottie-react';
import GIT from '../assets/Home/github.svg';
import EMAIL from '../assets/Home/gmail.svg';
import LINKEDIN from '../assets/Home/linkedin.svg';
import STACKOVER from '../assets/Home/stackoverflow.svg';

const Home = () => {
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 }); // Changed triggerOnce to false

    // Animation variants for different elements
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
            transition: { duration: 0.5, delay: 0.6, ease: "easeOut" } 
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.7, delay: 0.9, ease: "easeOut" } 
        },
    };

    const lottieVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 1, delay: 1.2, ease: "easeOut" } 
        },
    };

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-white text-black">
            {/* Left Section */}
            <div ref={ref} className="flex-1">
                {/* Heading */}
                <motion.h1
                    variants={headingVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-4xl md:text-6xl font-medium mb-6 mt-24"
                >
                    Hi, I’m Manish 👋
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed leading-6 text-justify"
                >
                    A passionate Flutter and ReactJS developer focused on crafting pixel-perfect, high-performance mobile and web applications. From idea to execution, I bring modern UI/UX, clean code, and scalable architecture into every line I write. 🚀
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex gap-6 mt-6"
                >
                    <a href="https://github.com/manish3203" target="_blank" rel="noopener noreferrer">
                        <img src={GIT} alt="GitHub" className="w-10 h-10 hover:scale-110 transition" />
                    </a>
                    <a href="mailto:manishchavan639@gmail.com">
                        <img src={EMAIL} alt="Email" className="w-10 h-10 hover:scale-110 transition" />
                    </a>
                    <a href="https://in.linkedin.com/in/manish-chavan-a16119235" target="_blank" rel="noopener noreferrer">
                        <img src={LINKEDIN} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" />
                    </a>
                    <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                        <img src={STACKOVER} alt="Stack Overflow" className="w-10 h-10 hover:scale-110 transition" />
                    </a>
                </motion.div>

                {/* Contact Button */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="mt-8"
                >
                    <a
                        href="#contact"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 hover:shadow-[0_15px_25px_rgba(0,0,0,0.4)] transform transition duration-300 ease-in-out"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Right Section with Lottie Animation */}
            <motion.div
                variants={lottieVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex-1 mt-10 md:mt-0 md:ml-12"
            >
                <Lottie animationData={HomeGIF} loop={true} />
            </motion.div>
        </section>
    );
};

export default Home;