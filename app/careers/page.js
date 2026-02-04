"use client";

import { useState, useEffect } from "react";

export default function CareersPage() {
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

        const careersSection = document.getElementById("careers");
        if (careersSection) {
            observer.observe(careersSection);
        }

        return () => {
            if (careersSection) {
                observer.unobserve(careersSection);
            }
        };
    }, []);

    const jobListings = [
        {
            title: "Senior AI Engineer",
            department: "Engineering",
            location: "Ibadan, Nigeria",
            type: "Full-time",
            description:
                "Lead the development of cutting-edge AI solutions and automation systems.",
            requirements: [
                "5+ years of experience in AI/ML development",
                "Strong background in Python and machine learning frameworks",
                "Experience with cloud platforms (AWS, Azure, GCP)",
                "Excellent problem-solving and communication skills",
            ],
            salary: "NGN 500,000 - 800,000 per month",
        },
        {
            title: "RPA Developer",
            department: "Automation",
            location: "Ibadan, Nigeria",
            type: "Full-time",
            description:
                "Design and implement robotic process automation solutions for clients.",
            requirements: [
                "3+ years of RPA development experience",
                "Proficiency in UiPath, Automation Anywhere, or Blue Prism",
                "Strong understanding of business processes",
                "Ability to work with cross-functional teams",
            ],
            salary: "NGN 300,000 - 500,000 per month",
        },
        {
            title: "Full Stack Developer",
            department: "Engineering",
            location: "Ibadan, Nigeria",
            type: "Full-time",
            description:
                "Build modern web applications and APIs for our automation platform.",
            requirements: [
                "4+ years of full stack development experience",
                "Proficiency in React, Node.js, and modern frameworks",
                "Experience with databases (SQL and NoSQL)",
                "Understanding of cloud deployment and DevOps practices",
            ],
            salary: "NGN 350,000 - 600,000 per month",
        },
        {
            title: "Technical Sales Engineer",
            department: "Sales",
            location: "Ibadan, Nigeria",
            type: "Full-time",
            description:
                "Bridge the gap between technical solutions and client needs.",
            requirements: [
                "3+ years in technical sales or solutions engineering",
                "Strong technical background in automation technologies",
                "Excellent presentation and communication skills",
                "Experience in enterprise software sales",
            ],
            salary: "NGN 400,000 - 700,000 per month + commission",
        },
    ];

    return (
        <main>
            <section id="careers" className="mt-16 py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-12 sm:mb-16">
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                            Join Our Team
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            Build the Future with Us
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            At IntellAuto, we're passionate about innovation and
                            creating intelligent automation solutions that
                            transform businesses. Join our team of talented
                            professionals and help shape the future of
                            automation technology.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Why Choose IntellAuto?
                                </h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                Innovative Environment
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                Work with cutting-edge
                                                technologies and be at the
                                                forefront of automation
                                                innovation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                Growth Opportunities
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                Continuous learning and career
                                                advancement in a rapidly growing
                                                industry
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                Impactful Work
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                Your work directly impacts
                                                businesses and helps them
                                                achieve their goals
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                Team Culture
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                Collaborative environment with
                                                passionate professionals who
                                                support each other
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Benefits & Perks
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        Competitive salary packages
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                        Health insurance coverage
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        Professional development budget
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                                        Flexible work arrangements
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        Remote work options
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                        Annual team retreats
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Current Openings
                            </h2>

                            {jobListings.map((job, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                                {job.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 text-sm text-gray-600">
                                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                    {job.department}
                                                </span>
                                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                                    {job.type}
                                                </span>
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                    {job.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg font-semibold text-gray-900">
                                                {job.salary}
                                            </div>
                                            <button className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {job.description}
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Requirements:
                                        </h4>
                                        <ul className="space-y-1 text-gray-600">
                                            {job.requirements.map(
                                                (requirement, reqIndex) => (
                                                    <li
                                                        key={reqIndex}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                                                        {requirement}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                Ready to Join Our Team?
                            </h3>
                            <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                                Send your resume and cover letter to
                                careers@intellautomatedsystems.com and let's
                                discuss how you can contribute to our mission of
                                transforming businesses through intelligent
                                automation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
                                    Send Resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
