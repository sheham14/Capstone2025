import React from 'react';

function Footer({ companyName = 'Taylor Insurance', year = 2025 }) {
  return (
    <footer className="py-3 bg-primary-color text-white">
      <div className="container d-flex align-items-center justify-content-center gap-3 flex-wrap">
        <img
          src="/TaylorInsuranceLogo.png"
          alt={`${companyName} Logo`}
          style={{ height: '48px' }} // Increased from 32px to 48px
        />
        <p className="mb-0 fs-6">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
