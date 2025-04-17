import React from 'react';

function Footer({ companyName = 'Taylor Insurance', year = 2025 }) {
  return (
    <footer className="py-3 bg-primary-color text-white">
      <div className="container d-flex align-items-center justify-content-center flex-wrap gap-2">
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
  src="/TaylorInsuranceLogo.png"
  alt={`${companyName} Logo`}
  style={{
    height: '32px', // base height
    transform: 'scale(2.0)',
    transformOrigin: 'left center',
    marginRight: '32px', // double or more depending on scale
  }}
/>

        </div>
        <p className="mb-0 fs-6">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
