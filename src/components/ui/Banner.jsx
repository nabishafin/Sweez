import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="relative h-[700px] flex items-center justify-center bg-gradient-to-r from-[#121324] to-[#03041a] dark:from-[#1a1a2e] dark:to-[#00000f] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url("/src/assets/bgbanner.png")` }}
            />

            {/* External Image (Add this if you want an external image) */}
            <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="External Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
            />

            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-black opacity-40 dark:opacity-50"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Content */}
            <div className="text-center z-10">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Transforming Ideas into Reality
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    We deliver cutting-edge solutions for your digital needs.
                </motion.p>

                <motion.button
                    className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Explore Our Services
                </motion.button>
            </div>

            {/* Additional Content (Example: A small image or icon) */}
            <motion.img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Additional Icon"
                className="absolute bottom-10 right-10 w-16 h-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2 }}
                whileHover={{ scale: 1.2 }}
            />

            {/* Floating Icons Animation */}
            <motion.div
                className="absolute top-20 left-20 w-16 h-16 bg-white rounded-full opacity-10 dark:bg-gray-700"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-12 h-12 bg-white rounded-full opacity-10 dark:bg-gray-700"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default Banner;