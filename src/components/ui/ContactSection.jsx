import React from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";

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
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center">
                        <span className="mr-2">💬</span> Contact Us
                    </button>
                </a>
            </motion.div>

            {/* Enhanced Contact Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Get in Touch
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Have a project in mind or just want to say hello? We'd love to hear from you! Let's create something amazing together.
                        </motion.p>
                    </div>

                    {/* Contact Info and Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4 text-2xl">📞</span>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-400">+123 456 7890</p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4 text-2xl">📧</span>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">Email</p>
                                        <p className="text-gray-600 dark:text-gray-400">info@sweez.xyz</p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500 mr-4 text-2xl">📍</span>
                                    <div>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">Address</p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            123 Main Street, City, Country
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 50 }} // y-axis এ অ্যানিমেশন শুরু
                            whileInView={{ opacity: 1, y: 0 }} // y-axis এ অ্যানিমেশন শেষ
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }} // ডিলে এবং easing ফাংশন যোগ
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
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </motion.div>

                    </div>

                    {/* Contact Button */}
                    <div className="text-center mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}>
                        <Button text={'Contact Us'} />
                    </div>
                    {/* <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a
                            href="https://sweez.xyz/contact/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                        >
                            Contact Us
                        </a>
                    </motion.div> */}
                </div>
            </section>
        </>
    );
};

export default ContactSection;