import React from "react";

const ServiceCard = ({ item }) => {
    const { name, icon } = item;

    return (
        <div className="service_card">
            <img src={icon} alt={name} />
            <h3>{name}</h3>
            <div className="small_text"></div>
        </div>
    );
};

export default ServiceCard;
