import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Software Development",
            excerpt: "Explore how AI is transforming the software development industry.",
            image: "/src/assets/cooing page.jpg",
            date: "October 10, 2023",
        },
        {
            id: 2,
            title: "Top UI/UX Design Trends for 2024",
            excerpt: "Discover the latest trends in UI/UX design for the upcoming year.",
            image: "/src/assets/bp.jpg",
            date: "October 5, 2023",
        },
        {
            id: 3,
            title: "Why Digital Marketing is Essential for Startups",
            excerpt: "Learn how digital marketing can help startups grow faster.",
            image: "/src/assets/digital.webp",
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
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                {/* Page Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
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
                            className="bg-white dark:bg-gray-700 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Blog Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />

                            {/* Blog Content */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {post.excerpt}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {post.date}
                                </p>
                                <motion.a
                                    href={`/blog/${post.id}`}
                                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Read More
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;