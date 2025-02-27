import React from 'react';

const Footer = () => (
  <footer className="footer">

    <div className="row mt-5">
        {/* Footer with social media links */}
        <div className="col-12">
          <p>Follow us on social media:</p>
          <div className="social-links">
            <ul>
                <li>
                <a href="https://facebook.com/joshtaylorinsurance" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
                </li>
                <li>
                <a href="https://twitter.com/joshtaylorins" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
                </li>
                <li><a href="https://linkedin.com/company/joshtaylorinsurance" target="_blank" rel="noopener noreferrer">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
      <span className="text-muted">Josh Taylor Insurance © 2025 | All Rights Reserved | www.JoshTaylorInsurance.com
      Terms and Conditions | Privacy | Disclaimer</span>
    </div>
  </footer>
);

export default Footer;