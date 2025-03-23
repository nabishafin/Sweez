import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const WhatWeDo = () => {
    return (
        <section className="what-we-do py-20 bg-white dark:bg-gray-900"> {/* Added padding and dark mode background */}
            <div className="container mx-auto px-4"> {/* Added container and padding */}
                <motion.div
                    className="flex flex-col md:flex-row items-center" // Responsive flex direction
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Image Side */}
                    <motion.div
                        className="md:w-1/2 mb-8 md:mb-0 relative" // Responsive width
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="https://i.ibb.co.com/FZK6Ww1/company-img.jpg"
                            alt="Company Image"
                            className="w-full rounded-lg shadow-lg dark:shadow-gray-800/50" // Added shadow and rounded corners
                        />
                        <motion.div
                            className="experience-badge absolute bottom-4 left-4 bg-red-500 text-white py-2 px-4 rotate-[-5deg]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            20 Years of Experience
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div className="md:w-1/2 md:pl-8"> {/* Responsive width and padding */}
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Do</h2> {/* Adjusted heading size and dark mode text color */}
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            UI design files free download from freewebpad. We provide these
                            elements free of charge for all purposes.
                        </p>
                        <div className="mission_vision">
                            <p className='mb-2 text-gray-600 dark:text-gray-300'>Mission : freewebpad...This is what we are and this is what we do. We provide web solution Elements...</p>
                            <p className='text-gray-600 dark:text-gray-300'>Vision : freewebpad...This is what we are and this is what we do. We provide web solution Elements...</p>
                        </div>
                        <div className='mt-4'>
                            <Button text={'Learn More'} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;