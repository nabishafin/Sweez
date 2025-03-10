import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// লোগো ইমেজ URL
const logo = "https://sweez.xyz/image/Logo/sweez_2000.png";

const Footer = () => {
    return (
        <footer className="bg-gray-800 dark:bg-gray-700 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* লোগো সাইডে রাখুন */}
                    <motion.div
                        className="flex justify-center md:justify-start items-center"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={logo} // লোগো ইমেজ সোর্স
                            alt="Sweez Logo"
                            className="h-8" // লোগোর সাইজ কাস্টমাইজ করুন
                        />
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-blue-500 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-blue-500 transition-colors">
                                    Terms and Policy
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="text-center md:text-right"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Email: info@sweez.xyz</p>
                        <p className="text-gray-400">Phone: +123 456 7890</p>
                    </motion.div>
                </div>

                {/* Copyright Text */}
                <motion.div
                    className="text-center mt-8 pt-8 border-t border-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Sweez. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;