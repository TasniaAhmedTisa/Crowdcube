import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { useEffect, useState } from 'react';

const MyCamp = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(''); // Error state for any fetching issues

  useEffect(() => {
    const user = auth.currentUser;

    // Check if the user is logged in, otherwise redirect to login page
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch the campaigns that belong to the logged-in user (based on the user's email)
    fetch(`http://localhost:5000/my-campaigns?email=${user.email}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaigns');
        return res.json();
      })
      .then((data) => {
        setCampaigns(data); // Set campaigns state with the fetched data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Set error if there is an issue
        setLoading(false); // Stop loading if there is an error
      });
  }, [navigate]);

  if (loading) {
    return <div className="text-center py-10">Loading your campaigns...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>; // Display error message if there's any
  }

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this campaign?');
    if (confirmDelete) {
      fetch(`http://localhost:5000/delete-campaign/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Campaign deleted successfully!');
            setCampaigns(campaigns.filter((campaign) => campaign._id !== id)); // Update UI by removing deleted campaign
          } else {
            alert('Failed to delete campaign');
          }
        })
        .catch((err) => alert('Error deleting campaign: ' + err));
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-campaign/${id}`); // Navigate to the update campaign page
  };

  return (
    <div className="bg-gradient-to-t from-cyan-600 w-11/12 mx-auto min-h-screen mb-10">
      <h1 className="text-3xl font-bold text-center py-10">My Campaigns</h1>

      {campaigns.length === 0 ? (
        <p className="text-center">You have not added any campaigns yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Minimum Donation</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td className="border px-4 py-2">
                  <img src={campaign.image} alt={campaign.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="border px-4 py-2">{campaign.title}</td>
                <td className="border px-4 py-2">{campaign.type}</td>
                <td className="border px-4 py-2">{campaign.deadline}</td>
                <td className="border px-4 py-2">{campaign.minDonation}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleUpdate(campaign._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(campaign._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCamp;
