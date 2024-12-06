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
        <div>
            
        </div>
    );
};

export default Donation;