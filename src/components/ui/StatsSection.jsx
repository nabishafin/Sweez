import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { value: '65%', label: 'Reduced Job' },
        { value: '$1.5-2M', label: 'Reduced Expenses' },
        { value: '50%', label: 'Reduced Search' },
        { value: '750%', label: 'Reduced Clicks' },  // Changed to 750% as in the image
        { value: '65%', label: 'Increase Efficiency' },
        { value: '50%', label: 'Reduced Time' },
    ];

    return (
        <section className="bg-[#f8f9fa] py-16">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h3 className="text-blue-500 text-sm font-semibold mb-2">Our Statistics</h3>
                    <motion.h2
                        className="text-3xl font-bold mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Various Statistics That We Have
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        We have various statistics about our platform which we update automatically every time you can also see our platform provides many benefits
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={`p-10 border ${index % 2 === 0 ? 'border-r' : ''} ${index > 2 ? 'border-t' : ''}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-[#343a40] mb-2">{stat.value}</div>
                            <div className="text-gray-700">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;