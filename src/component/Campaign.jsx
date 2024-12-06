import { useLoaderData } from 'react-router-dom';
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
            <div className="mb-4 flex justify-center
            ">
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
                                <button className="btn">See More</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Campaign;
