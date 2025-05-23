import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

const EditUser = () => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userId } = useParams(); // Get userId from URL
  const token = localStorage.getItem('token');

  const fetchUser = async () => {
    if (!token || !userId) {
      setError('Please log in or select a user.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/getuser/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const { id, username, email } = response.data;
      setUser({ id, username, email });
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load user data.');
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token, userId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!user.username || !user.email) {
      setError('All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setError('Invalid email address.');
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/updateuser/${user.id}`,
        {},
        {
          params: {
            name: user.username,
            email: user.email
          },
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setSuccess('Profile updated!');
      await fetchUser(); // Refresh form with updated details
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-5">
        <Card className="p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Card.Title className="text-center">Edit User</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/employee-home')}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default EditUser;