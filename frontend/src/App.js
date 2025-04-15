import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for v6
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Login from "./Pages/Register/Login.js"

// import Components
import Footer from './Components/Footer.js';
import Navbar from "./Components/Navbar.js";
import InsuranceDemo from './Pages/Demo/InsuranceDemo.js';

const App = () => {
  return (
    
    <Router>
            <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Demo" element={<InsuranceDemo />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
