import React from "react";
import "../app/styles/header.css";
import Navbar from "./Navbar";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__welcome-container">
                <span className="header__welcome-text">Hello, <span className="header__highlighted-text">dear friend</span>!</span>
            </div>
        </header>
    );
};

export default Header;