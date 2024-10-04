// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleCreateCompany = () => {
    navigate('/create-company');
  };

  return (
    <div>
      <h1>Super Admin Dashboard</h1>
      <button onClick={handleCreateCompany}>Create New Company</button>
      {/* Later we will fetch and display a list of companies here */}
    </div>
  );
}

export default Dashboard;