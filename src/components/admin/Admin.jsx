import './admin.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import Dashboard from './dashboard/Dashboard';
import Footer from './footer/Footer';

const Admin = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Admin
