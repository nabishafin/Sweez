import React from "react";
import { motion } from "framer-motion";

// Icons for key features (you can replace these with your own icons)
import { FaMobileAlt, FaUserFriends, FaSearch, FaRocket, FaCogs, FaShieldAlt } from "react-icons/fa";

const WebDevelopment = () => {
    // Key features data
    const keyFeatures = [
        {
            id: 1,
            title: "Responsive Design",
            description: "We create websites that look great on all devices, from desktops to mobile phones.",
            icon: <FaMobileAlt className="w-12 h-12 mb-4 text-blue-500" />,
        },
        {
            id: 2,
            title: "User-Friendly Interface",
            description: "Our designs focus on usability and provide an intuitive experience for your users.",
            icon: <FaUserFriends className="w-12 h-12 mb-4 text-blue-500" />,
        },
        {
            id: 3,
            title: "SEO Optimization",
            description: "We optimize your website to rank higher on search engines and attract more traffic.",
            icon: <FaSearch className="w-12 h-12 mb-4 text-blue-500" />,
        },
        {
            id: 4,
            title: "Fast Loading Speed",
            description: "We ensure your website loads quickly to provide a seamless user experience.",
            icon: <FaRocket className="w-12 h-12 mb-4 text-blue-500" />,
        },
        {
            id: 5,
            title: "Custom Solutions",
            description: "We tailor our solutions to meet your specific business needs and goals.",
            icon: <FaCogs className="w-12 h-12 mb-4 text-blue-500" />,
        },
        {
            id: 6,
            title: "Secure & Reliable",
            description: "We implement the latest security measures to protect your website and data.",
            icon: <FaShieldAlt className="w-12 h-12 mb-4 text-blue-500" />,
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
            description: "Our team builds your website using the latest technologies.",
        },
        {
            id: 4,
            title: "Testing & Launch",
            description: "We thoroughly test your website and ensure a smooth launch.",
        },
        {
            id: 5,
            title: "Maintenance & Support",
            description: "We provide ongoing support to keep your website running smoothly.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Page Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Web Development Services
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-blue-600">Sweez</span>, we specialize in creating stunning, high-performance websites that drive results. Whether you need a simple portfolio site or a complex web application, we’ve got you covered.
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
                            <motion.div
                                key={feature.id}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                {feature.icon}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
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
                    <div className="space-y-8 relative">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="flex items-start space-x-6"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                        {step.id}
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
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
                        Ready to Build Your Website?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s turn your vision into reality. Contact us today to get started!
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        Get Started
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default WebDevelopment;