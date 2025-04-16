// src/services/mockApi.js
const mockUsers = [
    {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      dateOfBirth: '1990-01-01',
      role: 'CUSTOMER',
      activeStatus: true,
    },
  ];
  
  const mockQuotes = [
    {
      quoteId: 'Q123',
      insuredPerson: mockUsers[0],
      startDate: '2025-05-01',
      endDate: '2025-05-31',
      basePremium: 500.0,
      taxRate: 0.13,
      totalPremium: 565.0,
    },
  ];
  
  const mockPolicies = [
    {
      policyId: 'P001',
      type: 'home',
      insuredPerson: mockUsers[0],
      startDate: '2024-04-14',
      endDate: '2025-04-14',
      basePremium: 500.0,
      taxRate: 0.15,
      totalPremium: 575.0, // Base $500 * 1.15 tax (no discount yet)
      status: 'Active',
    },
    {
      policyId: 'P002',
      type: 'auto',
      insuredPerson: mockUsers[0],
      startDate: '2024-06-01',
      endDate: '2025-06-01',
      basePremium: 750.0,
      taxRate: 0.15,
      totalPremium: 862.5, // Base $750 * 1.15 tax (no discount yet)
      status: 'Active',
    },
  ];
  
  const mockApi = {
    get: async (url) => {
        if (url === '/policies/me') {
            return {
              data: mockPolicies,
            };
          }
      throw new Error('Not implemented');
    },
    post: async (url, formData) => {
      if (url === '/api/quote') {
        const type = formData.get('type');
        const taxRate = 0.15;
        let basePremium, factors = 1;
  
        if (type === 'auto') {
          basePremium = 750;
          const driverAge = parseInt(formData.get('driverAge')) || 25;
          const accidents = parseInt(formData.get('insuredVehicle[numberOfAccidents]')) || 0;
          const vehicleYear = parseInt(formData.get('insuredVehicle[vehicleYear]')) || new Date().getFullYear();
          const currentYear = new Date().getFullYear();
  
          // Driver Age Factor
          factors *= driverAge < 25 ? 2 : 1;
          // Accidents Factor
          factors *= accidents > 2 ? 2.5 : accidents === 1 ? 1.25 : 1;
          // Vehicle Age Factor
          factors *= (currentYear - vehicleYear) > 10 ? 2 : (currentYear - vehicleYear) > 5 ? 1.5 : 1;
          // Discount Factor (assume no home policy)
          factors *= 1;
        } else if (type === 'home') {
          basePremium = 500;
          const homeValue = parseFloat(formData.get('insuredHome[homeValue]')) || 250000;
          const liabilityLimit = parseFloat(formData.get('insuredHome[liabilityLimit]')) || 1000000;
          const dateBuilt = formData.get('insuredHome[dateBuilt]') ? new Date(formData.get('insuredHome[dateBuilt]')).getFullYear() : new Date().getFullYear();
          const heatingType = formData.get('insuredHome[heatingType]') || 'ELECTRIC';
          const locationType = formData.get('insuredHome[locationType]') || 'URBAN';
          const currentYear = new Date().getFullYear();
  
          // Home Value Factor
          factors *= 1 + (homeValue > 250000 ? (homeValue - 250000) * 0.002 : 0);
          // Liability Limit Factor
          factors *= liabilityLimit >= 2000000 ? 1.25 : 1.0;
          // Home Age Factor
          factors *= (currentYear - dateBuilt) > 50 ? 1.5 : (currentYear - dateBuilt) > 25 ? 1.25 : 1;
          // Heating Factor
          factors *= heatingType === 'OIL' ? 2.0 : heatingType === 'WOOD' ? 1.25 : 1;
          // Location Factor
          factors *= locationType === 'RURAL' ? 1.15 : 1.0;
          // Discount Factor (assume no auto policy)
          factors *= 1;
        }
  
        const totalPremium = basePremium * factors * (1 + taxRate);
        const newQuote = {
          quoteId: `Q${Math.floor(Math.random() * 1000)}`,
          insuredPerson: mockUsers[0],
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          basePremium,
          taxRate,
          totalPremium,
        };
        mockQuotes.push(newQuote);
        return { data: newQuote };
      }

      if (url === '/api/users') {
        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const dateOfBirth = formData.get('dateOfBirth');
        const role = formData.get('role') || 'CUSTOMER';
      
        // Check for duplicates
        if (mockUsers.some(user => user.email === email)) {
          throw new Error('Email already exists');
        }
        if (mockUsers.some(user => user.username === username)) {
          throw new Error('Username already exists');
        }
      
        const newUser = {
          id: mockUsers.length + 1,
          email,
          username,
          password,
          dateOfBirth,
          role,
          activeStatus: true,
        };
        mockUsers.push(newUser);
        console.log(mockUsers);
        return { data: newUser };
      }

      if (url === '/api/login') {
        const email = formData.get('email');
        const password = formData.get('password');
        
        const user = mockUsers.find(user => user.email === email && user.password === password);
        if (!user) {
          throw new Error('Invalid email or password');
        }
        
        return { data: { message: 'Login successful', userId: user.id, token: 'token123' } };
      }
      throw new Error('Not implemented');
    },
  };
  
  export default mockApi;