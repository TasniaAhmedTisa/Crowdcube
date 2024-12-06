import React from 'react';
import Banner from './Banner';
import Extra from './Extra';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className='w-11/12 mx-auto lg:h-[300px] m-10 bg-gray-100 '>
                <h1 className='text-3xl font-bold text-center py-10'>   
                   Running Campaign
                </h1>
            </div>

            <Extra></Extra>
            
        </div>
    );
};

export default Home;