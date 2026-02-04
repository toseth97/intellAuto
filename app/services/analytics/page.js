"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnalyticsServicePage() {
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

        const section = document.getElementById("analytics-service");
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Hero Section */}
            <section id="analytics-service" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                Intelligent Analytics
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Transform Data into
                                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                    {" "}
                                    Actionable Insights
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Transform your data into actionable insights
                                with our advanced analytics and reporting tools.
                                Make informed decisions with real-time
                                dashboards and predictive modeling.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                                    Request Demo
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        Real-time
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Data Processing
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        95%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Prediction Accuracy
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        Custom
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Reports
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
                                    alt="Analytics Service"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Data-Driven
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
                            Our intelligent analytics platform combines
                            real-time processing, predictive modeling, and
                            advanced visualization to deliver powerful insights.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Real-time Dashboards
                            </h3>
                            <p className="text-gray-600">
                                Live data visualization with customizable
                                dashboards that update in real-time.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔮</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Predictive Modeling
                            </h3>
                            <p className="text-gray-600">
                                Advanced algorithms that forecast trends and
                                predict future outcomes.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Data Visualization
                            </h3>
                            <p className="text-gray-600">
                                Interactive charts and graphs that make complex
                                data easy to understand.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📋</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Custom Reports
                            </h3>
                            <p className="text-gray-600">
                                Tailored reports that focus on the metrics that
                                matter most to your business.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Instant Insights
                            </h3>
                            <p className="text-gray-600">
                                Get immediate insights from your data without
                                waiting for batch processing.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Secure & Compliant
                            </h3>
                            <p className="text-gray-600">
                                Enterprise-grade security with compliance to
                                data protection standards.
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
                            Discover how our analytics solutions can transform
                            various aspects of your business decision-making.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Sales Analytics
                                    </h3>
                                    <p className="text-gray-600">
                                        Track sales performance, identify
                                        trends, and forecast future revenue.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Customer Insights
                                    </h3>
                                    <p className="text-gray-600">
                                        Understand customer behavior and
                                        preferences to improve engagement.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Operational Efficiency
                                    </h3>
                                    <p className="text-gray-600">
                                        Monitor key metrics and optimize
                                        business processes for better
                                        performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Ready for Insights?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our analytics specialists to learn how
                                we can help transform your data into powerful
                                business insights.
                            </p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your analytics needs..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
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
