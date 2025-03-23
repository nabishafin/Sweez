import React, { useState } from "react";
import { SunIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { GiMoon } from "react-icons/gi";
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle theme function
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    // Dropdown menu handler
    const handleDropdown = (isOpen) => {
        setIsDropdownOpen(isOpen);
    };

    // Navbar links
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300 font-semibold text-lg"
                            : "hover:text-blue-500 dark:hover:text-blue-300 font-semibold text-lg"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300 font-semibold text-lg"
                            : "hover:text-blue-500 dark:hover:text-blue-300 font-semibold text-lg"
                    }
                >
                    About Us
                </NavLink>
            </li>

            {/* Dropdown Menu */}
            <li
                className="dropdown dropdown-hover"
                onMouseEnter={() => handleDropdown(true)}
                onMouseLeave={() => handleDropdown(false)}
            >
                <label
                    tabIndex={0}
                    className="hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1 cursor-pointer font-semibold text-lg"
                >
                    Services <FaArrowDown size={15} className="text-xl mt-1" />
                </label>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52"
                        >
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }} // Scale up on hover
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth scale animation
                                >
                                    <NavLink
                                        to="/services/web-development"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        Web Development
                                    </NavLink>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <NavLink
                                        to="/services/mobileapp"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        Mobile Apps
                                    </NavLink>
                                </motion.div>
                            </li>

                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <NavLink
                                        to="/services/aisolutions"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        AI Solutions
                                    </NavLink>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <NavLink
                                        to="/services/GraphicsDesign"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        Graphics Design
                                    </NavLink>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <NavLink
                                        to="/services/UI/UXDesign"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        UI/UX Design
                                    </NavLink>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <NavLink
                                        to="/services/DigitalMarketing"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-blue-500 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-gray-700 px-3 py-2 rounded-lg"
                                                : "hover:text-blue-500 dark:hover:text-blue-300  dark:hover:bg-gray-700 px-3 py-2 rounded-lg"
                                        }
                                    >
                                        Digital Marketing
                                    </NavLink>
                                </motion.div>
                            </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </li>

            <li>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300 font-semibold text-lg"
                            : "hover:text-blue-500 dark:hover:text-blue-300 font-semibold text-lg"
                    }
                >
                    Blog
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300 font-semibold text-lg"
                            : "hover:text-blue-500 dark:hover:text-blue-300 font-semibold text-lg"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm dark:bg-gray-900 dark:text-white sticky top-0 z-50">
            {/* Mobile menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow "
                    >
                        {links}
                    </ul>
                </div>

                {/* Brand Logo */}
                <NavLink to="/" className="btn btn-ghost text-3xl dark:text-white">
                    <img className="w-32 dark:bg-white dark:p-2 dark:rounded-lg" src="https://sweez.xyz/image/Logo/sweez_2000.png" alt="" />
                </NavLink>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Theme toggle button */}
            <div className="navbar-end flex gap-4 items-center">
                <div className="pl-3 md:pl-0">
                    <button
                        onClick={toggleTheme}
                        className="p-2 hover:text-gray-300 dark:hover:text-gray-400"
                    >
                        {darkMode ? (
                            <SunIcon className="h-12 w-12 text-orange-400" />
                        ) : (
                            <GiMoon className="h-10 w-10 text-blue-950 dark:text-blue-300" />
                        )}
                    </button>
                </div>
                <div className="hidden md:block mt-1">
                    <Button text={' Schedule a Call'}>

                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

