import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic
    console.log("Login attempted with:", { email, password });
    navigate('/dashboard'); // Replace '/dashboard' with the route you want to navigate to after successful login
  };

  // use effect to add classes to the body element when the component mounts
  useEffect(() => {
    // Add classes to the body element
    document.body.classList.add("login-page", "bg-body-secondary");

    // Cleanup function to remove the classes when the component unmounts
    return () => {
      document.body.classList.remove("login-page", "bg-body-secondary");
    };
  }, []);

  return (
    <>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header">
            <a
              href="#"
              className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"
            >
              <h1 className="mb-0">
                AMC<b>ify</b>
              </h1>
            </a>
          </div>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginEmail"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <label htmlFor="loginEmail">Email</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-envelope"></span>
                </div>
              </div>
              <div className="input-group mb-1">
                <div className="form-floating">
                  <input
                    id="loginPassword"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <label htmlFor="loginPassword">Password</label>
                </div>
                <div className="input-group-text">
                  <span className="bi bi-lock-fill"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-8 d-inline-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;