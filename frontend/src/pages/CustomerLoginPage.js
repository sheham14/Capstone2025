import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import api from '../services/api';

function CustomerLoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const data = new FormData();
      data.append('email', credentials.email);
      data.append('password', credentials.password);
      const response = await api.post('/api/login', data);
      navigate('/customer-home');
    } catch (err) {
      alert(err.message || 'Login failed. Try again.');
    }
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