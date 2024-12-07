import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
        const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/campaign-details/${id}`)
      .then((res) => res.json())
      .then((data) => setCampaign(data))
      .catch((err) => console.error('Error fetching campaign details:', err));
  }, [id]);

  if (!campaign) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <img
        src={campaign.image}
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
    </div>
  );
};
    

export default Details;