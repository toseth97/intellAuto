import React from "react";
import Navigation from "./Navigation";

const Frontpage = () => {
    return (
        <section className=" frontpage d_flex">
            <Navigation />
            <div className="hero_section container d_grid">
                <div className="hero_text">
                    <h1>Better Solutions For Your Business</h1>
                    <p>
                        At Intell Automated Systems, we pride ourselves on our
                        ability to deliver high-quality IT solutions that meet
                        the needs of businesses of all sizes and industries.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className="hero_image"></div>
            </div>
        </section>
    );
};

export default Frontpage;
