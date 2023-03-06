import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import user_marker from "../static/images/user_marker.png";
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

    const [location, setLocation] = useState({
        lat: 0,
        long: 0,
        accuracy: 0,
    });

    useEffect(() => {
        setTimeout(() => {
            if (!navigator.geolocation) {
                console.log(
                    "Your browser doesn't support geolocation feature!"
                );
            } else {
                navigator.geolocation.getCurrentPosition(getPosition);
            }
        }, 5000);
    }, [location]);

    function getPosition(position) {
        //console.log(position);
        setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            accuracy: position.coords.accuracy,
        });
    }
    const user_lat = location.lat;
    const user_long = location.long;
    console.log(user_lat, user_long);
    return (
        <section className="container d_flex j_center background" id="contact">
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
                    <div className="address_text small_text" data-aos="fade-up">
                        <div>
                            <p className="address_span">Office Address:</p> 20
                            Abake Abike St, Oluyole, Ibadan
                        </div>
                        <div>
                            <p className="address_span">Call:</p> +2348035315145
                        </div>
                        <div>
                            <p className="address_span">Email:</p>{" "}
                            info@intellautomatedsystems.com
                        </div>
                    </div>
                    <div className="map" data-aos="fade-up">
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

                            <Marker
                                position={[user_lat, user_long]}
                                icon={
                                    new Icon({
                                        iconUrl: user_marker,
                                        iconSize: [20, 35],
                                        iconAnchor: [12, 41],
                                    })
                                }
                            />
                        </MapContainer>
                    </div>
                </div>
                <form className="contact_form" data-aos="fade-up">
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
