import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaPython, FaLaravel, FaMobileAlt, FaPaintBrush, FaServer, FaChartLine } from "react-icons/fa"; // Importing icons from Font Awesome
import Button from "../shared/Button";

const icons = [
    { icon: <FaReact size={60} color="#61DAFB" />, alt: "React" }, // Larger size and custom color
    { icon: <FaJs size={60} color="#F7DF1E" />, alt: "JavaScript" },
    { icon: <FaHtml5 size={60} color="#E34F26" />, alt: "HTML5" },
    { icon: <FaPython size={60} color="#3776AB" />, alt: "Python" },
    { icon: <FaLaravel size={60} color="#FF2D20" />, alt: "Laravel" },
    { icon: <FaMobileAlt size={60} color="#4CAF50" />, alt: "Mobile App Development" }, // Mobile App
    { icon: <FaPaintBrush size={60} color="#9C27B0" />, alt: "Graphics Design" }, // Graphics Design
    { icon: <FaServer size={60} color="#607D8B" />, alt: "Digital Services" }, // Digital Services
    { icon: <FaChartLine size={60} color="#FF9800" />, alt: "Data Analytics" }, // Data Analytics
];

const Banner = () => {
    return (
        <div className="relative h-[700px] flex items-center justify-center bg-gradient-to-r from-[#a9ccef] via-[#e9ecef] to-[#a9ccef] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
            {/* Background Image with Infinite Animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10" // Adjust opacity as needed
                style={{ backgroundImage: `url("https://example.com/your-background-image.jpg")` }} // Add your background image URL here
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulsating Background Overlay */}
            <motion.div
                className="absolute inset-0 bg-white/30 backdrop-blur-sm dark:bg-black/30" // Reduced opacity to 30%
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Text Content */}
                <div className="text-center lg:text-left z-10 max-w-lg lg:max-w-xl">
                    {/* Breathing Text Animation with Gradient */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 font-sans dark:from-blue-400 dark:to-purple-400"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, scale: 1.05 }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    >
                        Empowering Your Business
                    </motion.h1>

                    {/* Additional Content */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-sans"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        While We Take Care of Your Mobile App
                    </motion.p>

                    {/* Button with Hover Animation */}
                    <Button
                        text={'Lets Talk'}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    ></Button>

                    {/* Additional Content (Example: Numbers and Text) */}
                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-8">
                        <motion.div
                            className="text-gray-900 dark:text-gray-100 mb-4 lg:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            <p className="text-2xl font-bold">16+</p>
                            <p className="text-sm">Years</p>
                        </motion.div>
                        <motion.div
                            className="text-gray-900 dark:text-gray-100 mb-4 lg:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2.2 }}
                        >
                            <p className="text-2xl font-bold">12+</p>
                            <p className="text-sm">Countries</p>
                        </motion.div>
                        <motion.div
                            className="text-gray-900 dark:text-gray-100 mb-4 lg:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2.4 }}
                        >
                            <p className="text-2xl font-bold">180+</p>
                            <p className="text-sm">Professionals</p>
                        </motion.div>
                        <motion.div
                            className="text-gray-900 dark:text-gray-100 mb-4 lg:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2.6 }}
                        >
                            <p className="text-2xl font-bold">114+</p>
                            <p className="text-sm">Projects</p>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Image with Motion */}
                <motion.div
                    className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.img
                        src="https://i.ibb.co.com/v4NZLH71/pic-bg.jpg" // Add your side image URL here
                        alt="Side Image"
                        className="w-full max-w-2xl rounded-lg shadow-lg dark:shadow-gray-800/50"
                        initial={{ y: -100, opacity: 0, scale: 0.9 }} // Start from the top (y: -100) and slightly transparent
                        animate={{ y: 0, opacity: 1, scale: 1 }} // Move to the original position (y: 0) and fully visible
                        transition={{
                            duration: 1.5, // Duration of the animation
                            ease: "easeOut", // Smooth easing effect
                        }}
                    />
                </motion.div>
            </div>

            {/* Floating Icons with Infinite Animation */}
            {
                icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-16 h-16 opacity-30 hover:opacity-100 transition-opacity duration-300" // Reduced opacity to 30%
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
                ))
            }

            {/* Additional Floating Circles (Optional) */}
            <motion.div
                className="absolute top-20 left-20 w-12 h-12 bg-blue-500 rounded-full opacity-10 dark:opacity-20" // Reduced opacity to 10%
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-10 h-10 bg-purple-500 rounded-full opacity-10 dark:opacity-20" // Reduced opacity to 10%
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-40 right-10 w-8 h-8 bg-yellow-500 rounded-full opacity-10 dark:opacity-20" // Reduced opacity to 10%
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default Banner;