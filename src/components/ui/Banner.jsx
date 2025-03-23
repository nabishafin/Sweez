import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaPython,
    FaLaravel,
    FaMobileAlt,
    FaPaintBrush,
    FaServer,
    FaChartLine,
} from "react-icons/fa";

import BackgroundImage from "../../assets/istockphoto-1473121061-612x612.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    const icons = [
        { icon: <FaReact size={60} color="#61DAFB" />, alt: "React" },
        { icon: <FaJs size={60} color="#F7DF1E" />, alt: "JavaScript" },
        { icon: <FaHtml5 size={60} color="#E34F26" />, alt: "HTML5" },
        { icon: <FaPython size={60} color="#3776AB" />, alt: "Python" },
        { icon: <FaLaravel size={60} color="#FF2D20" />, alt: "Laravel" },
        { icon: <FaMobileAlt size={60} color="#4CAF50" />, alt: "Mobile App Development" },
        { icon: <FaPaintBrush size={60} color="#9C27B0" />, alt: "Graphics Design" },
        { icon: <FaServer size={60} color="#607D8B" />, alt: "Digital Services" },
        { icon: <FaChartLine size={60} color="#FF9800" />, alt: "Data Analytics" },
    ];

    const AnimatedTextSwitcher = () => {
        const texts = ['web development', 'digital marketing', 'mobile app solutions', 'custom software'];
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 2500);

            return () => clearInterval(interval);
        }, [texts.length]);

        return (
            <AnimatePresence initial={false} mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: 'inherit',
                        fontWeight: '',
                        color: '#3b82f6',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {texts[currentIndex]}
                </motion.span>
            </AnimatePresence>
        );
    };

    return (
        <div className="relative h-[750px] flex items-center justify-center bg-gradient-to-r from-[#a9ccef] via-[#e9ecef] to-[#a9ccef] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden mt-10 md:m-0">
            <motion.div
                className="absolute inset-0 bg-cover bg-center dark:opacity-10"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 0, 0], y: [0, 0, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="absolute inset-0 bg-white/30 backdrop-blur-sm dark:bg-black/30"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />

            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left z-10 w-full lg:w-6/12">
                    <h1 className="text-2xl font-semibold text-[#3b82f6] mt-5 dark:text-blue-400">We Partner to Innovate.</h1>
                    <h1 className="text-4xl md:text-5xl font-bold mt-3 dark:text-white">
                        Build Stunning <span className="text-[] kaushan text-5xl md:text-6xl dark:text-blue-300">
                            <span className="lg:hidden text-[#3b82f6]">projects</span>
                            <span className="hidden lg:inline"><AnimatedTextSwitcher /></span>
                        </span>
                    </h1>
                    <h4 className="text-xl md:text-2xl font-semibold mt-5 dark:text-gray-300">Sweez Pvt. Ltd. – Leading Software Company in Cumilla, Bangladesh</h4>
                    <p className="mt-3 md:mt-5 dark:text-gray-300">
                        <span className="text-[#3b82f6] dark:text-blue-400"> Sweez Pvt. Ltd.</span> offers top-notch custom web development, e-commerce portals, business portfolios, and management solutions. As one of the best software companies in Cumilla Bangladesh, we also develop fast, user-friendly mobile apps for iOS and Android, providing both native and cross-platform options.
                    </p>
                    <p className="mt-3 md:mt-5 dark:text-gray-300">
                        Specializing in digital marketing and SEO services in Bangladesh, we help businesses boost their online presence and search rankings for growth. Partner with us for the best software and marketing solutions in Bangladesh.
                    </p>

                    <div className="mt-5">
                        <div className=" flex gap-1 items-center text-">
                            <p className="text-xl font-semibold text-[#3b82f6] dark:text-blue-400">Leran More</p>
                            <FaArrowRight className="mt-1 text-[#3b82f6] dark:text-blue-400" />
                        </div>
                    </div>
                </div>

                <motion.div
                    className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.img
                        src="/src/assets/team.jpeg"
                        alt="Side Image"
                        className="w-full max-w-2xl rounded-lg shadow-lg dark:shadow-gray-800/50"
                        initial={{ y: -100, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                    />
                </motion.div>
            </div>

            {icons.map((icon, index) => (
                <motion.div
                    key={index}
                    className="absolute w-16 h-16 opacity-30 hover:opacity-100 transition-opacity duration-300"
                    style={{
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                    }}
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                >
                    {icon.icon}
                </motion.div>
            ))}
        </div>
    );
};

export default Banner;