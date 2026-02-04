"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Frontpage() {
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

        const heroSection = document.getElementById("home");
        if (heroSection) {
            observer.observe(heroSection);
        }

        return () => {
            if (heroSection) {
                observer.unobserve(heroSection);
            }
        };
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
                    <div
                        className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} flex flex-col justify-center`}
                    >
                        <div className="space-y-4 text-center lg:text-left">
                            <h1 className=" text-5xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                                Intelligent
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                    {" "}
                                    Automation
                                </span>
                                Solutions
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Revolutionizing the future of automation with
                                cutting-edge AI technology. Our intelligent
                                systems deliver unparalleled efficiency,
                                precision, and innovation for businesses
                                worldwide.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/get-started"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 text-center"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 mx-auto lg:mx-0">
                            <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                                    500+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    Happy Clients
                                </div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                                    99%
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    Success Rate
                                </div>
                            </div>
                            <div className="text-center p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                                    24/7
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    Support
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} flex justify-center lg:justify-end`}
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                            <Image
                                src="/hero-img.png"
                                alt="Intelligent Automation"
                                fill
                                className="object-cover rounded-2xl shadow-2xl"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-right-8 xl:-right-12 bg-white p-3 sm:p-4 xl:p-6 rounded-xl shadow-lg border border-gray-200">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                        Live Demo
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600">
                                        Experience our technology
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
