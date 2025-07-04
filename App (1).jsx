import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Sales from './pages/Sales';
import CashierDashboard from './pages/CashierDashboard';
import Inventory from './pages/Inventory';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <div className="dashboard-container">
                <Header showNav={false} />
                <SideNav userType="admin" />
                <div className="layout-container">
                  <Routes>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/sales" element={<Sales />} />
                    <Route path="/admin/inventory" element={<Inventory />} />
                    <Route path="/cashier/dashboard" element={<CashierDashboard />} />
                  </Routes>
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;