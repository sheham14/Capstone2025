import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CustomerHomepage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();


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
          <h1>Welcome to Your Dashboard</h1>
          <p className="lead">Manage your insurance policies with ease.</p>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-5">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Get a Quote</Card.Title>
                  <Card.Text>Create a quote for a new policy.</Card.Text>
                  <Button
                    as={Link}
                    to={`/quote${userId ? `/${userId}` : ""}`}
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
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>View Policies</Card.Title>
                  <Card.Text>Manage your existing policies.</Card.Text>
                  <Button
                    as={Link}
                    to={`/policies${userId ? `/${userId}` : ""}`}
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
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Edit Profile</Card.Title>
                  <Card.Text>Update your personal information.</Card.Text>
                  <Button
                    as={Link}
                    to="/rating-factors"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Edit Profile
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Renew Policy</Card.Title>
                  <Card.Text>Renew your existing policy.</Card.Text>
                  <Button
                    as={Link}
                    to="/renew"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Renew Policy
                  </Button>
                </Card.Body>
              </Card>
            </Col> */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Contact Support</Card.Title>
                  <Card.Text>Need help? Contact our support team.</Card.Text>
                  <Button
                    as={Link}
                    to="/contact"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Contact Support
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