import React from "react";
import { motion } from "framer-motion";

const MobileApps = () => {
    // Key features data
    const keyFeatures = [
        {
            id: 1,
            title: "Cross-Platform Development",
            description: "We build apps that work seamlessly on both iOS and Android platforms.",
        },
        {
            id: 2,
            title: "User-Centric Design",
            description: "Our designs focus on providing an intuitive and engaging user experience.",
        },
        {
            id: 3,
            title: "High Performance",
            description: "We optimize your app for speed and efficiency to ensure smooth performance.",
        },
        {
            id: 4,
            title: "Scalability",
            description: "Our apps are built to grow with your business and handle increasing user loads.",
        },
        {
            id: 5,
            title: "Security",
            description: "We implement robust security measures to protect your app and user data.",
        },
        {
            id: 6,
            title: "Maintenance & Support",
            description: "We provide ongoing support to keep your app running smoothly.",
        },
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Discovery & Planning",
            description: "We work with you to understand your goals and plan the project.",
        },
        {
            id: 2,
            title: "Design & Prototyping",
            description: "We create wireframes and prototypes to visualize the final product.",
        },
        {
            id: 3,
            title: "Development",
            description: "Our team builds your app using the latest technologies.",
        },
        {
            id: 4,
            title: "Testing & Launch",
            description: "We thoroughly test your app and ensure a smooth launch.",
        },
        {
            id: 5,
            title: "Maintenance & Support",
            description: "We provide ongoing support to keep your app running smoothly.",
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
                    Mobile App Development Services
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-blue-600">Sweez</span>, we specialize in creating high-performance mobile applications that deliver exceptional user experiences. Whether you need a simple app or a complex solution, we’ve got you covered.
                    </p>
                </motion.div>

                {/* Key Features Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Process Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Our Process
                    </h2>
                    <div className="space-y-8">
                        {processSteps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call-to-Action Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to Build Your Mobile App?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s turn your vision into reality. Contact us today to get started!
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                    >
                        Get Started
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileApps;