import React from "react";
import styles from './Home.module.css'; // Assuming you will update styles accordingly

function Home() {
  return (
    <div className="container text-center">
      <div className={styles.heroSection}>
        {/* Hero section with placeholder image */}
        <div className={styles.heroImage}></div>
        <h1>Your Trusted Insurance Partner</h1>
        <p>Providing reliable and personalized insurance solutions for you and your family.</p>
      </div>

      <div className="row mt-5">
        {/* Services Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>Our Insurance Services</h3>
          <p>At Josh Taylor Insurance, we offer a range of coverage options to fit your needs:</p>
          <ul>
            <li>Home Insurance</li>
            <li>Auto Insurance</li>
            <li>Life Insurance</li>
            <li>Business Insurance</li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>What Our Clients Say</h3>
          <p>Our customers trust us to provide the best insurance coverage. Here’s what they have to say:</p>
          <div className="testimonials">
            <blockquote>
              "Josh Taylor Insurance made the process of getting coverage easy and stress-free! Highly recommend."
              <footer>- John Doe</footer>
            </blockquote>
            <blockquote>
              "I’ve never felt more secure with my insurance. Great customer service and tailored options."
              <footer>- Sarah Smith</footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* Contact Us Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>Get a Quote Today!</h3>
          <p>Ready to find the best insurance plan for you? Contact us today for a personalized quote!</p>
          <a href="/contact" className="btn btn-primary">Request a Quote</a>
        </div>

        {/* About Us Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>About Josh Taylor Insurance</h3>
          <p>Founded by Josh Taylor, we are dedicated to helping individuals and businesses secure the best possible coverage at competitive rates. With over 20 years of experience, our goal is to provide you with peace of mind.</p>
        </div>
      </div>


    </div>
  );
}

export default Home;
