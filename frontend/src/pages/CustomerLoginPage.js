// src/pages/CustomerLoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function CustomerLoginPage() {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    // Mock login success; replace with real auth later
    navigate('/customer-home');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <LoginForm
              title="Customer Login"
              onSubmit={handleLogin}
              linkText="Employee Login"
              linkPath="/employee-login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLoginPage;