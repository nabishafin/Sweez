import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300"
                            : "hover:text-blue-500 dark:hover:text-blue-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/terms"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300"
                            : "hover:text-blue-500 dark:hover:text-blue-300"
                    }
                >
                    Terms and Policy
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 dark:text-blue-300"
                            : "hover:text-blue-500 dark:hover:text-blue-300"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm dark:bg-gray-800 dark:text-white">
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>

                {/* Brand Logo */}
                <NavLink to="/" className="btn btn-ghost text-xl dark:text-white">
                    Sweez
                </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Theme Toggle Button */}
            <div className="navbar-end">
                <button
                    onClick={toggleTheme}
                    className="p-2 hover:text-gray-300 dark:hover:text-gray-400"
                >
                    {darkMode ? (
                        <SunIcon className="h-6 w-6 text-orange-400" />
                    ) : (
                        <MoonIcon className="h-6 w-6 text-blue-950 dark:text-blue-300" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;