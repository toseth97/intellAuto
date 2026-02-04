"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GetStartedPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        const section = document.getElementById("get-started-hero");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setSubmitMessage(
                "Thank you! Your request has been submitted. We'll contact you within 24 hours.",
            );
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                budget: "",
                message: "",
            });
        } catch (error) {
            setSubmitMessage(
                "Sorry, there was an error. Please try again or contact us directly.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        "AI-Powered Automation",
        "Robotic Process Automation",
        "Intelligent Analytics",
        "Cloud Integration",
        "Custom Solutions",
        "Expert Consulting",
    ];

    const budgets = [
        "Under $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "$50,000 - $100,000",
        "Over $100,000",
        "Not sure yet",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-8">
            {/* Hero Section */}
            <section id="get-started-hero" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        >
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                Get Started
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Begin Your Automation
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {" "}
                                    Journey
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Ready to transform your business with
                                intelligent automation? Fill out this form and
                                our experts will help you create a customized
                                solution that meets your specific needs.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-8">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-2xl font-bold text-blue-600">
                                        24/7
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Expert Support
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-2xl font-bold text-purple-600">
                                        95%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Success Rate
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-2xl font-bold text-green-600">
                                        3x
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        ROI Guarantee
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-2xl font-bold text-orange-600">
                                        24h
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Response Time
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
                                    alt="Get Started"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Free Consultation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Tell Us About Your Project
                        </h2>
                        <p className="text-lg text-gray-600">
                            Complete this form and we'll create a personalized
                            automation strategy for your business.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-50 rounded-2xl p-8"
                    >
                        {submitMessage && (
                            <div
                                className={`p-4 rounded-lg ${
                                    submitMessage.includes("Thank you")
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                }`}
                            >
                                {submitMessage}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="+234 803 531 5145"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Interest *
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Budget Range
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">
                                        Select budget range
                                    </option>
                                    {budgets.map((budget) => (
                                        <option key={budget} value={budget}>
                                            {budget}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Project Description *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                            ></textarea>
                        </div>

                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-700"
                            >
                                I agree to the terms of service and privacy
                                policy
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    "Get Free Consultation"
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    (window.location.href = "/contact")
                                }
                                className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            What to Expect Next
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our process is designed to ensure you get the
                            perfect automation solution for your business.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl">📞</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Initial Consultation
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Within 24 hours, our automation specialist will
                                contact you to discuss your requirements and
                                understand your business goals.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Custom Assessment
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                We'll analyze your current processes and create
                                a detailed assessment of how automation can
                                benefit your specific operations.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Implementation Plan
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Receive a comprehensive implementation plan with
                                timelines, milestones, and expected ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 text-gray-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold  mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gary-300 mb-8">
                        Don't wait to start your automation journey. The sooner
                        you begin, the faster you'll see results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 shadow-lg">
                            Start Free Consultation
                        </button>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 shadow-lg">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
