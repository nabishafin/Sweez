import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO & Founder",
            image: "https://via.placeholder.com/150",
            description: "John is a visionary leader with over 10 years of experience in the tech industry.",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "CTO",
            image: "https://via.placeholder.com/150",
            description: "Jane is a tech enthusiast who loves building scalable and efficient systems.",
        },
        {
            id: 3,
            name: "Alice Johnson",
            role: "Lead Designer",
            image: "https://via.placeholder.com/150",
            description: "Alice is passionate about creating beautiful and user-friendly designs.",
        },
    ];

    // Core values data
    const coreValues = [
        {
            id: 1,
            title: "Innovation",
            description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
        },
        {
            id: 2,
            title: "Integrity",
            description: "We believe in honesty, transparency, and doing the right thing.",
        },
        {
            id: 3,
            title: "Customer Focus",
            description: "Our customers are at the heart of everything we do.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Page Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Us
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Welcome to <span className="font-semibold text-blue-600">Sweez</span>, where innovation meets excellence. We are a team of passionate professionals dedicated to delivering top-notch digital solutions that drive growth and success for our clients.
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Our mission is to empower businesses with innovative and scalable digital solutions that transform their ideas into reality. We strive to create value for our clients by delivering high-quality products and services.
                    </p>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value) => (
                            <div
                                key={value.id}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;