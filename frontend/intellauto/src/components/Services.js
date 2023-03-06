import React from "react";
import ServiceCard from "./ServiceCard";
import globe from "../static/images/globe.gif";
import consult from "../static/images/consult.gif";
import integrate from "../static/images/integrate.gif";
import support from "../static/images/support.gif";
import database from "../static/images/database.gif";

const Services = () => {
    const service = [
        {
            name: "Web Development",
            icon: globe,
        },
        {
            name: "Erp Integration",
            icon: integrate,
        },
        {
            name: "Database Configuration",
            icon: database,
        },
        {
            name: "IT Consultancy",
            icon: consult,
        },
        {
            name: "IT Support",
            icon: support,
        },
    ];
    return (
        <section className="container d_flex j_center about" id="services">
            <div className="container_fluid d_flex j_center">
                <h2>OUR SERVICES</h2>
                <div className="under_line"></div>
                <div className="small_text" data-aos="fade-up">
                    <p className="">
                        At Intell Automated Systems, We offer a wide range of IT
                        solutions that are tailored to meet the needs of
                        businesses of all sizes and industries. Our team of
                        experts has extensive experience in web development, ERP
                        integration, and database configuration, and we're
                        committed to delivering high-quality services that
                        exceed our clients' expectations. Here are some of the
                        services we offer:
                    </p>
                </div>
                <div className="service_section">
                    {service.map((item) => (
                        <ServiceCard item={item} key={item.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
