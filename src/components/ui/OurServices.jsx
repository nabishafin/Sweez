import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../shared/ServiceCard";

const OurServices = () => {
    // Services data
    const services = [
        {
            icon: "💻", // Replace with your icon or image
            title: "Software Development",
            description: "We build robust and scalable software solutions tailored to your business needs.",
            bg: "bg-yellow-50" // Light yellow
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Crafting intuitive and high-performance mobile applications for iOS and Android.",
            bg: "bg-blue-50" // Light blue
        },
        {
            icon: "🌐",
            title: "Web Development",
            description: "Designing and developing responsive, user-friendly websites ",
            bg: "bg-green-50" // Light green
        },
        {
            icon: "🎨",
            title: "Graphics Design",
            description: "Creating visually stunning designs that captivate your audience.",
            bg: "bg-pink-50" // Light pink
        },
        {
            icon: "🖌️",
            title: "UI/UX Design",
            description: "Designing seamless user experiences that enhance usability and satisfaction.",
            bg: "bg-purple-50" // Light purple
        },
        {
            icon: "🤖",
            title: "AI Automation",
            description: "Leveraging AI to automate processes and improve efficiency.",
            bg: "bg-indigo-50" // Light indigo
        },
        {
            icon: "📝",
            title: "Content Creation",
            description: "Producing compelling content that resonates with your target audience.",
            bg: "bg-red-50" // Light red
        },
        {
            icon: "📈",
            title: "Digital Marketing",
            description: "Driving growth through data-driven digital marketing strategies.",
            bg: "bg-teal-50" // Light teal
        },
        {
            icon: "💡",
            title: "IT Consultation",
            description: "Providing expert IT consultation to optimize your business operations.",
            bg: "bg-gray-50" // Light gray
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Right Section - Service Cards */}
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ServiceCard
                                    service={service}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Left Section - Text and Button */}
                    <motion.div
                        className="relative md:col-span-1 text-white p-8 rounded-lg shadow-2xl overflow-hidden"
                        style={{
                            backgroundImage: `url('https://i.ibb.co.com/hJbjPsmB/pic-s.jpg')`, // Replace with your image URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        initial={{ opacity: 0, x: 50 }} // Adjusted x to 50 for right-side entry
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Overlay to make text readable */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
                            <p className="mb-8 text-gray-200 text-lg">
                                We offer a wide range of services to help your business grow and succeed in the digital world.
                            </p>

                            {/* Button with Hover Effect */}
                            <motion.button
                                className="bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore All Services
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;