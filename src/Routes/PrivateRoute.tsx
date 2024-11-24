import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

// Mock function to check if the user is authenticated
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return (
    localStorage.getItem("accessToken") !== null &&
    localStorage.getItem("refreshToken") !== null
  ); // Example: check for a token in local storage
};
// console.log("isAuthenticated", isAuthenticated());
// console.log("localStorage", localStorage.getItem("accessToken"));

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const appElement = document.getElementById("App");
    if (appElement) {
      appElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return isAuthenticated() ? (
    <>
      {children} {/* Render the protected component if authenticated */}
    </>
  ) : (
    <Navigate to="/" replace /> // Redirect to login if not authenticated or Home
  );
};

export default PrivateRoute;
