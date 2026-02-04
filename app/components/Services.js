"use client";

import { useState, useEffect } from "react";

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        {
            title: "AI-Powered Automation",
            description:
                "Leverage cutting-edge artificial intelligence to automate complex business processes and decision-making workflows.",
            icon: "🤖",
            features: [
                "Machine Learning Integration",
                "Predictive Analytics",
                "Smart Decision Making",
                "Continuous Learning",
            ],
        },
        {
            title: "Robotic Process Automation",
            description:
                "Streamline repetitive tasks with advanced robotic process automation that works 24/7 without errors.",
            icon: "⚙️",
            features: [
                "Task Automation",
                "Workflow Optimization",
                "Error Reduction",
                "Scalable Solutions",
            ],
        },
        {
            title: "Intelligent Analytics",
            description:
                "Transform your data into actionable insights with our advanced analytics and reporting tools.",
            icon: "📊",
            features: [
                "Real-time Dashboards",
                "Predictive Modeling",
                "Data Visualization",
                "Custom Reports",
            ],
        },
        {
            title: "Cloud Integration",
            description:
                "Seamlessly integrate with cloud platforms to enhance scalability and accessibility of your automation solutions.",
            icon: "☁️",
            features: [
                "Multi-cloud Support",
                "Secure Data Transfer",
                "Scalable Infrastructure",
                "API Integration",
            ],
        },
        {
            title: "Custom Solutions",
            description:
                "Tailored automation solutions designed specifically for your unique business requirements and challenges.",
            icon: "🎯",
            features: [
                "Custom Development",
                "Industry-specific Solutions",
                "Flexible Architecture",
                "Future-proof Design",
            ],
        },
        {
            title: "Consulting Services",
            description:
                "Expert guidance and strategic planning to help you implement automation effectively across your organization.",
            icon: "💼",
            features: [
                "Process Analysis",
                "Implementation Strategy",
                "Training Programs",
                "Ongoing Support",
            ],
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            observer.observe(servicesSection);
        }

        return () => {
            if (servicesSection) {
                observer.unobserve(servicesSection);
            }
        };
    }, []);

    return (
        <section id="services" className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center space-y-6 mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        Our Services
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Comprehensive Automation Solutions
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We offer a wide range of intelligent automation services
                        designed to transform your business operations, increase
                        efficiency, and drive innovation across all aspects of
                        your organization.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 transform hover:scale-105 transition-transform duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-${index * 100}`}
                        >
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <div className="text-3xl sm:text-4xl">
                                    {service.icon}
                                </div>
                                <div className="w-8 h-8 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-4 sm:mb-6">
                                {service.features.map(
                                    (feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700"
                                        >
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            {feature}
                                        </li>
                                    ),
                                )}
                            </ul>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                <div
                    className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                            Contact us today to schedule a consultation and
                            discover how our intelligent automation solutions
                            can revolutionize your operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
                                Get Started
                            </button>
                            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
