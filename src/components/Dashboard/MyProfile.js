import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: profile, isLoading } = useQuery('profile', () => fetch(`http://localhost:5000/getprofile?email=${user.email}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-9 px-3 w-3/4 flex justify-center items-center'>
            <div className="card lg:card-side bg-[#ecebe8] w-full shadow-xl">
                <figure className='flex flex-col justify-center items-center p-6 w-full md:w-1/2'>
                    <img src={profile.img} alt="Album" />
                    <div>
                        <h2>Name: {profile.name}</h2>
                        <p>Email: {profile.email}</p>
                    </div>
                </figure>
                <div className="card-body">
                    <form className='form-control justify-start items-start text-left w-full' >
                        <label htmlFor="address" className='mb-2 font-medium'>Address</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="text" id='address' name='address' />

                        <label htmlFor="mobile" className='mb-2 font-medium'>Mobile</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="number" id='mobile' name='mobile' />

                        <label htmlFor="pother" className='mb-2 font-medium'>Others</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="text" id='other' name='other' />

                        <label htmlFor="quantity" className='mb-2 font-medium'>Quantity</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="number" id='quantity' name='quantity' required />
                    </form>
                    <div className="card-actions justify-start mt-3">
                        <button className="btn btn-primary">Update Info</button>

                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;