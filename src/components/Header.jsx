import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = ({showNav = true}) => {
    const navLinks = [
        {to: "/admin/dashboard", label: "Dashboard"},
        {to: "/admin/sales", label: "Sales"},
        {to: "/admin/inventory", label: "Inventory"},
        {to: "/admin/reports", label: "Reports"},
        {to: "/admin/settings", label: "Settings"},
    ];

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <NavLink to="/admin/dashboard" className="header-logo">
                        <img src={Logo} alt="BizOps Logo" className="header-logo-icon" />
                        <h2>BizOps</h2>
                    </NavLink>
                    {showNav && (
                        <nav className="nav-links">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
