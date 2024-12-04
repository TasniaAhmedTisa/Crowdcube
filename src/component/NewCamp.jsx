import React from 'react';

const NewCamp = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto mt-10 bg-white p-8 shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Campaign</h1>
      <form>
        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700">Image/Thumbnail URL</label>
          <input
            type="url"
            name="image"
            //value={formData.image}
            //onChange={handleChange}
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
            //value={formData.title}
            //onChange={handleChange}
            required
            className="w-full p-2 border rounded"
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
    </div>
        
    );
};

export default NewCamp;