import React from "react";
import "../app/styles/navbar.css";
import Logo from "../shared/Logo";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__list-item">Help</li>
                    <li className="navbar__list-item">Statistics</li>
                    <li className="navbar__list-item">Change</li>
                </ul>
                <div className="navbar__logo-container">
                    <Logo></Logo>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;