import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Campaign = () => {

    const campaigns = useLoaderData()
    return (
        <div>
            <h1>{campaigns.length}</h1>
        </div>
    );
};

export default Campaign;