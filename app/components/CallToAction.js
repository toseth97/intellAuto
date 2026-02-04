"use client";

export default function CallToAction() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Ready to Revolutionize Your Business?
                        </h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Join hundreds of forward-thinking companies that
                            have already transformed their operations with our
                            intelligent automation solutions. It's time to
                            unlock your business's full potential.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="text-3xl font-bold text-yellow-300">
                                95%
                            </div>
                            <div className="text-sm opacity-80">
                                Customer Satisfaction Rate
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-3xl font-bold text-green-300">
                                4.2x
                            </div>
                            <div className="text-sm opacity-80">
                                Average ROI Increase
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-3xl font-bold text-blue-300">
                                24/7
                            </div>
                            <div className="text-sm opacity-80">
                                Global Support Network
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-4">
                                Special Launch Offer
                            </h3>
                            <p className="opacity-90 mb-4">
                                For a limited time, get 20% off your first 6
                                months when you sign up for our premium
                                automation package. Plus, receive a free
                                consultation session with our automation
                                experts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                    Get Started Now
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                    Schedule Demo
                                </button>
                            </div>
                        </div>

                        <div className="text-sm opacity-70">
                            No hidden fees • Cancel anytime • 30-day money-back
                            guarantee
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
