import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

const CashierDashboard = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="dashboard-container">
        <SideNav userType="cashier" />
        <main className="main-content">
          <h2>Cashier Dashboard</h2>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CashierDashboard;