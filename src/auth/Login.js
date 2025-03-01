import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.style.css';

const Login = ({ setUserWantToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('userDetails'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log('Login successful');
      navigate('/products'); 
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="name-input password-container">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
           
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p className="signup-link" onClick={() => setUserWantToSignup(true)}>
        Don't have an account? <span style={{color:"blue", cursor:"pointer"}}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
