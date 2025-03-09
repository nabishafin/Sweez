import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { id: 1, value: '8+', label: 'Tech Partners', icon: 'handshake' },
        { id: 2, value: '18+', label: 'Years of Experience', icon: 'clock' },
        { id: 3, value: '30+', label: 'Countries Served', icon: 'globe' },
        { id: 4, value: '800+', label: 'Professionals', icon: 'users' },
        { id: 5, value: '2,500+', label: 'Projects Completed', icon: 'check-circle' },
    ];

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                            className="text-center"
                        >
                            <div className="mb-4">
                                {/* Add icons here based on stat.icon */}
                                {stat.icon === 'handshake' && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h2a2 2 0 012 2v1h8v-1a2 2 0 012-2h2m-2-4H12a2 2 0 01-2-2V5l-3 3m3-3l3 3" />
                                </svg>}
                                {stat.icon === 'clock' && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}
                                {stat.icon === 'globe' && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                </svg>}
                                {stat.icon === 'users' && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15.172 13.828a4 4 0 01-5.656 0m6.344-3.684a9 9 0 10-12.688 0M16 9.828a4 4 0 11-8 0m0 0a5.907 5.907 0 014 2.482M15 12a4 4 0 11-8 0" />
                                </svg>}
                                {stat.icon === 'check-circle' && <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}
                            </div>
                            <h3 className="text-2xl font-bold text-blue-500">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;