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

            {/* Active Policies & Quotes Report */}
            <Col>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>All Policies & Quotes</Card.Title>
                    <br />
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
                    <br />
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
                    <br />
                  <Button
                    as={Link}
                    to="/rating-factors"
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
                     <br />
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
                     <br />
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
                    <br/>
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