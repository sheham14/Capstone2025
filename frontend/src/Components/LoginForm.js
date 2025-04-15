import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ title, onSubmit, linkText, linkPath }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (password.length < 7) {
      newErrors.password = 'Password must be at least 7 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ email, password });
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="card card-custom">
      <div className="card-body p-4">
        <h2 className="text-center subheading mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-primary-color">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-primary-color">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <button type="submit" className="btn w-100 btn-secondary-color">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <Link to={linkPath} className="text-primary-color">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;