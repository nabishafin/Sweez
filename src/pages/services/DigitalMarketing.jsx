import React from "react";
import { motion } from "framer-motion";

const DigitalMarketing = () => {
    // Key features data
    const keyFeatures = [
        {
            id: 1,
            title: "Search Engine Optimization (SEO)",
            description: "We optimize your website to rank higher on search engines and drive organic traffic.",
        },
        {
            id: 2,
            title: "Pay-Per-Click (PPC) Advertising",
            description: "We create and manage targeted ad campaigns to maximize your ROI.",
        },
        {
            id: 3,
            title: "Social Media Marketing",
            description: "We build and execute strategies to grow your brand on social media platforms.",
        },
        {
            id: 4,
            title: "Content Marketing",
            description: "We create engaging content that attracts and converts your target audience.",
        },
        {
            id: 5,
            title: "Email Marketing",
            description: "We design and manage email campaigns to nurture leads and retain customers.",
        },
        {
            id: 6,
            title: "Analytics & Reporting",
            description: "We provide detailed insights and reports to track your campaign performance.",
        },
    ];

    // Process steps data
    const processSteps = [
        {
            id: 1,
            title: "Strategy Development",
            description: "We work with you to define your goals and create a tailored digital marketing strategy.",
        },
        {
            id: 2,
            title: "Campaign Planning",
            description: "We plan and design campaigns that align with your business objectives.",
        },
        {
            id: 3,
            title: "Implementation",
            description: "We execute campaigns across multiple digital channels.",
        },
        {
            id: 4,
            title: "Monitoring & Optimization",
            description: "We continuously monitor and optimize campaigns for better performance.",
        },
        {
            id: 5,
            title: "Reporting & Analysis",
            description: "We provide detailed reports and insights to measure success.",
        },
        {
            id: 6,
            title: "Ongoing Support",
            description: "We offer continuous support to ensure long-term success.",
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
                    Digital Marketing Services
                </motion.h1>

                {/* Introduction Section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sweez</span>, we specialize in creating data-driven digital marketing strategies that drive growth and maximize your online presence. From SEO to social media, we’ve got you covered.
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
                        Ready to Boost Your Online Presence?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let’s create a digital marketing strategy that drives results. Contact us today to get started!
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

export default DigitalMarketing;