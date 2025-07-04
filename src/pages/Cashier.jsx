import React, {useState} from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import "../style/Cashier.css";

const Cashier = () => {
    const [cashiers] = useState([
        {
            name: "Ethan Harper",
            email: "ethan.harper@example.com",
            role: "Manager",
            status: "Active",
            lastLogin: "2024-01-20 10:00 AM",
        },
        {
            name: "Olivia Bennett",
            email: "olivia.bennett@example.com",
            role: "Cashier",
            status: "Active",
            lastLogin: "2024-01-19 05:30 PM",
        },
        {
            name: "Noah Carter",
            email: "noah.carter@example.com",
            role: "Cashier",
            status: "Inactive",
            lastLogin: "2023-12-15 02:45 PM",
        },
        {
            name: "Ava Thompson",
            email: "ava.thompson@example.com",
            role: "Manager",
            status: "Active",
            lastLogin: "2024-01-21 09:15 AM",
        },
        {
            name: "Liam Foster",
            email: "liam.foster@example.com",
            role: "Cashier",
            status: "Active",
            lastLogin: "2024-01-20 01:20 PM",
        },
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({name: "", email: "", role: "", status: "Active"});

    const handleAddCashier = () => {
        setFormData({name: "", email: "", role: "", status: "Active"});
        setModalOpen(true);
    };

    const handleSave = () => {
        // Logic to save cashier (e.g., update state or API call)
        console.log("Saving:", formData);
        setModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className="app-container">
            <Header showNav={false} />
            <div className="dashboard-container">
                <SideNav userType="admin" />
                <div className="layout-container">
                    <main className="main-content">
                        <div className="cashier-header">
                            <h2 className="cashier-title">Cashiers</h2>
                            <button className="add-cashier-btn" onClick={handleAddCashier}>
                                Add Cashier
                            </button>
                        </div>
                        <div className="search-container">
                            <span className="search-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </span>
                            <input type="text" className="search-input" placeholder="Search cashiers" />
                        </div>
                        <div className="cashier-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Last Login</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cashiers.map((cashier, index) => (
                                        <tr key={index}>
                                            <td>{cashier.name}</td>
                                            <td>{cashier.email}</td>
                                            <td>
                                                <button className="role-btn">{cashier.role}</button>
                                            </td>
                                            <td>
                                                <button
                                                    className={`status-btn ${
                                                        cashier.status === "Inactive" ? "inactive" : ""
                                                    }`}
                                                >
                                                    {cashier.status}
                                                </button>
                                            </td>
                                            <td>{cashier.lastLogin}</td>
                                            <td>
                                                <span className="action-btn">View</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {modalOpen && (
                            <div className="modal active">
                                <div className="modal-content">
                                    <h2 className="modal-title">Add Cashier</h2>
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Role</label>
                                        <input
                                            type="text"
                                            name="role"
                                            className="form-input"
                                            value={formData.role}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Status</label>
                                        <select
                                            name="status"
                                            className="form-input"
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="modal-actions">
                                        <button className="modal-btn cancel" onClick={() => setModalOpen(false)}>
                                            Cancel
                                        </button>
                                        <button className="modal-btn save" onClick={handleSave}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cashier;
