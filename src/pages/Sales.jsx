import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";

const Sales = () => {
    const [activeTab, setActiveTab] = useState("report");

    return (
        <div className="app-container">
            <Header showNav={true} />
            <div className="dashboard-container">
                <SideNav userType="admin" />
                <div className="layout-container">
                    <main className="main-content">
                        <div className="sales-header">
                            <div className="header-info">
                                <h2 className="sales-title">Sales</h2>
                                <p className="sales-subtitle">
                                    View comprehensive sales reports, access sales history, and view transaction details
                                    for all cashiers, all in Nigerian Naira (₦).
                                </p>
                            </div>
                        </div>
                        <div className="sales-tabs">
                            <NavLink
                                to="#"
                                className={`tab-link ${activeTab === "report" ? "active" : ""}`}
                                onClick={() => setActiveTab("report")}
                            >
                                Sales Report
                            </NavLink>
                            <NavLink
                                to="#"
                                className={`tab-link ${activeTab === "history" ? "active" : ""}`}
                                onClick={() => setActiveTab("history")}
                            >
                                Sales History
                            </NavLink>
                            <NavLink
                                to="#"
                                className={`tab-link ${activeTab === "transactions" ? "active" : ""}`}
                                onClick={() => setActiveTab("transactions")}
                            >
                                Cashier Transactions
                            </NavLink>
                        </div>
                        <h2 className="section-title">Sales Report</h2>
                        <div className="sales-filter">
                            <label>
                                <select className="form-select">
                                    <option value="">Select Period</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </label>
                        </div>
                        <div className="sales-metrics">
                            <DashboardCard title="Total Sales" value="₦12,345.67" />
                            <DashboardCard title="Average Order Value" value="₦50.25" />
                            <DashboardCard title="Total Orders" value="245" />
                            <DashboardCard title="Total Items Sold" value="500" />
                        </div>
                        <div className="sales-over-time">
                            <SalesChart
                                title="Sales Over Time"
                                value="₦12,345.67"
                                period="Today"
                                change="+10%"
                                type="trend"
                                labels={["12AM", "6AM", "12PM", "6PM", "12AM"]}
                            />
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sales;
