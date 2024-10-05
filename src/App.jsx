import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    // Add the default class to the body
    document.body.classList.add(
      "layout-fixed",
      "sidebar-expand-lg",
      "bg-body-tertiary"
    );

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove(
        "layout-fixed",
        "sidebar-expand-lg",
        "bg-body-tertiary"
      );
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedin ? <h1>Welcome to the Protected Page!</h1> : <Login />
            }
          />
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
