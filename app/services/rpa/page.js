"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function RPAServicePage() {
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

        const section = document.getElementById("rpa-service");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Hero Section */}
            <section id="rpa-service" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                                Robotic Process Automation
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Streamline Operations with
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    {" "}
                                    RPA Excellence
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Automate repetitive tasks with advanced robotic
                                process automation that works 24/7 without
                                errors. Increase efficiency, reduce costs, and
                                free your team for higher-value work.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                                    Request Demo
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        99.9%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Accuracy Rate
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        50%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Cost Reduction
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Non-stop Operation
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src="/hero-img.png"
                                    alt="RPA Service"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    RPA Ready
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Key Features
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our RPA solutions combine advanced robotics with
                            intelligent automation to deliver seamless process
                            automation across your organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">⚙️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Task Automation
                            </h3>
                            <p className="text-gray-600">
                                Automate repetitive, rule-based tasks across
                                multiple applications and systems.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Workflow Optimization
                            </h3>
                            <p className="text-gray-600">
                                Streamline complex workflows and eliminate
                                bottlenecks in your processes.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">❌</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Error Reduction
                            </h3>
                            <p className="text-gray-600">
                                Eliminate human errors and ensure consistent,
                                accurate task execution.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Scalable Solutions
                            </h3>
                            <p className="text-gray-600">
                                Scale automation across departments and
                                processes seamlessly.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔄</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Continuous Operation
                            </h3>
                            <p className="text-gray-600">
                                Operate 24/7 without breaks, holidays, or
                                downtime.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Real-time Monitoring
                            </h3>
                            <p className="text-gray-600">
                                Track performance and monitor automated
                                processes in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Use Cases
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover how our RPA solutions can transform various
                            aspects of your business operations.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Data Entry
                                    </h3>
                                    <p className="text-gray-600">
                                        Automate data entry tasks across
                                        multiple systems, reducing errors and
                                        increasing speed.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Invoice Processing
                                    </h3>
                                    <p className="text-gray-600">
                                        Process invoices automatically, extract
                                        data, and update accounting systems.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Report Generation
                                    </h3>
                                    <p className="text-gray-600">
                                        Generate and distribute reports
                                        automatically on scheduled intervals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Ready to Automate?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our RPA specialists to learn how we can
                                help transform your business operations with
                                robotic process automation.
                            </p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your automation needs..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    Request Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
