import React, { useState, useEffect } from 'react';
import './auth.style.css';
import { useNavigate } from 'react-router-dom';
import  data from '../constant/constant_Items'
const Signup = ({ setUserWantToSignup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
const navigate=useNavigate()
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetails) {
      setFirstName(userDetails.firstName);
      setLastName(userDetails.lastName);
      setEmail(userDetails.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    if (!data.emailrgx.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);  
      return;
    }

    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

      setLoading(false);  
      alert('Sign Up Successful');
    navigate('/products')
  };

  return (
    <div className="auth-form">
      <span>START FOR FREE</span>
      <h1>Create new account</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-inputs">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
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
        <div className="name-input">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        
        <div className="submit-btn-wrapper">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <span>Loading...</span> 
            ) : (
              'Sign Up'
            )}
          </button>
          <p>
        <span>Already a member?{' '}</span>
        <span onClick={() => setUserWantToSignup(false)} style={{color:"blue", cursor:"pointer"}}>Login</span>
      </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
