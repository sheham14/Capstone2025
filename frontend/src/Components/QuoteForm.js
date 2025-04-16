import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { Form, Button, Alert, Container } from 'react-bootstrap';
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
  const [quoteResult, setQuoteResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Add this

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setQuoteResult(null);
  
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
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please log in to generate a quote.');
      }
  
      const formDataToSend = new FormData();
      let totalPremium = 0;
  
      if (policyType === 'auto') {
        const basePremium = 750;
        const taxRate = 0.15;
        let factors = 1;
  
        const driverAge = parseInt(formData.driverAge);
        const vehicleYear = parseInt(formData.vehicleYear);
        const accidents = parseInt(formData.numberOfAccidents || '0');
        const currentYear = new Date().getFullYear();
  
        factors *= driverAge < 25 ? 2 : 1;
        factors *= accidents > 2 ? 2.5 : accidents === 1 ? 1.25 : 1;
        factors *= (currentYear - vehicleYear) > 10 ? 2 : (currentYear - vehicleYear) > 5 ? 1.5 : 1;
  
        totalPremium = basePremium * factors * (1 + taxRate);
  
        formDataToSend.append('driverAge', driverAge);
        formDataToSend.append('insuredAutomobile.vehicleMake', formData.vehicleMake);
        formDataToSend.append('insuredAutomobile.vehicleModel', formData.vehicleModel);
        formDataToSend.append('insuredAutomobile.vehicleManufactureDate', formData.vehicleYear + '-01-01');
        formDataToSend.append('insuredAutomobile.numberofAccidents', accidents); // Match field name
        formDataToSend.append('basePremium', basePremium);
        formDataToSend.append('taxRate', taxRate);
        formDataToSend.append('totalPremium', totalPremium.toString()); // Send calculated value
        formDataToSend.append('startDate', new Date().toISOString().split('T')[0]);
        formDataToSend.append('endDate', new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]);
        formDataToSend.append('activeStatus', '1');
        formDataToSend.append('hasHomePolicyDiscount', '0');
      } else {
        const basePremium = 500;
        const taxRate = 0.15;
        let factors = 1;
  
        const homeValue = parseFloat(formData.homeValue);
        const liabilityLimit = parseFloat(formData.liabilityLimit);
        const dateBuilt = parseInt(formData.dateBuilt);
        const heatingType = formData.heatingType;
        const locationType = formData.locationType;
        const currentYear = new Date().getFullYear();
  
        factors *= 1 + (homeValue > 250000 ? (homeValue - 250000) * 0.002 : 0);
        factors *= liabilityLimit >= 2000000 ? 1.25 : 1.0;
        factors *= (currentYear - dateBuilt) > 50 ? 1.5 : (currentYear - dateBuilt) > 25 ? 1.25 : 1;
        factors *= heatingType === 'OIL' ? 2.0 : heatingType === 'WOOD' ? 1.25 : 1;
        factors *= locationType === 'RURAL' ? 1.15 : 1.0;
  
        totalPremium = basePremium * factors * (1 + taxRate);
  
        formDataToSend.append('dateBuilt', dateBuilt);
        formDataToSend.append('homeValue', homeValue);
        formDataToSend.append('liabilityLimit', liabilityLimit);
        formDataToSend.append('dwellingType', formData.dwellingType);
        formDataToSend.append('heatingType', formData.heatingType);
        formDataToSend.append('locationType', formData.locationType);
        formDataToSend.append('basePremium', basePremium);
        formDataToSend.append('taxRate', taxRate);
        formDataToSend.append('totalPremium', totalPremium.toString());
        formDataToSend.append('startDate', new Date().toISOString().split('T')[0]);
        formDataToSend.append('endDate', new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]);
        formDataToSend.append('activeStatus', '1');
        formDataToSend.append('hasAutoPolicyDiscount', '0');
      }
  
      const formDataEntries = {};
      for (const [key, value] of formDataToSend.entries()) {
        formDataEntries[key] = value;
      }
      console.log('FormData being sent:', formDataEntries);
  
      const endpoint = policyType === 'auto' ? `/${token}/autoquote` : `/${token}/homequote`;
      const response = await api.post(endpoint, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Backend response:', response.data);
  
      // Store quote details in localStorage
      const startDate = new Date().toISOString().split('T')[0];
      localStorage.setItem('latestQuote', JSON.stringify({
        totalPremium: totalPremium,
        endDate: response.data.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        policyType: policyType,
        startDate: startDate,
        vehicleMake: formData.vehicleMake,
        vehicleModel: formData.vehicleModel,
        numberOfAccidents: parseInt(formData.numberOfAccidents || '0')
      }));
  
      setQuoteResult({
        totalPremium: totalPremium,
        endDate: response.data.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      });
    } catch (err) {
      setError(err.message || 'Failed to generate quote. Please try again.');
      console.error(err);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        Get a Quote
      </h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Policy Type</Form.Label>
          <Form.Select
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value)}
          >
            <option value="auto">Auto</option>
            <option value="home">Home</option>
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
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control
                type="text"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Control
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Year</Form.Label>
              <Form.Control
                type="number"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Accidents</Form.Label>
              <Form.Control
                type="number"
                name="numberOfAccidents"
                value={formData.numberOfAccidents}
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Home Value ($)</Form.Label>
              <Form.Control
                type="number"
                name="homeValue"
                value={formData.homeValue}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Liability Limit ($)</Form.Label>
              <Form.Control
                type="number"
                name="liabilityLimit"
                value={formData.liabilityLimit}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dwelling Type</Form.Label>
              <Form.Select name="dwellingType" value={formData.dwellingType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="HOUSE">House</option>
                <option value="CONDO">Condo</option>
                <option value="APARTMENT">Apartment</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Heating Type</Form.Label>
              <Form.Select name="heatingType" value={formData.heatingType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="ELECTRIC">Electric</option>
                <option value="OIL">Oil</option>
                <option value="WOOD">Wood</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location Type</Form.Label>
              <Form.Select name="locationType" value={formData.locationType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="URBAN">Urban</option>
                <option value="RURAL">Rural</option>
              </Form.Select>
            </Form.Group>
          </>
        )}

        <Button
          type="submit"
          style={{
            backgroundColor: 'var(--secondary-color)',
            borderColor: 'var(--secondary-color)',
          }}
          className="w-100"
        >
          Get Quote
        </Button>
      </Form>


{quoteResult && (
  <div className="mt-4">
    <Alert variant="success">
      <p>Total Premium: ${quoteResult.totalPremium.toFixed(2)}</p>
      <p>Valid Until: {new Date(quoteResult.endDate).toLocaleDateString()}</p>
    </Alert>
    <Button
      onClick={async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('Please log in to purchase a policy.');
          }

          console.log('Fetching quotes with token:', token);
          const quotesResponse = await api.get(`/${token}/alluser${policyType === 'auto' ? 'auto' : 'home'}policies`);
          console.log('Quotes response:', quotesResponse.data);

          // Find the quote by startDate and viewingType
          const quoteDetails = JSON.parse(localStorage.getItem('latestQuote') || '{}');
          const latestQuote = quotesResponse.data
            .filter(quote => {
              const quoteStartDate = new Date(quote.startDate).toISOString().split('T')[0];
              return (
                quote.viewingType === 'QUOTE' &&
                quoteStartDate === quoteDetails.startDate &&
                quote.insuredAutomobile.vehicleMake === quoteDetails.vehicleMake &&
                quote.insuredAutomobile.vehicleModel === quoteDetails.vehicleModel &&
                quote.insuredAutomobile.numberofAccidents === quoteDetails.numberOfAccidents
              );
            })
            .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0];
          
          if (!latestQuote || !latestQuote.id) {
            throw new Error('Failed to find the quote to purchase or missing quote ID');
          }

          // Since id might be missing, fetch the quote directly using another endpoint or assume latest
          console.log('Purchasing quote with ID:', latestQuote.id);
          const endpoint = policyType === 'auto'
            ? `/token/${latestQuote.id}/createautopolicyfromquote`
            : `/token/${latestQuote.id}/createhomepolicyfromquote`;
          const purchaseResponse = await api.put(endpoint);
          console.log('Purchase response:', purchaseResponse.data);

          alert('Policy created successfully!');
          localStorage.removeItem('latestQuote');
          navigate('/policies');
        } catch (err) {
          console.error('Purchase policy error:', err);
          console.error('Error details:', err.response ? err.response.data : err.message);
          alert('Failed to create policy: ' + (err.message || 'Unknown error'));
        }
      }}
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