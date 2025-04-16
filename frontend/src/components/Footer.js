import React from 'react';

function Footer({ companyName = 'Taylor Insurance', year = 2025 }) {
  return (
    <footer className="py-3 bg-primary-color text-white">
      <div className="container text-center">
        <p className="mb-0">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;