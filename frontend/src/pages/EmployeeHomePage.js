// src/pages/EmployeeHomepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const EmployeeHomePage = () => {
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
          <h1>Admin Dashboard</h1>
          <p className="lead">Welcome, Admin! Manage policies, reports, and more.</p>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-5">
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* Get a Quote
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Get a Quote</Card.Title>
                  <Card.Text>Create a quote for a customer.</Card.Text>
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
            </Col> */}

            {/* Renew Policy
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Renew Policy</Card.Title>
                  <Card.Text>Renew a customer’s policy.</Card.Text>
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

            {/* Cancel Policy
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Cancel Policy</Card.Title>
                  <Card.Text>Cancel a customer’s policy.</Card.Text>
                    <Button
                      as={Link}
                      to="/cancel"
                      style={{
                        backgroundColor: 'var(--secondary-color)',
                        borderColor: 'var(--secondary-color)',
                      }}
                    >
                      Cancel Policy
                    </Button>
                </Card.Body>
                </Card>
            </Col> */}

            {/* Active Policies & Quotes Report */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>All Policies & Quotes</Card.Title>
                  <Card.Text>
                    View All policies and quotes.
                    <br />
                    <small className="text-muted">5 policies, 3 quotes active</small>
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/allpolicies"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    View Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Policies by Type Report */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Policies by Type</Card.Title>
                  <Card.Text>
                    Breakdown of home and auto policies.
                    <br />
                    <small className="text-muted">2 home, 3 auto policies</small>
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/allpoliciesbytype"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    View Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Premiums by Year Report */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Premiums by Year</Card.Title>
                  <Card.Text>
                    Total premiums sorted by year.
                    <br />
                    <small className="text-muted">$10,000 in 2024</small>
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/reports/premiums"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    View Report
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Update Home Rating Factors */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Home Rating Factors</Card.Title>
                  <Card.Text>Update risk factors for home policies.</Card.Text>
                  <Button
                    as={Link}
                    to="/rating-factors"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Update Factors
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Update Auto Rating Factors */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Auto Rating Factors</Card.Title>
                  <Card.Text>Update risk factors for auto policies.</Card.Text>
                  <Button
                    as={Link}
                    to="/rating-factors"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Update Factors
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Manage Users */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Manage Users</Card.Title>
                  <Card.Text>
                    View and manage user accounts.
                    <br />
                    <small className="text-muted">10 total users</small>
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/users"
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                  >
                    Manage Users
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

export default EmployeeHomePage;