import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ ডেটা (আপনার ডেটা দিয়ে প্রতিস্থাপন করুন)
const faqs = [
    {
        id: 1,
        question: "What services do you offer?",
        answer:
            "We offer a wide range of services including web development, mobile app development, AI solutions, and digital marketing.",
    },
    {
        id: 2,
        question: "How can I contact your support team?",
        answer:
            "You can contact our support team via email at support@sweez.xyz or through our contact page.",
    },
    {
        id: 3,
        question: "Do you provide custom software solutions?",
        answer:
            "Yes, we specialize in creating custom software solutions tailored to your business needs.",
    },
    {
        id: 4,
        question: "What technologies do you use?",
        answer:
            "We use the latest technologies such as React, Node.js, Python, and AI frameworks to deliver high-quality solutions.",
    },
];

// এনিমেশন ভেরিয়েন্ট
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* সেকশন টাইটেল */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
                >
                    Frequently Asked Questions
                </motion.h2>

                {/* FAQ লিস্ট */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            variants={fadeInUp}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md"
                        >
                            {/* প্রশ্ন */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {faq.question}
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {/* উত্তর */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FaqSection;