import React from "react";

const Navigation = () => {
    return (
        <header className="Navigation_header flex justify-center">
            <nav className="Navigation_header padding_1_side flex justify-around">
                <h1 className="brand_name">
                    <a href="" className="anchor_">
                        IAS
                    </a>
                </h1>
                <ul className="unordered_list flex">
                    <li className="list_item">
                        <a href="" className="anchor_">
                            Home
                        </a>
                    </li>
                    <li className="list_item">
                        <a href="" className="anchor_">
                            About
                        </a>
                    </li>
                    <li className="list_item">
                        <a href="" className="anchor_">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
