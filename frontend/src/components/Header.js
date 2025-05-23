import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate

function Header() {
  const navigate = useNavigate(); // Add this for redirection
  const isAuthenticated = !!localStorage.getItem('token');
  
   // Check if token exists

  const handleLogout = () => {
    window.confirm('are you sure?')
    localStorage.removeItem('token'); // Clear token
    localStorage.removeItem('session-type'); // Clear token
    navigate('/'); // Redirect to landing page
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: isAuthenticated ? localStorage.getItem('session-type') == "CUSTOMER" ? 'customer-home' : 'employee-home' : '/customer-login' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
      <div className="container">
      <Link className="navbar-brand d-flex align-items-center" to="/">
      <img
  src="/TaylorInsuranceLogo.png"
  alt="Taylor Insurance Logo"
  style={{
    height: '50px',          // this controls the final visible size
    transform: 'scale(2.6)', // visually enlarges it without affecting layout
    transformOrigin: 'left center',
    marginLeft: '-10px'      // optional: nudge it back to align better
  }}
/>

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
                <button
                  className="nav-link text-secondary-color btn btn-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
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
