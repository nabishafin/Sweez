import React from 'react';
import { FaYoutube, FaFacebook, FaPinterest, FaBehance, FaDiscord, FaMicrosoft, FaDropbox } from 'react-icons/fa';
import { SiGoogle, SiAndroid, SiWordpress } from 'react-icons/si';
import { motion } from 'framer-motion';

function OurClients() {
    const clients = [
        { name: 'YouTube', icon: <FaYoutube />, image: null },
        { name: 'Google', icon: <SiGoogle />, image: null },
        { name: 'Facebook', icon: <FaFacebook />, image: null },
        { name: 'Pinterest', icon: <FaPinterest />, image: null },
        { name: 'Behance', icon: <FaBehance />, image: null },
        { name: 'DISCORD', icon: <FaDiscord />, image: null },
        { name: 'SPACEX', icon: null, image: '/spacex-logo.png' }, // Replace with actual path
        { name: 'Microsoft', icon: <FaMicrosoft />, image: null },
        { name: 'amazon', icon: null, image: '/amazon-logo.png' }, // Replace with actual path
        { name: 'android', icon: <SiAndroid />, image: null },
        { name: 'WordPress', icon: <SiWordpress />, image: null },
        { name: 'Dropbox', icon: <FaDropbox />, image: null },
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="container mx-auto text-center">
                {/* Section Heading */}
                <motion.h5
                    className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    OUR CLIENTS
                </motion.h5>

                {/* Title */}
                <motion.p
                    className="text-2xl font-semibold mb-4 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Trusted by over 786+ clients.
                </motion.p>

                {/* Description */}
                <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Our clients are our top priority, and we are committed to providing them with the highest level of service.
                </motion.p>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            {client.icon ? (
                                <span className="text-3xl text-gray-700 dark:text-gray-200" aria-label={client.name}>
                                    {client.icon}
                                </span>
                            ) : client.image ? (
                                <img src={client.image} alt={client.name} className="max-h-10" />
                            ) : (
                                <span className="text-gray-700 dark:text-gray-200">{client.name}</span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurClients;