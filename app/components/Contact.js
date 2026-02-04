"use client";

import { useState, useEffect } from "react";

export default function Contact() {
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

        const contactSection = document.getElementById("contact");
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => {
            if (contactSection) {
                observer.unobserve(contactSection);
            }
        };
    }, []);

    return (
        <section id="contact" className="py-16 sm:py-20 bg-gray-50 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                Get in Touch
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                                Let's Start Your Automation Journey
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Ready to transform your business with
                                intelligent automation? Our team of experts is
                                here to help you every step of the way. Contact
                                us today to schedule a consultation and discover
                                the perfect automation solution for your needs.
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
                            <div className="flex items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M12 3v18"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                        Email Us
                                    </h3>
                                    <p className="text-gray-600">
                                        info@intellautomatedsystems.com
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        Response within 24 hours
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                        Call Us
                                    </h3>
                                    <p className="text-gray-600">
                                        +2348035315145
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        Mon-Fri, 9AM-6PM WAT
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                        Visit Us
                                    </h3>
                                    <p className="text-gray-600">
                                        20 Abake Abike St, Oluyole
                                    </p>
                                    <p className="text-gray-600">
                                        Ibadan, Nigeria
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                        Schedule an office visit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Business Hours
                            </h3>
                            <div className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Send us a Message
                        </h3>

                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                    placeholder="Your company name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                >
                                    <option>Select a subject</option>
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Sales Question</option>
                                    <option>Partnership Opportunity</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                                    placeholder="Tell us about your automation needs..."
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-4">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="newsletter"
                                    className="text-sm text-gray-600"
                                >
                                    I'd like to receive updates and newsletters
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
