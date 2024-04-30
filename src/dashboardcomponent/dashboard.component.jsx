import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'dashboard.component.css'

export function DashboardComponent() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const ownerId = localStorage.getItem('userId'); // Assuming you store ownerId in localStorage
            const response = await axios.get(`http://localhost:5000/get-notifications/${ownerId}`);
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
}
