import React from 'react';
import { motion } from 'framer-motion';

function OurClients() {
    const clients = [
        { name: 'Pinterest', icon: null, image: 'https://i.ibb.co.com/v4ySJCbD/Pinterest-Logo.png' },
        { name: 'Behance', icon: null, image: 'https://i.ibb.co.com/GQZfyxRr/Behance.png' },
        { name: 'IWC', icon: null, image: 'https://i.ibb.co.com/W4qDKmrT/iwc.png' },
        { name: 'SPACEX', icon: null, image: 'https://i.ibb.co.com/cXcTmMVw/spece-logo.png' },
        { name: 'Dropbox', icon: null, image: 'https://i.ibb.co.com/GQsPP1f4/Dropbox.png' },
        { name: 'Plant', icon: null, image: 'https://i.ibb.co.com/LX44b1Wt/plant.png' },
    ];

    return (
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 border-t border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="container mx-auto text-center px-4">
                {/* Section Heading */}
                <motion.h5
                    className="text-sm md:text-base text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    OUR CLIENTS
                </motion.h5>

                {/* Title */}
                <motion.p
                    className="text-2xl md:text-3xl font-bold mb-4 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Trusted by over <span className="text-blue-500">786+</span> clients.
                </motion.p>

                {/* Description */}
                <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-8 text-sm md:text-base max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Our clients are our top priority, and we are committed to providing them with the highest level of service.
                </motion.p>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-0">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {client.icon ? (
                                <span className="text-3xl md:text-4xl text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors" aria-label={client.name}>
                                    {client.icon}
                                </span>
                            ) : client.image ? (
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="max-h-10 md:max-h-12 hover:opacity-80 transition-opacity"
                                    loading="lazy"
                                />
                            ) : (
                                <span className="text-gray-700 dark:text-gray-200 font-medium">{client.name}</span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurClients;