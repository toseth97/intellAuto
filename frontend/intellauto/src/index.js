import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./static/css/Navigation.css";
import "./static/css/mediaqueries.css";
import "./static/css/frontpage.css";
import "./static/css/about.css";
import "./static/css/service.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
