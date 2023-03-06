import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
// eslint-disable-next-line

const Contact = () => {
    const [sendMail, setSendMail] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const position = [7.3655234, 3.8318511];

    const handleChange = (e) => {
        setSendMail({
            ...sendMail,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="container d_flex j_center background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="container_fluid d_grid contact">
                <div className="address d_flex j_center">
                    <div className="address_text small_text">
                        <p>
                            <p className="address_span">Office Address:</p> 20
                            Abake Abike St, Oluyole, Ibadan
                        </p>
                        <p>
                            <p className="address_span">Call:</p> +2348035315145
                        </p>
                        <p>
                            <p className="address_span">Email:</p>{" "}
                            info@intellautomatedsystems.com
                        </p>
                    </div>
                    <div className="map">
                        <MapContainer
                            center={[7.3655234, 3.8318511]}
                            zoom={13}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <Marker
                                position={position}
                                icon={
                                    new Icon({
                                        iconUrl: markerIconPng,
                                        iconSize: [20, 35],
                                        iconAnchor: [12, 41],
                                    })
                                }
                            />
                        </MapContainer>
                    </div>
                </div>
                <form className="contact_form">
                    <div>
                        <em>Don't be shy,</em>
                        <h3>Send Us A Message</h3>
                    </div>
                    <div>
                        <label>Sender name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={sendMail.name}
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={sendMail.email}
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={sendMail.subject}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea
                            type="text"
                            name="message"
                            placeholder="Message"
                            value={sendMail.body}
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="submit_div">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
