import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './componnents/Nav';
import Footer from './componnents/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;