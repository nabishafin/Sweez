import React from "react";
import { motion } from "framer-motion";

const OurClients = () => {
    // Client logos (replace with your actual logos)
    const clients = [
        { id: 1, logo: "https://i.ibb.co.com/Yknkq1t/doctor-5.jpg", alt: "Client 1" },
        { id: 2, logo: "https://i.ibb.co.com/Pwh7XXM/sh-AFIN-PIC.jpg", alt: "Client 2" },
        { id: 3, logo: "https://i.ibb.co.com/9GPcN4N/masrafi.jpg", alt: "Client 3" },
        { id: 4, logo: "https://i.ibb.co.com/VD11W89/bannner.jpg", alt: "Client 4" },
        { id: 5, logo: "https://i.ibb.co.com/16sYHsG/sumaya.jpg", alt: "Client 5" },
        { id: 6, logo: "/images/clients/client6.png", alt: "Client 6" },
        { id: 7, logo: "/images/clients/client7.png", alt: "Client 7" },
        { id: 8, logo: "/images/clients/client8.png", alt: "Client 8" },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Clients
                </motion.h2>

                {/* Client Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.id}
                            className="flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                        >
                            <img
                                src={client.logo}
                                alt={client.alt}
                                className="w-32 h-16 object-contain grayscale hover:grayscale-0 transition-all"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurClients;