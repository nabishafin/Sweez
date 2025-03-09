import React from "react";
import { motion } from "framer-motion";

// Import the partner image if it's located in the 'src/assets' folder
import partnerImage from '../../assets/partner.jpg';
import Button from "../shared/Button";

function PartnerSection() {
    return (
        <section className="partner-section py-16 bg-gradient-to-r from-white via-[#a9ccef] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Want to Join Us as a Partner?
                        </motion.h2>
                        <motion.p
                            className="text-lg mb-8 text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            With the help of our partners, we can share our expertise and resources around the world. And thus we are expanding as the home of top IT professionals. So contact us to see how you can join our global family!
                        </motion.p>
                        <Button
                            text={'See Why & How'}
                            className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                        />
                    </div>

                    {/* Floating Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <motion.img
                            src={partnerImage} // Use the imported image path here
                            alt="Partner Illustration"
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg dark:shadow-gray-800/50"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={{ y: [0, -20, 0] }} // Floating up and down animation
                            transition={{
                                duration: 0.8, // For opacity and scale transition
                                delay: 0.6, // Initial delay
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut", // For floating animation
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;