import React from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    What We Do
                </motion.h2>

                {/* Mission and Expertise Description */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-blue-600">Our Company</span>, we are dedicated to transforming ideas into reality. With a team of experts in software development, mobile apps, web design, AI automation, and digital marketing, we deliver cutting-edge solutions that drive growth and innovation for businesses worldwide.
                    </p>
                </motion.div>

                {/* Expertise Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Software Development */}
                    <motion.div
                        className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="text-6xl mb-4">💻</div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Software Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            We build robust and scalable software solutions tailored to your business needs.
                        </p>
                    </motion.div>

                    {/* Card 2: Mobile App Development */}
                    <motion.div
                        className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="text-6xl mb-4">📱</div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Mobile App Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Crafting intuitive and high-performance mobile applications for iOS and Android.
                        </p>
                    </motion.div>

                    {/* Card 3: Web Design & Development */}
                    <motion.div
                        className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="text-6xl mb-4">🌐</div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Web Design & Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Designing and developing responsive, user-friendly websites that drive engagement.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;