// BusinessSignupComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const BusinessSignupComponent = ({ history }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/business/signup', formData);
      console.log(response.data);
      if (response.status === 201) {
        setSuccessMessage('Signup successful! Please login.');
        // Clear form fields
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Business signup error:', error);
      setError('Failed to signup. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Business Signup</h2>
      {successMessage && <div>{successMessage}</div>}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default BusinessSignupComponent;
