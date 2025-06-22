/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import { Toaster } from "sonner";

const Provider = ({ children }) => (
  <>
    <Toaster />
    {children}
  </>
);

export default Provider;
