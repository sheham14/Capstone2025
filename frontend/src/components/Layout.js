import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header/>
    <main style={{ flex: 1 }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;