import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Policies = () => {
  const [autoPolicies, setAutoPolicies] = useState([]);
  const [homePolicies, setHomePolicies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Please log in to view policies.');
        }
        const response = await api.get(`/${token}/alluserpolicies`);
        setAutoPolicies(response.data.autoPolicies || []);
        setHomePolicies(response.data.homePolicies || []);
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to load policies. Try again.');
      }
    };
    fetchPolicies();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        My Policies
      </h2>
      <Row>
        {autoPolicies.concat(homePolicies).map((policy) => (
          <Col md={4} key={policy.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>
                  {policy.viewingType === 'POLICY' ? 'Policy' : 'Quote'} #{policy.id}
                </Card.Title>
                <Card.Text>
                  Type: {policy.driverAge ? 'Auto' : 'Home'}<br />
                  Total Premium: ${policy.totalPremium.toFixed(2)}<br />
                  Start Date: {new Date(policy.startDate).toLocaleDateString()}<br />
                  End Date: {new Date(policy.endDate).toLocaleDateString()}<br />
                  Status: {policy.activeStatus ? 'Active' : 'Inactive'}
                </Card.Text>
                {policy.viewingType === 'POLICY' && (
                  <div>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => navigate(`/renew/${policy.id}`)}
                    >
                      Renew
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => navigate(`/cancel/${policy.id}`)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Policies;