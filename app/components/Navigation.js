"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        // Toggle body scroll and blur effect
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.backdropFilter = "blur(4px)";
        } else {
            document.body.style.overflow = "";
            document.body.style.backdropFilter = "";
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "";
        document.body.style.backdropFilter = "";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Mobile overlay for blur effect */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            <nav
                className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex mt-2 justify-between h-16">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex-shrink-0 flex items-center"
                                onClick={closeMenu}
                            >
                                <span className="text-xl font-bold text-gray-800">
                                    IntellAuto
                                </span>
                            </Link>
                        </div>

                        <div className="hidden md:flex md:space-x-8 mt-2">
                            <Link
                                href="#home"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                About
                            </Link>
                            <Link
                                href="#services"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
                                aria-label="Open main menu"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6 transition-transform duration-300`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6 transition-transform duration-300 rotate-180`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Slides from right to center */}
                <div
                    className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div
                        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
                            isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <Link
                                href="/"
                                className="text-xl font-bold text-gray-800"
                                onClick={closeMenu}
                            >
                                IntellAuto
                            </Link>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="py-4 space-y-1">
                            <Link
                                href="#home"
                                className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <Link
                                href="#services"
                                className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-6 py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
