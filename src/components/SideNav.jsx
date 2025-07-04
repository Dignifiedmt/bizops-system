import React from "react";
import {NavLink} from "react-router-dom";

const SideNav = ({userType}) => {
    const adminLinks = [
        {to: "/admin/dashboard", label: "Dashboard", icon: "Layout"},
        {to: "/admin/sales", label: "Sales", icon: "CurrencyDollar"},
        {to: "/admin/inventory", label: "Inventory", icon: "Package"},
        {to: "/admin/cashiers", label: "Cashiers", icon: "Users"},
        {to: "/admin/marketing", label: "Marketing", icon: "Megaphone"},
        {to: "/admin/reports", label: "Reports", icon: "PresentationChart"},
        {to: "/admin/help", label: "Help and docs", icon: "Question"},
    ];

    const cashierLinks = [
        {to: "/cashier/dashboard", label: "Dashboard", icon: "Layout"},
        {to: "/cashier/transactions", label: "Transactions", icon: "CurrencyDollar"},
        {to: "/cashier/payments", label: "Payments", icon: "Package"},
    ];

    const links = userType === "admin" ? adminLinks : cashierLinks;

    const getIcon = (iconName) => {
        // [Icons remain the same as in the previous response]
        switch (iconName) {
            case "Layout":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
                    </svg>
                );
            case "CurrencyDollar":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M116,80h4v40h-4a20,20,0,0,1,0-40Zm32,56H136v40h12a20,20,0,0,0,0-40Zm84-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48,28a36,36,0,0,0-36-36H136V80h4a20,20,0,0,1,20,20,8,8,0,0,0,16,0,36,36,0,0,0-36-36h-4V56a8,8,0,0,0-16,0v8h-4a36,36,0,0,0,0,72h4v40h-8a20,20,0,0,1-20-20,8,8,0,0,0-16,0,36,36,0,0,0,36,36h8v8a8,8,0,0,0,16,0v-8h12A36,36,0,0,0,184,156Z"></path>
                    </svg>
                );
            case "Package":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
                    </svg>
                );
            case "Users":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                );
            case "Megaphone":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
                    </svg>
                );
            case "PresentationChart":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V24H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,0l29.59-37h56.32l29.59,37a8,8,0,0,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                    </svg>
                );
            case "Question":
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <nav className="sidenav">
            {/* */}
            {/* <h3>BizOps</h3> */}
            <ul className="sidenav-list">
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink to={link.to} className={({isActive}) => `sidenav-link ${isActive ? "active" : ""}`}>
                            <span className="sidenav-icon">{getIcon(link.icon)}</span>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
