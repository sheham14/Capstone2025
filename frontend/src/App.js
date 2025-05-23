import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage';
import EmployeeLoginPage from './pages/EmployeeLoginPage';
import Policies from './pages/Policies';
import Quote from './pages/Quote';
import CustomerLoginPage from './pages/CustomerLoginPage';
import CustomerHomepage from './pages/CustomerHomePage';
import EmployeeHomepage from './pages/EmployeeHomePage';
import Register from './pages/Register'
import Users from './pages/Users';
import AllPoliciesByType from './pages/AllPoliciesByType';
import AllPolicies from './pages/AllPolicies';
import RatingFactors from './pages/RatingFactors';
import ContactForm from './components/ContactForm'; 
import AboutUs from './components/AboutUs';
import EditUser from './pages/EditUser';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/policies/:userId" element={<Policies />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/quote/:userId" element={<Quote />} />
          <Route path="/customer-home" element={<CustomerHomepage />} />
          <Route path="/customer-home/:userId" element={<CustomerHomepage />} />
          <Route path="/employee-home" element={<EmployeeHomepage />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/allpoliciesbytype" element={<AllPoliciesByType/>} />
          <Route path="/allpolicies" element={<AllPolicies/>} />
          <Route path="/rating-factors" element={<RatingFactors/>} />
          <Route path="/edit-user/:userId" element={<EditUser/>} />
          
        </Route>
        <Route path="/customer-login" element={<CustomerLoginPage />} />
        <Route path="/employee-login" element={<EmployeeLoginPage />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  );
}

export default App;