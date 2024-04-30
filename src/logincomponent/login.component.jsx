import React, { useState } from 'react';
import axios from 'axios';
import './login.component.css'; // Import the CSS file

export function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        const { token, username, userId } = response.data; // Extract user ID from backend response
        
        // Store token and user ID in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId); // Store user ID
        localStorage.setItem('username', username);

      alert('Login successful');
      window.location.href = '/restaurant';
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert('Login failed');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-form">
        <h1>Login</h1>
        <div className='form-group'>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label> </div>
        <br />

        <div className='form-group'>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label> </div>
        <br />
        <button   className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}