import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const handleLogin = (credentials) => {
    alert(`Customer login successful! Email: ${credentials.email}`);
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

export default LoginPage;