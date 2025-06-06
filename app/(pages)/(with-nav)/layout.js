import React from 'react';
import { Footer, Navbar } from '../../../components';

const layout = ({ children }) => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default layout;
