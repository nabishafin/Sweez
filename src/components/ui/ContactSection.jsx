import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <>
            {/* Fixed Contact Button */}
            <motion.div
                className="fixed bottom-8 right-8 z-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <a
                    href="https://sweez.xyz/contact/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105">
                        Contact Us
                    </button>
                </a>
            </motion.div>

            {/* Enhanced Contact Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Have a project in mind or just want to say hello? We'd love to hear from you!
                        </motion.p>
                    </div>

                    {/* Contact Info and Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4">📞</span>
                                    <p className="text-gray-700 dark:text-gray-300">+123 456 7890</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4">📧</span>
                                    <p className="text-gray-700 dark:text-gray-300">info@sweez.xyz</p>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4">📍</span>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        123 Main Street, City, Country
                                    </p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Location Map */}
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Our Location
                            </h3>
                            <div className="overflow-hidden rounded-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8f8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549402991!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Button */}
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://sweez.xyz/contact/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;