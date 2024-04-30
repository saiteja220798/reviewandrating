import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './businessdashboard.css';

const BusinessDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState('');


const getTokenFromLocalStorage = () => {
  // Retrieve the token from local storage
  const token = localStorage.getItem('token');
  return token;
};

  


  useEffect(() => {
    // Fetch notifications when component mounts
    fetchNotifications();
  }, []);

  // Function to fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-ratings-reviews');
      setNotifications(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Function to handle reply submission
  // Function to handle reply submission
const handleReplySubmit = async (reviewId, reply) => {
    try {
      const token = getTokenFromLocalStorage(); // Retrieve JWT token from local storage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      await axios.post(`http://localhost:5000/submit-reply/${reviewId}`, { reply }, config);
      // Refresh notifications after submitting reply
      fetchNotifications();
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };
  
  
  return (
    <div>
      <header className="header">
        {/* Header code */}
      </header>
      <div className="notifications-container">
        <h2>Notifications</h2>
        {loading ? (
          <p>Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          <ul className='lists'>
            {notifications.map((notification, index) => (
              <li key={index} className="notification-item">
                <strong>User:</strong> {notification.userName}, <strong>Rating:</strong> {notification.rating},{' '}
                <strong>Review:</strong> {notification.review}
                {/* Display reply input and submit button */}
                {notification.reply ? (
                  <p><strong>Reply:</strong> {notification.reply}</p>
                ) : (
                  <div>
                    <input type="text" placeholder="Reply" onChange={(e) => setReply(e.target.value)} />
                    <button onClick={() => handleReplySubmit(notification._id, reply)}>Submit</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BusinessDashboard;
