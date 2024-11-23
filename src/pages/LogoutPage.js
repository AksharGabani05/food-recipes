// src/pages/LogoutPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To redirect after logout

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Logic for logging out (e.g., removing user data from localStorage)
    localStorage.removeItem('user');
    navigate('/'); // Redirect to home page or login page after logout
  }, [navigate]);

  return (
    <div>
      <h2>You have been logged out successfully.</h2>
    </div>
  );
};

export default LogoutPage;
