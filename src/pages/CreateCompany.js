// src/pages/CreateCompany.js
import React, { useState } from 'react';

function CreateCompany() {
  const [companyName, setCompanyName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to create company and first admin user
    console.log({ companyName, adminEmail, adminPassword });
  };

  return (
    <div>
      <h1>Create New Company</h1>
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <label>Admin Email</label>
        <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
        <label>Admin Password</label>
        <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />
        <button type="submit">Create Company</button>
      </form>
    </div>
  );
}

export default CreateCompany;
