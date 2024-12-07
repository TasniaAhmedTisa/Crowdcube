import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Extra from './Extra';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/running-campaigns')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  const handleSeeMore = (id) => {
    navigate(`/campaign-details/${id}`); // Redirect to the details page
  };
    return (
        <div>
            
            <Banner></Banner>
            <div className="w-11/12 mx-auto m-10 bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center py-10">Running Campaign</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white shadow-md p-4 rounded-md flex flex-col justify-between"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{campaign.title}</h2>
              <p className="text-gray-600">{campaign.description.slice(0, 100)}...</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-blue-500 font-bold">${campaign.minDonation} Min Donation</p>
                <p className='font-bold'>Deadline: {campaign.formattedDeadline}</p>

            
              </div>
              <div className='flex justify-end py-4'>
              <button
                  onClick={() => handleSeeMore(campaign._id)}
                  className="bg-slate-800 text-white px-3 py-1 rounded btn-outline btn-md w-40 font-bold"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

            <Extra></Extra>
            
        </div>
    );
};

export default Home;