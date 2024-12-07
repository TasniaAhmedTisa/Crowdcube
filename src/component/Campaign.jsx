import { NavLink, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Campaign = () => {
    const loadedCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loadedCampaigns);

    const sortCampaigns = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => a.minDonation - b.minDonation);
        setCampaigns(sortedCampaigns);
    };

    return (
        <div>
            <h1 className='font-bold text-center text-3xl py-4'>All Campaign</h1>
            <div className="mb-4 flex justify-end">
                <button className="btn"  onClick={sortCampaigns}>
                    Sort by Minimum Donation
                </button>
            </div>

            {/* Campaign Table */}
            <table className="table">
                <thead>
                    <tr className='font-bold text-black text-lg'>
                        <th></th>
                        <th>Title</th>
                        <th>Minimum Donation</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => (
                        <tr key={campaign.id || index}>
                            <td>{index + 1}</td>
                            <td>{campaign.title}</td>
                            <td>{campaign.minDonation}</td>
                            <td>
                                <button className="btn"> <NavLink to={`/campaign-details/${campaign._id}`}>See More</NavLink></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Campaign;
