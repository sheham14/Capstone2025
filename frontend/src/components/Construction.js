import React from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { FaHardHat, FaTools } from 'react-icons/fa';

const Construction = () => {
  return (
    <Container className="text-center my-5 py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <FaHardHat size={80} style={{ color: '#ffc107' }} />
          <h1 className="my-4">Page Under Construction</h1>
          <p className="lead">
            We're working hard to bring this page to life.
          </p>
          <Alert variant="warning" className="my-4">
            Please check back soon!
          </Alert>
          <Spinner animation="border" variant="warning" />
          <div className="mt-4">
            <FaTools size={40} className="me-2" />
            <span>Dev team is on it 🚧</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Construction;
