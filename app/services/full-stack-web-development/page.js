"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FullStackWebDevelopmentPage() {
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

        const section = document.getElementById("full-stack-web-development");
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
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
            {/* Hero Section */}
            <section id="full-stack-web-development" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold">
                                Full Stack Web Development
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Build Modern Web Applications with
                                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    {" "}
                                    Cutting-Edge Technologies
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Create scalable, responsive web applications
                                with modern frontend frameworks, robust backend
                                APIs, and optimized database solutions. From
                                concept to deployment, we deliver full-stack
                                solutions that drive your business forward.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                                    Get Started
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105">
                                    View Portfolio
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        100+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Projects Delivered
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        99.9%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Uptime Guarantee
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                                    <div className="text-2xl font-bold text-gray-900">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Support Available
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
                                    alt="Full Stack Web Development"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Full Stack
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
                            Our Development Stack
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We use the latest technologies and best practices to
                            build robust, scalable web applications that meet
                            your business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">⚛️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Frontend Development
                            </h3>
                            <p className="text-gray-600">
                                Modern React, Next.js, and Vue.js applications
                                with responsive design and optimal performance.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔧</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Backend APIs
                            </h3>
                            <p className="text-gray-600">
                                RESTful and GraphQL APIs built with Node.js,
                                Python, and modern frameworks for scalability.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🗄️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Database Design
                            </h3>
                            <p className="text-gray-600">
                                Optimized SQL and NoSQL database solutions with
                                efficient data modeling and performance tuning.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Responsive Design
                            </h3>
                            <p className="text-gray-600">
                                Mobile-first approach ensuring perfect user
                                experience across all devices and screen sizes.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Performance Optimization
                            </h3>
                            <p className="text-gray-600">
                                Fast loading times and optimal performance with
                                code splitting, caching, and CDN integration.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Security & Testing
                            </h3>
                            <p className="text-gray-600">
                                Comprehensive security measures and automated
                                testing to ensure reliability and data
                                protection.
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
                            Application Types We Build
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From e-commerce platforms to enterprise
                            applications, we deliver custom web solutions for
                            every business need.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        E-Commerce Platforms
                                    </h3>
                                    <p className="text-gray-600">
                                        Custom online stores with payment
                                        integration, inventory management, and
                                        customer analytics.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        SaaS Applications
                                    </h3>
                                    <p className="text-gray-600">
                                        Scalable software-as-a-service platforms
                                        with multi-tenant architecture and
                                        subscription management.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Enterprise Solutions
                                    </h3>
                                    <p className="text-gray-600">
                                        Complex business applications with
                                        workflow automation, reporting, and
                                        integration capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact our development team to discuss your
                                requirements and get a custom quote for your web
                                application project.
                            </p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Project Type"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project requirements..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                                ></textarea>
                                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
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
