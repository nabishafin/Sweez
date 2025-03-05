import React from 'react';
import { FaHandshake, FaClock, FaGlobeAmericas, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

function StatsSection() {
    const stats = [
        { icon: <FaHandshake />, value: '8+', label: 'Tech Partners' },
        { icon: <FaClock />, value: '18+', label: 'Years of Experience' },
        { icon: <FaGlobeAmericas />, value: '30+', label: 'Countries Served' },
        { icon: <FaCode />, value: '800+', label: 'Professionals' },
        { icon: <FaCheckCircle />, value: '2,500+', label: 'Projects Completed' },
    ];

    return (
        <section className="bg-white dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="text-5xl text-blue-500 dark:text-blue-400 mb-4" aria-hidden="true">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-800 dark:text-white">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;