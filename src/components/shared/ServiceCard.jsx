import React from 'react';
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            key={index}
            className={`relative rounded-2xl p-6 shadow-2xl text-center transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group ${index % 2 === 0 ? 'border-dashed border-indigo-400' : 'border-solid border-purple-400'} animated-background`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Icon (Assuming service.icon is a React component or JSX) */}
            <div className="text-6xl mb-4 mx-auto w-20 h-20 flex items-center justify-center rounded-full  text-white transform group-hover:rotate-12 transition-all duration-300">
                <img src={service.icon} alt="" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-all duration-300">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-all duration-300">
                {service.description}
            </p>

            {/* Learn More Button (Hidden by default, shown on hover) */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-5">
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700">
                    Learn More
                </button>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </motion.div>
    );
};

export default ServiceCard;