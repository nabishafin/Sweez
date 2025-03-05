import React from 'react';
import { FaHandshake, FaClock, FaGlobeAmericas, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from framer-motion

function StatsSection() {
    const stats = [
        { icon: <FaHandshake />, value: '8+', label: 'Tech Partners' },
        { icon: <FaClock />, value: '18+', label: 'Years of Experience' },
        { icon: <FaGlobeAmericas />, value: '30+', label: 'Countries Served' },
        { icon: <FaCode />, value: '800+', label: 'Professionals' },
        { icon: <FaCheckCircle />, value: '2,500+', label: 'Projects Completed' },
    ];

    return (
        <section className="bg-white py-10">
            <div className="container mx-auto">
                <div className="flex justify-around items-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="text-5xl text-blue-500 mb-4">{stat.icon}</div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
