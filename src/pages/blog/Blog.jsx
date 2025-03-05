
import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Software Development",
            excerpt: "Explore how AI is transforming the software development industry.",
            image: "https://via.placeholder.com/400x200",
            date: "October 10, 2023",
        },
        {
            id: 2,
            title: "Top UI/UX Design Trends for 2024",
            excerpt: "Discover the latest trends in UI/UX design for the upcoming year.",
            image: "https://via.placeholder.com/400x200",
            date: "October 5, 2023",
        },
        {
            id: 3,
            title: "Why Digital Marketing is Essential for Startups",
            excerpt: "Learn how digital marketing can help startups grow faster.",
            image: "https://via.placeholder.com/400x200",
            date: "September 28, 2023",
        },
    ];

    // Animation variants for Framer Motion
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
    return (
        <div>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
                <div className="container mx-auto px-4">
                    {/* Page Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
                    >
                        Our Blog
                    </motion.h1>

                    {/* Blog Posts Grid */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {blogPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={fadeInUp}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                            >
                                {/* Blog Image */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* Blog Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {post.date}
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Blog;