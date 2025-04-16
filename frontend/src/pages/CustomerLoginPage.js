import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import api from '../services/api';

function CustomerLoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const response = await api.post('/login', null, {
        params: { email: credentials.email, password: credentials.password },
      });
      if (!response.data) {
        throw new Error('Invalid email or password');
      }
      localStorage.setItem('token', response.data);
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
              links={[
                { text: 'Employee Login', path: '/employee-login' },
                { text: 'Register', path: '/register' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLoginPage;