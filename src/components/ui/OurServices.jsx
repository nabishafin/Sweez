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
            bg: "bg-yellow-50 dark:bg-yellow-100" // Light yellow for light mode, lighter yellow for dark mode
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Crafting intuitive and high-performance mobile applications for iOS and Android.",
            bg: "bg-blue-50 dark:bg-blue-100" // Light blue for light mode, lighter blue for dark mode
        },
        {
            icon: "🌐",
            title: "Web Development",
            description: "Designing and developing responsive, user-friendly websites ",
            bg: "bg-green-50 dark:bg-green-100" // Light green for light mode, lighter green for dark mode
        },
        {
            icon: "🎨",
            title: "Graphics Design",
            description: "Creating visually stunning designs that captivate your audience.",
            bg: "bg-pink-50 dark:bg-pink-100" // Light pink for light mode, lighter pink for dark mode
        },
        {
            icon: "🖌️",
            title: "UI/UX Design",
            description: "Designing seamless user experiences that enhance usability and satisfaction.",
            bg: "bg-purple-50 dark:bg-purple-100" // Light purple for light mode, lighter purple for dark mode
        },
        {
            icon: "🤖",
            title: "AI Automation",
            description: "Leveraging AI to automate processes and improve efficiency.",
            bg: "bg-indigo-50 dark:bg-indigo-100" // Light indigo for light mode, lighter indigo for dark mode
        },
        {
            icon: "📝",
            title: "Content Creation",
            description: "Producing compelling content that resonates with your target audience.",
            bg: "bg-red-50 dark:bg-red-100" // Light red for light mode, lighter red for dark mode
        },
        {
            icon: "📈",
            title: "Digital Marketing",
            description: "Driving growth through data-driven digital marketing strategies.",
            bg: "bg-teal-50 dark:bg-teal-100" // Light teal for light mode, lighter teal for dark mode
        },
        {
            icon: "💡",
            title: "IT Consultation",
            description: "Providing expert IT consultation to optimize your business operations.",
            bg: "bg-gray-50 dark:bg-gray-100" // Light gray for light mode, lighter gray for dark mode
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20"> {/* Added dark mode background */}
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
                            backgroundImage: `url('https://i.ibb.co.com/hJbjPsmB/pic-s.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        initial={{ opacity: 0, y: 50 }} // y-axis এ অ্যানিমেশন শুরু
                        whileInView={{ opacity: 1, y: 0 }} // y-axis এ অ্যানিমেশন শেষ
                        transition={{ duration: 0.8, ease: "easeOut" }} // easing ফাংশন যোগ
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
                                className="bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                whileHover={{ scale: 1.1, rotate: 5 }} // হোভারে স্কেল এবং রোটেট অ্যানিমেশন
                                whileTap={{ scale: 0.9 }}
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