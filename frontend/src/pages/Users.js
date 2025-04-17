import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';


const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please log in to view users.');
      }

      const response = await api.get(`/${token}/allusers`);
      setAllUsers(response.data || []);
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to load users. Try again.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRowClick = (userId) => {
    navigate(`/customer-home/${userId}`);
  };

  const customers = allUsers.filter((user) => user.role === 'CUSTOMER');

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        Customers
      </h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user) => (
            <tr key={user.id} onClick={() => handleRowClick(user.id)} style={{ cursor: 'pointer' }}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.activeStatus ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
