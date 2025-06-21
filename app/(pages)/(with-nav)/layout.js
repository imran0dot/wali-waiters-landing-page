/* eslint-disable quotes */
import React from "react";
import { Footer } from "../../../components";
import Navigation from "../../../components/Navbar";

const layout = ({ children }) => (
  <div className="bg-primary-black overflow-hidden">
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default layout;
