import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

  const token = localStorage.getItem('token');
  const getAQuoteLink = token ? localStorage.getItem('session-type') == 'CUSTOMER' ? 'quote' : 'employee-home' : '/customer-login'

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Protect What Matters Most</h1>
          <p className="lead mb-4">
            Comprehensive insurance solutions tailored to your needs.
          </p>
          <Link to={getAQuoteLink} className="btn btn-lg btn-secondary-color">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center subheading mb-5">
            Our Insurance Services
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary-color">
                    Auto Insurance
                  </h5>
                  <p className="card-text">
                    Drive with confidence knowing you're covered on the road.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 card-custom">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary-color">
                    Home Insurance
                  </h5>
                  <p className="card-text">
                    Safeguard your home against unexpected events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-5 bg-primary-color">
        <div className="container">
          <h2 className="text-center subheading mb-5 text-white">
            What Our Clients Say
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <blockquote className="blockquote text-center text-white">
                <p className="mb-2 fst-italic">
                  "Taylor Insurance made the process so easy and affordable!"
                </p>
                <footer className="blockquote-footer text-muted">
                  Jane D.
                </footer>
              </blockquote>
            </div>
            <div className="col">
              <blockquote className="blockquote text-center text-white">
                <p className="mb-2 fst-italic">
                  "I feel so much more secure with their coverage plans."
                </p>
                <footer className="blockquote-footer text-muted">
                  Michael S.
                </footer>
              </blockquote>
            </div>
            <div className="col">
              <blockquote className="blockquote text-center text-white">
                <p className="mb-2 fst-italic">
                  "Outstanding service and support when I needed it most."
                </p>
                <footer className="blockquote-footer text-muted">
                  Lisa M.
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="subheading mb-3">
            Ready to Get Started?
          </h2>
          <p className="lead mb-4">
            Contact us today for a personalized insurance quote.
          </p>
          <Link to="/contact" className="btn btn-lg btn-secondary-color">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;