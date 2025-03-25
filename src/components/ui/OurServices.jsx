import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../shared/ServiceCard";

// Import all images
import pic1 from '../../assets/8759069.png';
import mobileApp from '../../assets/mobileApp.png';
import webdep from '../../assets/webdep.png';
import gpdesign from '../../assets/gpdesign.png';
import uiux from '../../assets/ui ux.png';
import aiIcon from '../../assets/ai icon.png';
import content from '../../assets/content.png';
import digitalMarketing from '../../assets/d-marketing.png';
import itConsultation from '../../assets/it.jpg';

const OurServices = () => {
    // Services data
    const services = [
        {
            icon: pic1,
            title: "Software Development",
            description: "We build robust and scalable software solutions tailored to your business needs.",
            bg: "bg-yellow-50 dark:bg-yellow-100"
        },
        {
            icon: mobileApp,
            title: "Mobile App Development",
            description: "Crafting intuitive and high-performance mobile applications for iOS and Android.",
            bg: "bg-blue-50 dark:bg-blue-100"
        },
        {
            icon: webdep,
            title: "Web Development",
            description: "Designing and developing responsive, user-friendly websites.",
            bg: "bg-green-50 dark:bg-green-100"
        },
        {
            icon: gpdesign,
            title: "Graphics Design",
            description: "Creating visually stunning designs that captivate your audience.",
            bg: "bg-pink-50 dark:bg-pink-100"
        },
        {
            icon: uiux,
            title: "UI/UX Design",
            description: "Designing seamless user experiences that enhance usability and satisfaction.",
            bg: "bg-purple-50 dark:bg-purple-100"
        },
        {
            icon: aiIcon,
            title: "AI Automation",
            description: "Leveraging AI to automate processes and improve efficiency.",
            bg: "bg-indigo-50 dark:bg-indigo-100"
        },
        {
            icon: content,
            title: "Content Creation",
            description: "Producing compelling content that resonates with your target audience.",
            bg: "bg-red-50 dark:bg-red-100"
        },
        {
            icon: digitalMarketing,
            title: "Digital Marketing",
            description: "Driving growth through data-driven digital marketing strategies.",
            bg: "bg-teal-50 dark:bg-teal-100"
        },
        {
            icon: itConsultation,
            title: "IT Consultation",
            description: "Providing expert IT consultation to optimize your business operations.",
            bg: "bg-gray-50 dark:bg-gray-100"
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
                                "We specialize in providing a comprehensive suite of services that are designed to empower businesses, large and small, to thrive and achieve lasting success in today’s ever-evolving digital world. With the rapid advancements in technology and the increasing reliance on digital platforms, it’s crucial for businesses to establish a strong online presence, engage their target audience effectively, and remain competitive in the marketplace. Our team of experts is dedicated to delivering tailored solutions that address the unique challenges of each business.

                                Beyond these core offerings, we also provide e-commerce solutions, mobile app development, and advanced analytics to help you understand your customer behavior and make informed decisions. We take a holistic approach to every project, ensuring that each aspect of your digital strategy is integrated seamlessly for maximum impact. Our goal is to help you not only survive but thrive in the digital age, creating sustainable growth, fostering customer loyalty, and positioning your business for long-term success."
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