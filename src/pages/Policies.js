// src/pages/Policies.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

const Policies = () => {
  const [policies, setPolicies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await api.get('/policies/me');
        setPolicies(response.data);
      } catch (err) {
        setError('Failed to load policies. Please try again.');
        console.error(err);
      }
    };
    fetchPolicies();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        Your Policies
      </h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {policies.length === 0 && !error ? (
        <p className="text-center">No policies found.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {policies.map((policy) => (
            <Col key={policy.policyId}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{policy.type === 'home' ? 'Home' : 'Auto'} Policy</Card.Title>
                  <Card.Text>
                    <strong>Policy ID:</strong> {policy.policyId}<br />
                    <strong>Premium:</strong> ${policy.totalPremium.toFixed(2)}<br />
                    <strong>Start Date:</strong> {new Date(policy.startDate).toLocaleDateString()}<br />
                    <strong>End Date:</strong> {new Date(policy.endDate).toLocaleDateString()}<br />
                    <strong>Status:</strong> {policy.status}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/renew/${policy.policyId}`}
                    style={{
                      backgroundColor: 'var(--secondary-color)',
                      borderColor: 'var(--secondary-color)',
                    }}
                    className="me-2"
                  >
                    Renew
                  </Button>
                  <Button
                    as={Link}
                    to={`/cancel/${policy.policyId}`}
                    variant="outline-danger"
                  >
                    Cancel
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Policies;