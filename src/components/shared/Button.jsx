import { motion } from "framer-motion";

const Button = ({ text }) => {
    return (
        <motion.div
            className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            style={{
                background: "linear-gradient(90deg, #9333ea, #3b82f6, #9333ea)",
                backgroundSize: "200% 200%",
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md">
                {text}
            </span>
        </motion.div>
    );
};

export default Button;