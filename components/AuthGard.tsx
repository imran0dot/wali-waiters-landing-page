"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthGard = ({ children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setIsClient(true); // only render children after client check
    }
  }, [router]);

  if (!isClient) return null;

  return children;
};

export default AuthGard;
