import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Cashier from "./pages/Cashier"; // Placeholder for future implementation
import CashierDashboard from "./pages/CashierDashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/sales" element={<Sales />} />
                {/* <Route path="/admin/inventory" element={<div>Inventory Page (TBD)</div>} /> */}
                <Route path="/admin/inventory" element={<Inventory />} />
                <Route path="/admin/cashiers" element={<Cashier />} />
                <Route path="/admin/marketing" element={<div>Marketing Page (TBD)</div>} />
                <Route path="/admin/reports" element={<div>Reports Page (TBD)</div>} />
                <Route path="/admin/help" element={<div>Help Page (TBD)</div>} />
                <Route path="/cashier/dashboard" element={<CashierDashboard />} />
                <Route path="/cashier/transactions" element={<div>Transactions Page (TBD)</div>} />
                <Route path="/cashier/payments" element={<div>Payments Page (TBD)</div>} />
            </Routes>
        </Router>
    );
};

export default App;
