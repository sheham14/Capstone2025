import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const Policies = () => {
  const { userId } = useParams();
  const [autoPolicies, setAutoPolicies] = useState([]);
  const [homePolicies, setHomePolicies] = useState([]);
  const navigate = useNavigate();
    const fetchPolicies = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Please log in to view policies.');
        }
        if (userId) {
          const response = await api.get(`/${token}/alluserpoliciesbyid/${userId}`);
        setAutoPolicies(response.data.autoPolicies || []);
        setHomePolicies(response.data.homePolicies || []);
        }
        else {
        const response = await api.get(`/${token}/alluserpolicies`);
        setAutoPolicies(response.data.autoPolicies || []);
        setHomePolicies(response.data.homePolicies || []);
      }} catch (err) {
        console.error(err);
        alert(err.message || 'Failed to load policies. Try again.');
      }
    };
  useEffect(() => {

    fetchPolicies();
  }, []);

  const handleCancel = async (policyId, policyType) => {
    const confirmCancel = window.confirm("Are you sure you'd like to cancel this policy?");
    if (confirmCancel) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/customer-login');
          throw new Error('Please log in to cancel a policy');
        }
  
        let response;
        if (policyType === 'auto') {
          response = await api.put(`/${token}/${policyId}/cancelautopolicy`);
          fetchPolicies();
        } else if (policyType === 'home') {
          response = await api.put(`/${token}/${policyId}/cancelhomepolicy`);
          fetchPolicies();
        } else {
          throw new Error('Unknown policy type');
        }
  
        if (response.data.success) {
          alert('Policy canceled successfully!');
          // Optionally, update the state or refetch data to reflect the cancellation
        }
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to cancel policy. Try again.');
      }
    }
  };

  const handleActivate = async (policyId, policyType) => {
    const confirmCancel = window.confirm("Are you sure you'd like to cancel this policy?");
    if (confirmCancel) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/customer-login');
          throw new Error('Please log in to cancel a policy');
        }
  
        let response;
        if (policyType === 'auto') {
          response = await api.put(`/${token}/${policyId}/activateautopolicy`);
          fetchPolicies();
        } else if (policyType === 'home') {
          response = await api.put(`/${token}/${policyId}/activatehomepolicy`);
          fetchPolicies();
        } else {
          throw new Error('Unknown policy type');
        }
  
        if (response.data.success) {
          alert('Policy canceled successfully!');
          // Optionally, update the state or refetch data to reflect the cancellation
        }
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to cancel policy. Try again.');
      }
    }
  };

  const handleRenew = async (policyId, policyType) => {
    const confirmCancel = window.confirm("Are you sure you'd like to renew this policy for another year?");
    if (confirmCancel) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/customer-login');
          throw new Error('Please log in to renew a policy');
        }
  
        let response;
        if (policyType === 'auto') {
          response = await api.put(`/${token}/${policyId}/renewautopolicy`);
          fetchPolicies();
        } else if (policyType === 'home') {
          response = await api.put(`/${token}/${policyId}/renewhomepolicy`);
          fetchPolicies();
        } else {
          throw new Error('Unknown policy type');
        }
  
        if (response.data.success) {
          alert('Policy canceled successfully!');
          // Optionally, update the state or refetch data to reflect the cancellation
        }
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to cancel policy. Try again.');
      }
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        My Policies
      </h2>
      <Row>
  {autoPolicies.concat(homePolicies)
    .filter(policy => policy.viewingType === 'POLICY')
    .map((policy, index) => (
      <Col md={4} key={`${policy.id}-${index}`} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Policy #{index + 1}</Card.Title>
            <Card.Text>
              Type: {policy.insuredAutomobile ? 'Auto' : policy.insuredHome ? 'Home' : 'Unknown'}<br />
              Total Premium: ${policy.totalPremium.toFixed(2)}<br />
              Start Date: {new Date(policy.startDate).toLocaleDateString()}<br />
              End Date: {new Date(policy.endDate).toLocaleDateString()}<br />
              Status: {policy.activeStatus ? 'Active' : 'Inactive'}
            </Card.Text>
            <div>
              <Button
         variant="primary"
         onClick={() => handleRenew(policy.id, policy.insuredAutomobile ? 'auto' : 'home')}
       >
                Renew
              </Button>
              <Button variant={policy.activeStatus ? "danger" : "success"}  onClick={() => policy.activeStatus ? handleCancel(policy.id, policy.insuredAutomobile ? 'auto' : 'home') : handleActivate(policy.id, policy.insuredAutomobile ? 'auto' : 'home')}>{policy.activeStatus ? 'cancel' : 'activate'}</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
</Row>
    </Container>
  );
};

export default Policies;