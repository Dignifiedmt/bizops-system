import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardCard from "../components/DashboardCard";
import SalesChart from "../components/SalesChart";
import ChartCard from "../components/ChartCard";
import SideNav from "../components/SideNav";
import "../style/chart.css";

const AdminDashboard = () => {
    return (
        <div className="app-container">
            <Header showNav={true} />
            {/* <SideNav userType="admin" /> */}
            <div className="layout-container">
                <main className="main-content">
                    <div className="dashboard-header">
                        <div className="header-info">
                            <h2 className="dashboard-title">Dashboard</h2>
                            <p className="dashboard-subtitle">
                                Overview of key business metrics and performance indicators.
                            </p>
                        </div>
                    </div>
                    <div className="dashboard-metrics">
                        <DashboardCard title="Total Sales" value="₦2.5M" change="+15%" changeColor="#078838" />
                        <DashboardCard title="Revenue" value="₦1.8M" change="+12%" changeColor="#078838" />
                        <DashboardCard
                            title="Inventory Level"
                            value="15,000 Units"
                            change="-5%"
                            changeColor="#e73908"
                        />
                    </div>
                    <h2 className="section-title">Sales Performance</h2>
                    <div className="sales-charts">
                        <SalesChart
                            title="Monthly Sales Trend"
                            value="₦250K"
                            period="Last 12 Months"
                            change="+8%"
                            type="trend"
                            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                        />
                        {/* <SalesChart
                            title="Top Selling Products"
                            value="₦500K"
                            period="This Month"
                            change="+10%"
                            type="bar"
                            labels={[]}
                        /> */}

                        {/* <div className="chart"> */}
                        <ChartCard title="Top Selling Products" value="₦500K" subtitle="This Month" trend="+10%">
                            <div className="bar-graph">
                                {[20, 80, 20, 90, 90].map((h, idx) => (
                                    <div key={idx} className="bar" style={{height: `${h}%`}} />
                                ))}
                            </div>
                            <div className="bar-labels">
                                {["A", "B", "C", "D", "E"].map((p) => (
                                    <span key={p}>Product {p}</span>
                                ))}
                            </div>
                        </ChartCard>
                        {/* </div> */}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
