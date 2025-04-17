import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Add this import
import { Form, Button, Alert, Container } from 'react-bootstrap';
import api from '../services/api';

const QuoteForm = () => {
  const { userId } = useParams();
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
  
      // Fetch user policies to determine discounts
      let hasHomePolicyDiscount = false;
      let hasAutoPolicyDiscount = false;
      let autoPoliciesResponse;
      let homePoliciesResponse;
      if (userId) {
        autoPoliciesResponse = await api.get(`/${token}/alluserautopoliciesbyid/${userId}`);
        homePoliciesResponse = await api.get(`/${token}/alluserhomepoliciesbyid/${userId}`);
      }
      else {
      autoPoliciesResponse = await api.get(`/${token}/alluserautopolicies`);
      homePoliciesResponse = await api.get(`/${token}/alluserhomepolicies`);
      }
      const activeAutoPolicies = autoPoliciesResponse.data.filter(
        policy => policy.viewingType === 'POLICY' && policy.activeStatus
      );
      const activeHomePolicies = homePoliciesResponse.data.filter(
        policy => policy.viewingType === 'POLICY' && policy.activeStatus
      );
      hasHomePolicyDiscount = activeHomePolicies.length > 0;
      hasAutoPolicyDiscount = activeAutoPolicies.length > 0;
  
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
  
        totalPremium = basePremium + factors * (1 + taxRate);
        // Apply 10% discount if user has an active home policy
        if (hasHomePolicyDiscount) {
          totalPremium *= 0.9; // 10% discount
        }
  
        formDataToSend.append('driverAge', driverAge);
        formDataToSend.append('insuredAutomobile.vehicleMake', formData.vehicleMake);
        formDataToSend.append('insuredAutomobile.vehicleModel', formData.vehicleModel);
        formDataToSend.append('insuredAutomobile.vehicleManufactureDate', new Date(formData.vehicleYear + '-01-01').toISOString().split('T')[0]);
        formDataToSend.append('insuredAutomobile.numberofAccidents', accidents);
        formDataToSend.append('basePremium', basePremium);
        formDataToSend.append('taxRate', taxRate);
        formDataToSend.append('totalPremium', totalPremium.toString());
        formDataToSend.append('startDate', new Date().toISOString().split('T')[0]);
        formDataToSend.append('endDate', new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]);
        formDataToSend.append('activeStatus', '1');
        formDataToSend.append('hasHomePolicyDiscount', hasHomePolicyDiscount.toString());
      } else {
        const basePremium = 500;
        const taxRate = 0.15;
        let factors = 1;
  
        const homeValue = parseFloat(formData.homeValue);
        const liabilityLimit = parseFloat(formData.liabilityLimit);
        const dateBuilt = formData.dateBuilt;
        const heatingType = formData.heatingType;
        const locationType = formData.locationType;
        const currentYear = new Date().getFullYear();
  
        factors *= 1 + (homeValue > 250000 ? (homeValue - 250000) * 0.002 : 0);
        factors *= liabilityLimit >= 2000000 ? 1.25 : 1.0;
        factors *= (currentYear - parseInt(dateBuilt)) > 50 ? 1.5 : (currentYear - parseInt(dateBuilt)) > 25 ? 1.25 : 1;
        factors *= heatingType === 'OIL' ? 2.0 : heatingType === 'GAS' ? 1.25 : 1;
        factors *= locationType === 'RURAL' ? 1.15 : 1.0;
  
        totalPremium = basePremium + factors * (1 + taxRate);
        // Apply 10% discount if user has an active auto policy
        if (hasAutoPolicyDiscount) {
          totalPremium *= 0.9; // 10% discount
        }
  
        formDataToSend.append('insuredHome.dateBuilt', dateBuilt);
        formDataToSend.append('insuredHome.homeValue', homeValue);
        formDataToSend.append('insuredHome.liabilityLimit', liabilityLimit);
        formDataToSend.append('insuredHome.dwellingType', formData.dwellingType);
        formDataToSend.append('insuredHome.heatingType', formData.heatingType);
        formDataToSend.append('insuredHome.locationType', formData.locationType);
        formDataToSend.append('basePremium', basePremium);
        formDataToSend.append('taxRate', taxRate);
        formDataToSend.append('totalPremium', totalPremium.toString());
        formDataToSend.append('startDate', new Date().toISOString().split('T')[0]);
        formDataToSend.append('endDate', new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]);
        formDataToSend.append('activeStatus', '1');
        formDataToSend.append('hasAutoPolicyDiscount', hasAutoPolicyDiscount.toString());
      }
  
      const formDataEntries = {};
      for (const [key, value] of formDataToSend.entries()) {
        formDataEntries[key] = value;
      }
      console.log('FormData being sent:', formDataEntries);
  
      let endpoint = policyType === 'auto' ? `/${token}/autoquote` : `/${token}/homequote`;
      if (userId) {
        endpoint = endpoint.concat(`byId/${userId}`);
      }
      const response = await api.post(endpoint, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Backend response:', response.data);
  
      const startDate = new Date().toISOString().split('T')[0];
      localStorage.setItem('latestQuote', JSON.stringify({
        id: response.data.id,
        totalPremium: totalPremium,
        endDate: response.data.endDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        policyType: policyType
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
                <option value="BUNGALOW">Bungalow</option>
                <option value="STANDALONE">Standalone</option>
              </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
              <Form.Label>Heating Type</Form.Label>
              <Form.Select name="heatingType" value={formData.heatingType} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="GAS">Gas</option>
                <option value="OIL">Oil</option>
                <option value="ELECTRIC">Electric</option>
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

      let autoPoliciesResponse;
      let homePoliciesResponse;
      if (userId) {
        autoPoliciesResponse = await api.get(`/${token}/alluserautopoliciesbyid/${userId}`);
        homePoliciesResponse = await api.get(`/${token}/alluserhomepoliciesbyid/${userId}`);
      }
      else {
      autoPoliciesResponse = await api.get(`/${token}/alluserautopolicies`);
      homePoliciesResponse = await api.get(`/${token}/alluserhomepolicies`);
      }
      const activeAutoPolicies = autoPoliciesResponse.data.filter(
        policy => policy.viewingType === 'POLICY' && policy.activeStatus
      );
      const activeHomePolicies = homePoliciesResponse.data.filter(
        policy => policy.viewingType === 'POLICY' && policy.activeStatus
      );

      if (policyType === 'auto' && activeAutoPolicies.length >= 2) {
        throw new Error('You have reached the maximum limit of 2 active auto policies.');
      }
      if (policyType === 'home' && activeHomePolicies.length >= 1) {
        throw new Error('You have reached the maximum limit of 1 active home policy.');
      }

      console.log('Fetching quotes with token:', token);
      const quotesResponse = await api.get(`/${token}/alluser${policyType === 'auto' ? 'auto' : 'home'}policies${userId ? `byid/${userId}`: ""}`);
      console.log('Quotes response:', quotesResponse.data);

      const quoteDetails = JSON.parse(localStorage.getItem('latestQuote') || '{}');
      console.log('Inspecting quotes:', quotesResponse.data);
      console.log('Quote details from localStorage:', quoteDetails);
      const latestQuote = quotesResponse.data.find(quote => 
        quote.viewingType === 'QUOTE' && quote.id === quoteDetails.id
      );

      if (!latestQuote) {
        throw new Error('Failed to find the quote to purchase');
      }

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