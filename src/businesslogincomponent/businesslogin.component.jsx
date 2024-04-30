import React, { useState } from 'react';
import axios from 'axios';
 // Import the CSS file with shared styles

const BusinessLoginComponent = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/business/login', formData);
      console.log(response.data);
      // Redirect to business dashboard upon successful login
      if (response.status === 200) {
        // Assuming '/business/dashboard' is the URL of the dashboard page
        window.location.href = '/business/dashboard';
      }
    } catch (error) {
      console.error('Business login error:', error.response); // Log the error response
      setError('Invalid email or password');
    }
  };
  
  

  return (
    <div className="login-modal"> {/* Apply shared modal styles */}
      <div className="login-form"> {/* Apply shared form styles */}
        <h1>Business Login</h1>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className='form-group'> {/* Apply shared form-group styles */}
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>
          <div className='form-group'> {/* Apply shared form-group styles */}
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <button type="submit" className="login-button">Login</button> {/* Apply shared login-button style */}
        </form>
      </div>
    </div>
  );
};

export default BusinessLoginComponent;
