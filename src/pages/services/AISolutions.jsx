import React from "react";
import { motion } from "framer-motion";

const AISolutions = () => {
    // Key features data
    const keyFeatures = [
        {
            id: 1,
            title: "Machine Learning",
            description: "We build intelligent systems that learn and adapt to deliver actionable insights.",
        },
        {
            id: 2,
            title: "Natural Language Processing",
            description: "Our NLP solutions enable seamless human-computer interactions.",
        },
        {
            id: 3,
            title: "Computer Vision",
            description: "We develop AI-powered vision systems for image and video analysis.",
        },
        {
            id: 4,
            title: "Predictive Analytics",
            description: "Our AI models predict trends and outcomes to drive data-driven decisions.",
        },
        {
            id: 5,
            title: "Automation",
            description: "We automate repetitive tasks to improve efficiency and reduce costs.",
        },
        {
            id: 6,
            title: "AI Consulting",
            description: "We provide expert guidance to help you integrate AI into your business.",
        },
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Discovery & Planning",
            description: "We work with you to understand your goals and plan the AI solution.",
        },
        {
            id: 2,
            title: "Data Collection & Preparation",
            description: "We gather and preprocess data to ensure high-quality inputs for AI models.",
        },
        {
            id: 3,
            title: "Model Development",
            description: "Our team builds and trains AI models tailored to your needs.",
        },
        {
            id: 4,
            title: "Testing & Validation",
            description: "We rigorously test and validate the AI solution to ensure accuracy.",
        },
        {
            id: 5,
            title: "Deployment & Integration",
            description: "We deploy the AI solution and integrate it into your existing systems.",
        },
        {
            id: 6,
            title: "Monitoring & Optimization",
            description: "We continuously monitor and optimize the AI solution for peak performance.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                {/* Page Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    AI Solutions
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sweez</span>, we harness the power of artificial intelligence to solve complex problems and drive innovation. Our AI solutions are designed to transform your business and unlock new opportunities.
                    </p>
                </motion.div>

                {/* Key Features Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyFeatures.map((feature) => (
                            <motion.div
                                key={feature.id}
                                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
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
                    <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
                        Our Process
                    </h2>
                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-blue-600 dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
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
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s build intelligent solutions that drive growth and innovation. Contact us today to get started!
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        Get Started
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default AISolutions;