import React, { useState } from "react";
// eslint-disable-next-line

const Contact = () => {
    const [sendMail, setSendMail] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

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
                <div className="address d_flex">
                    <div className="address_text small_text">
                        <p>
                            <h3>Office Address:</h3> 20 Abake Abike St,
                            Oluyole, Ibadan
                        </p>
                        <p>
                            <h3>Call:</h3> +2348035315145
                        </p>
                        <p>
                            <h3>Email:</h3> info@intellautomatedsystems.com
                        </p>
                    </div>
                </div>
                <form className="contact_form">
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
