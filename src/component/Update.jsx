import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const Update = () => {
  const { id } = useParams(); // Get the campaign ID from the URL
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    deadline: '',
    minDonation: '',
    description: '',
  });

  useEffect(() => {
    const user = auth.currentUser;

    // Redirect to login if user is not logged in
    if (!user) {
      navigate('/login');
      return;
    }

    // Fetch campaign details for updating
    fetch(`http://localhost:5000/campaign-details/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaign details');
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
        setFormData({
          title: data.title,
          type: data.type,
          deadline: data.deadline,
          minDonation: data.minDonation,
          description: data.description,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to be updated
    const updatedCampaign = {
      ...formData,
      email: auth.currentUser.email, // Send the current user's email (read-only)
    };

    // Send the updated campaign data to the backend
    fetch(`http://localhost:5000/update-campaign/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'Campaign updated successfully.', 'success');
          navigate(`/campaign-details/${id}`); // Navigate to the updated campaign's details page
        } else {
          Swal.fire('Error!', 'Failed to update the campaign.', 'error');
        }
      })
      .catch((err) => Swal.fire('Error!', `Error: ${err.message}`, 'error'));
  };

  if (loading) {
    return <div className="text-center py-10">Loading campaign details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Campaign</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold text-gray-700">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-bold text-gray-700">
            Campaign Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-bold text-gray-700">
            Campaign Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Minimum Donation */}
        <div className="mb-4">
          <label htmlFor="minDonation" className="block text-sm font-bold text-gray-700">
            Minimum Donation
          </label>
          <input
            type="number"
            id="minDonation"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold text-gray-700">
            Campaign Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* User Info (read-only) */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">
            User Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={auth.currentUser.email}
            readOnly
            className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-bold text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={auth.currentUser.displayName}
            readOnly
            className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Update Campaign
        </button>
      </form>
    </div>
  );
};

export default Update;
