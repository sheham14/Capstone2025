// src/pages/CustomerHomepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CustomerHomepage = () => {
  const customerName = 'Customer'; // Placeholder until auth is added

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5 text-center"
        style={{
          backgroundColor: 'var(--primary-color)',
          color: 'white',
        }}
      >
        <Container>
          <h1>Welcome, {customerName}!</h1>
          <p className="lead">
            Manage your insurance needs with ease. Get quotes, view policies, and more.
          </p>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-5">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* Get a Quote */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Get a Quote</Card.Title>
                  <Card.Text>
                    Request a new quote for home or auto insurance in minutes.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/quote"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Start Quote
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* View Policies */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>View Policies</Card.Title>
                  <Card.Text>
                    Check your active home and auto policies.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/policies"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  
                  >
                    View Policies
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Edit Profile */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Edit Profile</Card.Title>
                  <Card.Text>
                    Update your personal information and preferences.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/profile"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                    disabled
                  >
                    Edit Profile (Coming Soon)
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Renew Policy */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Renew Policy</Card.Title>
                  <Card.Text>
                    Renew your policies to stay protected.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/renew"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                    disabled
                  >
                    Renew Policy (Coming Soon)
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Support */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Contact Support</Card.Title>
                  <Card.Text>
                    Reach out to our service team for assistance.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/contact"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                    disabled
                  >
                    Contact Us (Coming Soon)
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerHomepage;