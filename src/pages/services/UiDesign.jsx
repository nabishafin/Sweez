import React from "react";
import { motion } from "framer-motion";

const UiDesign = () => {
    const keyFeatures = [
        {
            id: 1,
            title: "User Research",
            description: "We conduct in-depth research to understand your users and their needs.",
        },
        {
            id: 2,
            title: "Wireframing & Prototyping",
            description: "We create wireframes and prototypes to visualize the user experience.",
        },
        {
            id: 3,
            title: "Visual Design",
            description: "We craft visually stunning designs that align with your brand identity.",
        },
        {
            id: 4,
            title: "Interaction Design",
            description: "We design intuitive and engaging interactions for seamless user experiences.",
        },
        {
            id: 5,
            title: "Usability Testing",
            description: "We test our designs to ensure they are user-friendly and effective.",
        },
        {
            id: 6,
            title: "Responsive Design",
            description: "We ensure your designs look great on all devices and screen sizes.",
        },
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Discovery & Research",
            description: "We work with you to understand your goals and user needs.",
        },
        {
            id: 2,
            title: "Wireframing",
            description: "We create wireframes to outline the structure and layout of your design.",
        },
        {
            id: 3,
            title: "Prototyping",
            description: "We build interactive prototypes to visualize the user experience.",
        },
        {
            id: 4,
            title: "Visual Design",
            description: "We craft visually appealing designs that align with your brand.",
        },
        {
            id: 5,
            title: "Testing & Iteration",
            description: "We test our designs and iterate based on user feedback.",
        },
        {
            id: 6,
            title: "Implementation",
            description: "We deliver the final designs and assist with implementation.",
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
                    UI/UX Design Services
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sweez</span>, we specialize in creating intuitive and visually stunning user interfaces that deliver exceptional user experiences. Our designs are tailored to meet your business goals and user needs.
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
                        Ready to Elevate Your User Experience?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s create designs that delight your users and drive business success. Contact us today to get started!
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

export default UiDesign;