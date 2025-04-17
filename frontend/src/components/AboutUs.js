import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function AboutUs() {
  const token = localStorage.getItem('token');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center" style={{ backgroundColor: '#1b2a2f', color: 'white' }}>
        <div className="container">
          <h1 className="fw-bold">About Taylor Insurance</h1>
          <p className="lead">
            Proudly serving Newfoundland and Labrador — protecting what matters most with personalized, modern insurance solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-5 bg-light">
        <div className="container" data-aos="fade-up">
          <h3 className="fw-semibold border-bottom pb-2 mb-4">Who We Are</h3>
          <p>
            Taylor Insurance Inc. is a privately owned and operated insurance brokerage based out of Conche, Newfoundland and Labrador. With strategically located offices throughout the province and dedicated, accessible insurance representatives, we make customer service our top priority.
          </p>
          <p>
            <strong>Founded in 2005 in Conche, Newfoundland and Labrador</strong>, Taylor Insurance has grown from a single local office into a modern insurance brokerage supporting thousands of customers across the province.
          </p>
          <p>
            While some providers emphasize a century of tradition, we focus on agility, innovation, and what truly matters today — fast, transparent service delivered by real people who care.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-5 bg-white">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-4" data-aos="fade-up">
        <img 
  src="/josh-taylor.jpg" 
  alt="Josh Taylor - Founder of Taylor Insurance" 
  className="rounded-circle" 
  style={{ width: '180px', height: '180px', objectFit: 'cover' }}
/>

          <div>
            <h4 className="fw-bold">Meet Josh Taylor</h4>
            <p>
              Josh Taylor founded Taylor Insurance in 2005 with a clear vision: make insurance more personal, more responsive, and more local.
              With a background in business and a deep connection to Newfoundland and Labrador, Josh built a company that puts people before policies.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5 bg-white">
        <div className="container" data-aos="fade-up">
          <h3 className="fw-semibold border-bottom pb-2 mb-4">Our Vision for the Future</h3>
          <p>We’re evolving to meet the needs of modern customers. That’s why we’re expanding our digital services to include:</p>
          <ul>
            <li>Online policy quoting, renewal, and cancellation</li>
            <li>A mobile app for customers on the go</li>
            <li>Simple, accessible communication with insurance representatives</li>
          </ul>
          <p>
            This transformation reflects our commitment to innovation, convenience, and customer-first experiences — all backed by 20 years of experience in the industry.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5 bg-light">
        <div className="container" data-aos="fade-up">
          <h3 className="fw-semibold border-bottom pb-2 mb-5 text-center">Our Core Values</h3>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-person-check-fill fs-1" style={{ color: '#d4aa00' }}></i>
                  <h5>Customer First</h5>
                  <p className="text-muted small">We focus on serving people, not just policies.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-shield-lock-fill fs-1" style={{ color: '#d4aa00' }}></i>
                  <h5>Trust</h5>
                  <p className="text-muted small">Honesty and transparency in every interaction.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-laptop-fill fs-1" style={{ color: '#d4aa00' }}></i>
                  <h5>Innovation</h5>
                  <p className="text-muted small">Modernizing how insurance works, one step at a time.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-geo-alt-fill fs-1" style={{ color: '#d4aa00' }}></i>
                  <h5>Local Presence</h5>
                  <p className="text-muted small">Offices across the province, rooted in community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-5 bg-white" data-aos="fade-up">
        <h4 className="mb-3 fw-bold">Ready to get started?</h4>
        <p className="text-muted">Explore our services or request a quote today — we're here to help.</p>
        <Link to={token ? '/customer-home' : 'customer-login'} className="btn btn-lg mt-3" style={{ backgroundColor: '#d4aa00', color: '#000' }}>
            View Services
          </Link>
        
      </section>
    </>
  );
}

export default AboutUs;
