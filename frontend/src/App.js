import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import LandingPage from './pages/LandingPage';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import Policies from './pages/Policies';
import Quote from './pages/Quote';
import CustomerLoginPage from './pages/CustomerLoginPage';
import CustomerHomepage from './pages/CustomerHomePage';
import EmployeeHomepage from './pages/EmployeeHomePage';
import ContactForm from './Components/ContactForm'; 
import AboutUs from './Components/AboutUs';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/customer-home" element={<CustomerHomepage />} />
          <Route path="/employee-home" element={<EmployeeHomepage />} />
        </Route>
        <Route path="/customer-login" element={<CustomerLoginPage />} />
        <Route path="/employee-login" element={<EmployeeLoginPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;