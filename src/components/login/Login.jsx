import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // at least 8 characters
    if (password.length < 8) {
      return false;
    }
    
    // at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    //at least one small letter
    if (!/[a-z]/.test(password)) {
      return false;
    }

    //at least one number
    if (!/[0-9]/.test(password)) {
      return false;
    }

    // one special character
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      return false;
    }

    return true;

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      if (email === 'admin@gmail.com' && password === 'Password@1') {
       navigate('/admin')
      } else {
        setError('Invalid email or password');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login">
      <h3>Login into your account</h3>
      <div className="container">
        <form id="login-form">
          <div className="group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <i className="fa fa-envelope"></i>
          </div>
          <div className="group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <i className="fa fa-key"></i>
          </div>
          {error && <p>{error}</p>}
          <div className="btn">
            <button onClick={handleLogin} id="submit" type="submit">
              <i className="fa fa-send"></i> LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
