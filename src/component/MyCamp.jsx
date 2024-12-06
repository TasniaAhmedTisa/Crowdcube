import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.config';
import { useEffect } from 'react';

const MyCamp = () => {
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

export default MyCamp;