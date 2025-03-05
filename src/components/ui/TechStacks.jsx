import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TechStacks = () => {
    // Tech stack data (replace with your actual icons)
    const techStacks = [
        { id: 1, icon: "https://cdn-icons-png.flaticon.com/512/919/919827.png", name: "HTML" },
        { id: 2, icon: "https://cdn-icons-png.flaticon.com/512/919/919826.png", name: "CSS" },
        { id: 3, icon: "https://cdn-icons-png.flaticon.com/512/919/919828.png", name: "JavaScript" },
        { id: 4, icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png", name: "React" },
        { id: 5, icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png", name: "Node.js" },
        { id: 6, icon: "https://cdn-icons-png.flaticon.com/512/919/919854.png", name: "Python" },
        { id: 7, icon: "https://cdn-icons-png.flaticon.com/512/919/919852.png", name: "Django" },
        { id: 8, icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png", name: "Java" },
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Tech Stacks
                </motion.h2>

                {/* Tech Stacks Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        slidesPerView={2} // Show 2 icons on small screens
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3, // Show 3 icons on medium screens
                            },
                            1024: {
                                slidesPerView: 5, // Show 5 icons on large screens
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {techStacks.map((tech) => (
                            <SwiperSlide key={tech.id}>
                                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-16 h-16 object-contain mb-4"
                                    />
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {tech.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStacks;