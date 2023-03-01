import React, { useState } from "react";

const Navigation = () => {
    const [clicked, setClicked] = useState(false);

    const menuClick = () => {
        console.log("Clicked");
        setClicked(!clicked);
    };
    return (
        <header className="Nav_hero d_flex j_center">
            <nav className="Navigation_header padding_1_side d_flex j_between">
                <h1 className="brand_name">
                    <a href="home" className="anchor_">
                        IAS
                    </a>
                </h1>
                <ul
                    className={
                        clicked
                            ? "unordered_list d_flex active"
                            : "unordered_list d_flex"
                    }
                >
                    <li className="list_item">
                        <a
                            href="#"
                            onClick={() => menuClick()}
                            className="anchor_"
                        >
                            Home
                        </a>
                    </li>
                    <li className="list_item">
                        <a
                            href="#"
                            onClick={() => menuClick()}
                            className="anchor_"
                        >
                            About
                        </a>
                    </li>
                    <li className="list_item">
                        <a
                            href="#"
                            onClick={() => menuClick()}
                            className="anchor_"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div
                    className={
                        clicked
                            ? "menu d_flex j_center glow"
                            : "menu d_flex j_center"
                    }
                    onClick={() => menuClick()}
                >
                    <div className={clicked ? "menu_clicked bar" : "bar"}></div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
