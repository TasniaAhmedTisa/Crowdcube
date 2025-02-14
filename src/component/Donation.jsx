import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';

const Donation = () => {
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const user = auth.currentUser;

    // Redirect to login page if the user is not logged in
    if (!user) {
      navigate('/login');
      return;
    }

    fetch(`http://localhost:5000/my-donations?email=${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch donations');
        return res.json();
      })
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-10">Loading your donations...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gradient-to-t from-cyan-600 w-11/12 mx-auto min-h-screen mb-10 p-5">
      <h1 className="text-3xl font-bold text-center py-10">My Donations</h1>

      {donations.length === 0 ? (
        <p className="text-center text-white">You have not donated to any campaigns yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Ensure campaignDetails exists before accessing properties */}
              <img
                src={donation.campaignDetails ? donation.campaignDetails.image : 'https://via.placeholder.com/150'}
                alt={donation.campaignDetails ? donation.campaignDetails.title : 'Campaign Image'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{donation.campaignDetails ? donation.campaignDetails.title : ' Title'}</h2>
                <p className="text-sm text-gray-600">{donation.campaignDetails ? donation.campaignDetails.type : ' Type'}</p>
                <p className="text-sm text-gray-800">{donation.campaignDetails ? donation.campaignDetails.description : ' Description'}</p>
                <p className="text-sm text-gray-600">
                  Deadline:{' '}
                  {donation.campaignDetails && donation.campaignDetails.deadline
                    ? new Date(donation.campaignDetails.deadline).toLocaleDateString()
                    : ' Deadline'}
                </p>
                <p className="text-sm text-gray-600">
                  Minimum Donation: ${donation.campaignDetails ? donation.campaignDetails.minDonation : '0'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
