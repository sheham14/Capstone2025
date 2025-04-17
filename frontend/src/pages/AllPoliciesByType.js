import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AllPoliciesByType = () => {
  const [autoPolicies, setAutoPolicies] = useState([]);
  const [homePolicies, setHomePolicies] = useState([]);
  const navigate = useNavigate();

  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please log in to view policies.');
      }

      const response = await api.get(`/${token}/allpolicies`);
      setAutoPolicies(response.data.autoPolicies || []);
      setHomePolicies(response.data.homePolicies || []);
    } catch (err) {
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
    const confirmRenew = window.confirm("Are you sure you'd like to renew this policy for another year?");
    if (confirmRenew) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/customer-login');
          throw new Error('Please log in to renew a policy');
        }

        const endpoint = policyType === 'auto'
          ? `/${token}/${policyId}/renewautopolicy`
          : `/${token}/${policyId}/renewhomepolicy`;

        const response = await api.put(endpoint);
        if (response.data.success) {
          alert('Policy renewed successfully!');
          fetchPolicies();
        }
      } catch (err) {
        console.error(err);
        alert(err.message || 'Failed to renew policy. Try again.');
      }
    }
  };

  return (
    <Container className="my-5">
      {autoPolicies.length > 0 && (
        <>
          <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>Auto Policies</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Total Premium</th>
                <th>Policy Owner</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {autoPolicies.filter(policy => policy.viewingType === 'POLICY').map(policy => (
                <tr key={policy.id}>
                  <td>{policy.id}</td>
                  <td>${policy.totalPremium.toFixed(2)}</td>
                  <td>{policy.policyOwner.username}</td>
                  <td>{new Date(policy.startDate).toLocaleDateString()}</td>
                  <td>{new Date(policy.endDate).toLocaleDateString()}</td>
                  <td>{policy.activeStatus ? 'Active' : 'Inactive'}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleRenew(policy.id, 'home')} className="me-2">Renew</Button>
                    <Button variant={policy.activeStatus ? "danger" : "success"} size="sm" onClick={() => policy.activeStatus ? handleCancel(policy.id, 'auto') : handleActivate(policy.id, 'auto')}>{policy.activeStatus ? 'cancel' : 'activate'}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      {homePolicies.length > 0 && (
        <>
          <h2 className="text-center mt-5 mb-4" style={{ color: 'var(--primary-color)' }}>Home Policies</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Total Premium</th>
                <th>Policy Owner</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {homePolicies.filter(policy => policy.viewingType === 'POLICY').map(policy => (
                <tr key={policy.id}>
                  <td>{policy.id}</td>
                  <td>${policy.totalPremium.toFixed(2)}</td>
                  <td>{policy.policyOwner.username}</td>
                  <td>{new Date(policy.startDate).toLocaleDateString()}</td>
                  <td>{new Date(policy.endDate).toLocaleDateString()}</td>
                  <td>{policy.activeStatus ? 'Active' : 'Inactive'}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleRenew(policy.id, 'home')} className="me-2">Renew</Button>
                    <Button variant={policy.activeStatus ? "danger" : "success"} size="sm" onClick={() => policy.activeStatus ? handleCancel(policy.id, 'home') : handleActivate(policy.id, 'home')}>{policy.activeStatus ? 'activate' : 'cancel'}</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default AllPoliciesByType;
