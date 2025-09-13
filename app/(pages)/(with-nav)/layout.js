/* eslint-disable quotes */
import React from "react";
import { Footer } from "../../../components";
import Navbar from "../../../components/Navbar";

const layout = ({ children }) => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="">{children}</div>
    <Footer />
  </div>
);

export default layout;
