import React, { useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const NewCamp = () => {
  // You can replace these with actual user data from your app context or backend
  const userEmail = "user@example.com";
  const userName = "Tasnia Ahmed";
  const navigate = useNavigate()

    useEffect(() => {
        if (!auth.currentUser) {
          navigate("/login"); 
        }
     })

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: '',
    description: '',
    minDonation: '',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission (e.g., send formData to your backend)
    console.log(formData);
    fetch('http://localhost:5000/addcampaign',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert("Campaign added successfully")
        form.reset()
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Campaign</h1>
      <form onSubmit={handleSubmit}>
        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700">Image/Thumbnail URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Campaign Type</option>
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        {/* Minimum Donation Amount */}
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* User Email (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            name="email"
            value={userEmail}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* User Name (Read Only) */}
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="username"
            value={userName}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Add Campaign
        </button>
      </form>
    </div>
  );
};

export default NewCamp;
