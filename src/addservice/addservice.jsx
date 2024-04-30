import React, { useState } from 'react';
import axios from 'axios';
//import Dropzone from 'react-dropzone';
import "./addservice.css"

export function AddService() {
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    countryCode: '+1',
    mobileNumber: '',
    image: null
  });

  // Define handleInputChange function
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Define handleImageDrop function
//   const handleImageDrop = (acceptedFiles) => {
//     setFormData({
//       ...formData,
//       image: acceptedFiles[0]
//     });
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('businessName', formData.businessName);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('countryCode', formData.countryCode);
      formDataToSend.append('mobileNumber', formData.mobileNumber);
      formDataToSend.append('image', formData.image);

      const token = localStorage.getItem('token');

      await axios.post('http://localhost:5000/add-service', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setFormData({
        businessName: '',
        address: '',
        countryCode: '+1',
        mobileNumber: '',
        image: null
      });
      alert('Service added successfully!');
    } catch (error) {
      console.error('Error adding service:', error);
      alert('An error occurred while adding the service. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Your Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="businessName">Business Name:</label>
          <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange} required />
        </div>

        {/* <div className="form-group">
          <label>Upload Image:</label>
          <Dropzone onDrop={handleImageDrop} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag 'n' drop an image here, or click to select image</p>
              </div>
            )}
          </Dropzone>
          {formData.image && (
            <img src={URL.createObjectURL(formData.image)} alt="Uploaded" className="image-preview" />
          )}
        </div> */}

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="countryCode">Country Code:</label>
          <select id="countryCode" name="countryCode" value={formData.countryCode} onChange={handleInputChange} required>
            <option value="+1">United States (+1)</option>
            {/* Add more options for other countries */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} pattern="[0-9]{10,15}" required />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
