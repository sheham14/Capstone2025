import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function EmployeeLoginPage() {

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
    navigate('/employee-home');
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
              title="Employee Login"
              onSubmit={handleLogin}
              links={[
                { text: 'Customer Login', path: '/customer-login' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginPage;