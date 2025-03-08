import { motion } from "framer-motion";

const Button = ({ text }) => {
    return (
        <motion.div
            className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            style={{
                background: "linear-gradient(90deg, #9333ea, #3b82f6, #9333ea)", // Initial gradient
                backgroundSize: "200% 200%", // For smooth animation
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Rotate gradient
            }}
            transition={{
                duration: 3, // Animation duration
                repeat: Infinity, // Infinite loop
                ease: "linear", // Smooth animation
            }}
        >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {text}
            </span>
        </motion.div>
    );
};

export default Button;