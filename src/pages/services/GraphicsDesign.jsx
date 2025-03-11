import React from "react";
import { motion } from "framer-motion";

const GraphicsDesign = () => {
    // Key features data
    const keyFeatures = [
        {
            id: 1,
            title: "Brand Identity Design",
            description: "We create unique and memorable brand identities that resonate with your audience.",
        },
        {
            id: 2,
            title: "Print Design",
            description: "We design stunning print materials, including brochures, posters, and business cards.",
        },
        {
            id: 3,
            title: "Digital Graphics",
            description: "We craft eye-catching digital graphics for websites, social media, and ads.",
        },
        {
            id: 4,
            title: "Illustration",
            description: "We create custom illustrations that bring your ideas to life.",
        },
        {
            id: 5,
            title: "Packaging Design",
            description: "We design packaging that stands out on the shelves and appeals to your customers.",
        },
        {
            id: 6,
            title: "Motion Graphics",
            description: "We produce dynamic motion graphics for videos and presentations.",
        },
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Discovery & Research",
            description: "We work with you to understand your goals and target audience.",
        },
        {
            id: 2,
            title: "Concept Development",
            description: "We brainstorm and create initial design concepts.",
        },
        {
            id: 3,
            title: "Design Creation",
            description: "We craft high-quality designs based on the approved concepts.",
        },
        {
            id: 4,
            title: "Feedback & Revisions",
            description: "We refine the designs based on your feedback.",
        },
        {
            id: 5,
            title: "Final Delivery",
            description: "We deliver the final designs in all required formats.",
        },
        {
            id: 6,
            title: "Support & Maintenance",
            description: "We provide ongoing support for your design needs.",
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
                    Graphics Design Services
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sweez</span>, we specialize in creating visually stunning and impactful designs that elevate your brand. From logos to packaging, we bring your vision to life with creativity and precision.
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
                        Ready to Transform Your Brand with Stunning Designs?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s create designs that captivate your audience and elevate your brand. Contact us today to get started!
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

export default GraphicsDesign;