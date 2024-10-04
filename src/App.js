// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateCompany from './pages/CreateCompany';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-company" element={<CreateCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
