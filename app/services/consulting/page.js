"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ConsultingPage() {
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

        const section = document.getElementById("consulting-service");
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
            <section id="consulting-service" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                                Expert Consulting
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Strategic Guidance for
                                <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                                    {" "}
                                    Digital Transformation
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Expert consulting services to guide your
                                automation journey from strategy to
                                implementation. Industry expertise with proven
                                methodologies and best practices.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                                    Request Demo
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        20+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Years Experience
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        95%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Success Rate
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        Global
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Expertise
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
                                    alt="Consulting Service"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Expert Advice
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
                            Our consulting services provide expert guidance and
                            strategic planning to ensure successful automation
                            implementation and digital transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">💼</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Strategic Planning
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive strategy development for
                                successful automation implementation.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Process Analysis
                            </h3>
                            <p className="text-gray-600">
                                Detailed analysis of existing processes to
                                identify automation opportunities.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                ROI Assessment
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive return on investment analysis for
                                automation projects.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔄</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Change Management
                            </h3>
                            <p className="text-gray-600">
                                Support for organizational change and adoption
                                of new automation technologies.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Performance Optimization
                            </h3>
                            <p className="text-gray-600">
                                Continuous improvement and optimization of
                                automated processes.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Risk Assessment
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive risk analysis and mitigation
                                strategies for automation projects.
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
                            Discover how our consulting services can guide your
                            business through successful digital transformation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Digital Strategy
                                    </h3>
                                    <p className="text-gray-600">
                                        Develop comprehensive digital
                                        transformation strategies aligned with
                                        business goals.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Process Optimization
                                    </h3>
                                    <p className="text-gray-600">
                                        Identify and optimize business processes
                                        for maximum automation efficiency.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Technology Selection
                                    </h3>
                                    <p className="text-gray-600">
                                        Choose the right automation technologies
                                        and platforms for your specific needs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Ready for Guidance?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our consulting specialists to learn how
                                we can help guide your business through
                                successful digital transformation and automation
                                implementation.
                            </p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your consulting needs..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
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
