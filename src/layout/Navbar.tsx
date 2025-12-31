import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top gradient-navbar shadow">
            <div className="container">
                <NavLink className="navbar-brand fw-bold text-white" to="/">
                    🔥 MyApp
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mainNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `nav-link text-white ${isActive ? "active-link" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `nav-link text-white ${isActive ? "active-link" : ""}`
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/flames"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `nav-link text-white ${isActive ? "active-link" : ""}`
                                }
                            >
                                FLAMES
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/users"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    `nav-link text-white ${isActive ? "active-link" : ""}`
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
