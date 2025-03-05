import React from "react";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ContactsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
                >
                    Contact Us
                </motion.h1>

                {/* Contact Information and Form */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Contact Information */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Our Contact Info
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            We'd love to hear from you! Reach out to us via email, phone, or
                            visit our office.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="text-gray-900 dark:text-white font-medium">
                                    Address:
                                </span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">
                                    123 Tech Street, Dhaka, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-900 dark:text-white font-medium">
                                    Phone:
                                </span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">
                                    +880 1234 567890
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-900 dark:text-white font-medium">
                                    Email:
                                </span>
                                <span className="ml-2 text-gray-600 dark:text-gray-300">
                                    info@sweez.xyz
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Send Us a Message
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Google Map Embed */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-12"
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Our Location
                    </h2>
                    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.793849728086!2d90.4062373154315!3d23.75097288458914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1633084800000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactsPage;