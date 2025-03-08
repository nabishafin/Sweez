import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
    // Services data
    const services = [
        {
            icon: "💻", // Replace with your icon or image
            title: "Software Development",
            description: "We build robust and scalable software solutions tailored to your business needs.",
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Crafting intuitive and high-performance mobile applications for iOS and Android.",
        },
        {
            icon: "🌐",
            title: "Web Design & Development",
            description: "Designing and developing responsive, user-friendly websites that drive engagement.",
        },
        {
            icon: "🎨",
            title: "Graphics Design",
            description: "Creating visually stunning designs that captivate your audience.",
        },
        {
            icon: "🖌️",
            title: "UI/UX Design",
            description: "Designing seamless user experiences that enhance usability and satisfaction.",
        },
        {
            icon: "🤖",
            title: "AI Automation",
            description: "Leveraging AI to automate processes and improve efficiency.",
        },
        {
            icon: "📝",
            title: "Content Creation",
            description: "Producing compelling content that resonates with your target audience.",
        },
        {
            icon: "📈",
            title: "Digital Marketing",
            description: "Driving growth through data-driven digital marketing strategies.",
        },
        {
            icon: "💡",
            title: "IT Consultation",
            description: "Providing expert IT consultation to optimize your business operations.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl text-center hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Icon */}
                            <div className="text-6xl mb-4 text-purple-500 dark:text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {service.description}
                            </p>

                            {/* Optional: Add a Button for More Interaction */}
                            <motion.button
                                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;