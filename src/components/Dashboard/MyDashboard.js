import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyDashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="flex flex-col items-center">
            <h2 className='text-3xl md:text-5xl font-bold text-primary mt-7'>Hey! {user.displayName}</h2>
            <h2 className='text-xl md:text-3xl font-bold text-secondary mt-3'>Welcome to your Dashboard</h2>
        </div>
    );
};

export default MyDashboard;