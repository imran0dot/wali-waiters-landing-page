"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
      } else {
        try {
          const decoded: any = jwtDecode(token?.split(" ")[1]);

          const currentTime = Date.now() / 1000;
          if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            router.replace("/login");
          } else {
            setLoading(false);
          }
        } catch (error) {
          router.replace("/login");
        }
      }
    }
  }, [router]);

  if (loading) return null;

  return <>{children}</>;
};

export default AuthGuard;
