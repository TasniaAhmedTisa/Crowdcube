import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const user = auth.currentUser;

    // Redirect to login if user is not logged in
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch campaign details
    fetch(`http://localhost:5000/campaign-details/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaign details');
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, navigate]);

  // Handle donation
  const handleDonate = () => {
    const user = auth.currentUser;

    if (!user) {
      navigate('/login');
      return;
    }

    const donation = {
      campaignId: campaign._id,
      campaignTitle: campaign.title,
      userEmail: user.email,
      username: user.displayName,
    };

    fetch('http://localhost:5000/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donation),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to save donation');
        return res.json();
      })
      .then(() => {
        alert('Donation successful!');
      })
      .catch((err) => alert('Error: ' + err.message));
  };

  if (loading) {
    return <div className="text-center py-10">Loading campaign details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!campaign) {
    return (
      <div className="text-center py-10">
        Campaign not found or unavailable.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <img
        src={campaign.image || 'https://via.placeholder.com/400'}
        alt={campaign.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{campaign.title}</h1>
      <p className="text-gray-600 mt-2">{campaign.description}</p>
      <p className="mt-4">
        <strong>Type:</strong> {campaign.type}
      </p>
      <p className="mt-2">
        <strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}
      </p>
      <p className="mt-2">
        <strong>Minimum Donation:</strong> ${campaign.minDonation}
      </p>
      <button
        onClick={handleDonate}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Donate
      </button>
    </div>
  );
};

export default Details;