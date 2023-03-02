import React from "react";
import about_image from "../static/images/isomeric.jpg";
import codeTesting from "../static/images/codeTesting.jpg";

const About = () => {
    return (
        <section className="container d_flex j_center about" id="about">
            <div className="container_fluid d_flex j_center">
                <h2>ABOUT US</h2>
                <div className="under_line"></div>
                <div className="about_section d_grid">
                    <div className="hero_text small_text">
                        <p>
                            Welcome to Intell Automated Systems, a leading IT
                            solutions provider based in Nigeria. We specialize
                            in web development, ERP integration, and database
                            configuration, offering a wide range of services
                            that are tailored to meet the needs of businesses
                            across the country.
                        </p>
                        <p>
                            At Intell Automated Systems, we understand the
                            importance of technology in today's world. That's
                            why we're dedicated to delivering cutting-edge IT
                            solutions that help our clients succeed in the
                            digital age. We use the latest technologies and
                            industry best practices to ensure that our services
                            are of the highest quality.
                        </p>
                    </div>
                    <div className="about_image">
                        <img src={about_image} alt="isomeric image" />
                    </div>
                </div>
                <div className="about_section d_grid">
                    <div className="about_image">
                        <img src={codeTesting} alt="isomeric image" />
                    </div>
                    <div className="hero_text small_text">
                        <p>
                            Our web development services include custom web
                            design and e-commerce solutions. We work closely
                            with our clients to understand their unique needs
                            and preferences, and we use this information to
                            create stunning websites that are both user-friendly
                            and easy to navigate.
                        </p>
                        <p>
                            We also specialize in ERP integration, which allows
                            businesses to streamline their processes, improve
                            productivity, and reduce costs. Our team of experts
                            at Intell Automated Systems has extensive experience
                            in integrating ERP systems with various business
                            applications, including accounting, inventory
                            management, and customer relationship management
                            (CRM) software.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
