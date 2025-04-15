import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated = false }) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
      <div className="container">
        <Link className="navbar-brand fw-bold text-secondary-color" to="/">
          Taylor Insurance
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link text-secondary-color" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
            {isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link text-secondary-color" to="/logout">
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-secondary-color" to="/customer-login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;