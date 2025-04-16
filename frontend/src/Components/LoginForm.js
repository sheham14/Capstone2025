import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = ({ title, onSubmit, links = [] }) => {
  const [credentials, setCredentials] = React.useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <Container>
      <h2 className="text-center mb-4">{title}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
            type="submit"
            className="w-100 mb-3"
            style={{
                backgroundColor: 'var(--secondary-color)',
                borderColor: 'var(--secondary-color)'
            }}
            >
            Login
        </Button>
        <div className="text-center">
          {links.map((link, index) => (
            <div key={index} className="mb-2">
              <Link to={link.path}>{link.text}</Link>
            </div>
          ))}
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;