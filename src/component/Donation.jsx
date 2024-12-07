import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';

const Donation = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.currentUser) {
          navigate("/login"); 
        }
     })
    return (
        <div className='bg-gradient-to-t from-cyan-600 w-11/12 mx-auto min-h-screen mb-10'>
        <h1 className='text-3xl font-bold text-center py-10'>My Donation</h1>
        <div>

        </div>
    </div>
    );
};

export default Donation;