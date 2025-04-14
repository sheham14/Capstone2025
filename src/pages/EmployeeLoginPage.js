import React from 'react';
import LoginForm from '../components/LoginForm';

function EmployeeLoginPage() {
  const handleLogin = (credentials) => {
    alert(`Employee login successful! Email: ${credentials.email}`);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <LoginForm
              title="Employee Login"
              onSubmit={handleLogin}
              linkText="Back to Customer Login"
              linkPath="/customer-login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLoginPage;