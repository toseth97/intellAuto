"use client";

import { useState, useEffect } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    return (
        <section id="about" className="py-16 sm:py-20 bg-gray-50 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                About Us
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Pioneering the Future of Intelligent Automation
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Founded with a vision to transform industries
                                through cutting-edge technology, IntellAuto has
                                become a leader in intelligent automation
                                solutions. Our journey began with a simple
                                mission: to make complex automation accessible
                                and beneficial for businesses of all sizes.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Today, we serve over 500 clients across 30+
                                countries, delivering innovative solutions that
                                drive efficiency, reduce costs, and unlock new
                                possibilities for growth and innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                            Lightning Fast
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-600">
                                            Optimized performance
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                            Innovative
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-600">
                                            Cutting-edge technology
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                            Reliable
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-600">
                                            Trusted by thousands
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                            24/7 Support
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-600">
                                            Always here to help
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                To empower businesses with intelligent
                                automation solutions that enhance productivity,
                                drive innovation, and create sustainable
                                competitive advantages in an ever-evolving
                                digital landscape.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                To be the global leader in intelligent
                                automation, recognized for our technological
                                innovation, customer success, and positive
                                impact on the future of work.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                                Core Values
                            </h3>
                            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    Innovation and continuous improvement
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                    Customer-centric approach
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    Integrity and transparency
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                                    Collaboration and teamwork
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
