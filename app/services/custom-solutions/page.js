"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CustomSolutionsPage() {
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

        const section = document.getElementById("custom-solutions");
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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            {/* Hero Section */}
            <section id="custom-solutions" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                                Custom Solutions
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Tailored Automation for
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    {" "}
                                    Your Unique Needs
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Tailored automation solutions designed
                                specifically for your unique business
                                requirements and challenges. Flexible
                                architecture with future-proof design.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                                    Request Demo
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Customizable
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        Industry
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Specific
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        Future
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Proof
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
                                    alt="Custom Solutions"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Custom-Built
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
                            Our custom solutions platform provides tailored
                            automation that fits your exact business needs with
                            flexible architecture and industry-specific
                            expertise.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Custom Development
                            </h3>
                            <p className="text-gray-600">
                                Bespoke solutions built specifically for your
                                unique business requirements.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🏭</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Industry-specific Solutions
                            </h3>
                            <p className="text-gray-600">
                                Solutions tailored for your specific industry
                                with domain expertise.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔧</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Flexible Architecture
                            </h3>
                            <p className="text-gray-600">
                                Modular design that can adapt and scale with
                                your business growth.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔮</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Future-proof Design
                            </h3>
                            <p className="text-gray-600">
                                Built to evolve with technological advancements
                                and business needs.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Rapid Deployment
                            </h3>
                            <p className="text-gray-600">
                                Quick implementation with minimal disruption to
                                your operations.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔄</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Easy Integration
                            </h3>
                            <p className="text-gray-600">
                                Seamless integration with your existing systems
                                and workflows.
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
                            Discover how our custom solutions can address your
                            specific business challenges and requirements.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Healthcare Systems
                                    </h3>
                                    <p className="text-gray-600">
                                        Custom automation solutions for
                                        healthcare providers with HIPAA
                                        compliance.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Financial Services
                                    </h3>
                                    <p className="text-gray-600">
                                        Tailored solutions for banking and
                                        financial institutions with regulatory
                                        compliance.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Manufacturing
                                    </h3>
                                    <p className="text-gray-600">
                                        Custom automation for manufacturing
                                        processes and supply chain optimization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Ready for Custom?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our custom solutions specialists to
                                learn how we can help create the perfect
                                automation solution for your unique business
                                needs.
                            </p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your custom automation needs..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
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
