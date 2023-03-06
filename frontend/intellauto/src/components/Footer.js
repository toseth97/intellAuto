import React from "react";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="d_flex j_center">
            <p>
                {" "}
                Copyright &copy; {date.getFullYear()}, Intell Automated Systems
            </p>
        </footer>
    );
};

export default Footer;
