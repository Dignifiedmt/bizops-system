import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;