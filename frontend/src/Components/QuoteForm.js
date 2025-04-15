// src/components/QuoteForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../services/api';

const QuoteForm = () => {
  const [policyType, setPolicyType] = useState('auto');
  const [formData, setFormData] = useState({
    driverAge: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    numberOfAccidents: '',
    dateBuilt: '',
    homeValue: '',
    liabilityLimit: '',
    dwellingType: '',
    heatingType: '',
    locationType: '',
  });
  const [error, setError] = useState('');
  const [quoteResult, setQuoteResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setQuoteResult(null);

    // Validation
    if (policyType === 'auto') {
      if (!formData.driverAge || formData.driverAge < 16) {
        setError('Driver age must be 16 or older.');
        return;
      }
      if (!formData.vehicleMake || !formData.vehicleModel || !formData.vehicleYear) {
        setError('Please fill in all vehicle details.');
        return;
      }
    } else {
      if (!formData.dateBuilt || !formData.homeValue || !formData.liabilityLimit) {
        setError('Please fill in all home details.');
        return;
      }
      if (!formData.dwellingType || !formData.heatingType || !formData.locationType) {
        setError('Please select all home options.');
        return;
      }
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('type', policyType);

      if (policyType === 'auto') {
        formDataToSend.append('driverAge', formData.driverAge);
        formDataToSend.append('insuredVehicle[vehicleMake]', formData.vehicleMake);
        formDataToSend.append('insuredVehicle[vehicleModel]', formData.vehicleModel);
        formDataToSend.append('insuredVehicle[vehicleYear]', formData.vehicleYear);
        formDataToSend.append('insuredVehicle[numberOfAccidents]', formData.numberOfAccidents || '0');
      } else {
        formDataToSend.append('insuredHome[dateBuilt]', formData.dateBuilt);
        formDataToSend.append('insuredHome[homeValue]', formData.homeValue);
        formDataToSend.append('insuredHome[liabilityLimit]', formData.liabilityLimit);
        formDataToSend.append('insuredHome[dwellingType]', formData.dwellingType);
        formDataToSend.append('insuredHome[heatingType]', formData.heatingType);
        formDataToSend.append('insuredHome[locationType]', formData.locationType);
      }

      const response = await api.post('/quote', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setQuoteResult(response.data);
    } catch (err) {
      setError('Failed to generate quote. Please try again.');
      console.error(err);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-primary-color">Get a Quote</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Policy Type</Form.Label>
          <Form.Select
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value)}
          >
            <option value="auto">Auto Insurance</option>
            <option value="home">Home Insurance</option>
          </Form.Select>
        </Form.Group>

        {policyType === 'auto' ? (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Driver Age</Form.Label>
              <Form.Control
                type="number"
                name="driverAge"
                value={formData.driverAge}
                onChange={handleInputChange}
                required
                min="16"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control
                type="text"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Control
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Year</Form.Label>
              <Form.Control
                type="number"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleInputChange}
                required
                min="1900"
                max={new Date().getFullYear() + 1}
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Accidents</Form.Label>
              <Form.Control
                type="number"
                name="numberOfAccidents"
                value={formData.numberOfAccidents}
                onChange={handleInputChange}
                min="0"
                placeholder="0"
                className="form-control"
              />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Date Built</Form.Label>
              <Form.Control
                type="date"
                name="dateBuilt"
                value={formData.dateBuilt}
                onChange={handleInputChange}
                required
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Home Value ($)</Form.Label>
              <Form.Control
                type="number"
                name="homeValue"
                value={formData.homeValue}
                onChange={handleInputChange}
                required
                min="0"
                step="1000"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Liability Limit ($)</Form.Label>
              <Form.Control
                type="number"
                name="liabilityLimit"
                value={formData.liabilityLimit}
                onChange={handleInputChange}
                required
                min="0"
                step="1000"
                className="form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dwelling Type</Form.Label>
              <Form.Select
                name="dwellingType"
                value={formData.dwellingType}
                onChange={handleInputChange}
                required
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="BUNGALOW">Bungalow</option>
                <option value="STANDALONE">Standalone</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Heating Type</Form.Label>
              <Form.Select
                name="heatingType"
                value={formData.heatingType}
                onChange={handleInputChange}
                required
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="GAS">Gas</option>
                <option value="OIL">Oil</option>
                <option value="ELECTRIC">Electric</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location Type</Form.Label>
              <Form.Select
                name="locationType"
                value={formData.locationType}
                onChange={handleInputChange}
                required
                className="form-select"
              >
                <option value="">Select...</option>
                <option value="RURAL">Rural</option>
                <option value="URBAN">Urban</option>
              </Form.Select>
            </Form.Group>
          </>
        )}

        <Button
          type="submit"
          className="w-100 btn-secondary-color"
        >
          Get Quote
        </Button>
      </Form>

      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      {quoteResult && (
        <div className="mt-4">
          <Alert variant="success">
            <p>Quote ID: {quoteResult.quoteId}</p>
            <p>Total Premium: ${quoteResult.totalPremium.toFixed(2)}</p>
            <p>Valid Until: {new Date(quoteResult.endDate).toLocaleDateString()}</p>
          </Alert>
          <Button
            as={Link}
            to="/purchase"
            style={{
              backgroundColor: 'var(--secondary-color)',
              borderColor: 'var(--secondary-color)',
            }}
            className="w-100"
          >
            Purchase Policy
          </Button>
        </div>
      )}
    </Container>
  );
};

export default QuoteForm;