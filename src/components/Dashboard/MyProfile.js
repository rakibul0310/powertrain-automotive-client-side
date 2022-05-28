import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const MyProfile = () => {
    const [mobile, setMobile] = useState("");
    const [education, setEducation] = useState("");
    const [address, setAddress] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [update, setUpdate] = useState(false);
    const [user] = useAuthState(auth);
    const { data: profile, isLoading } = useQuery('profile', () => fetch(`https://sheltered-wave-82643.herokuapp.com/getprofile?email=${user.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const handleMobile = (e) => {
        const value = e.target.value;
        setMobile(value);
    }
    const handleEducation = (e) => {
        const value = e.target.value;
        setEducation(value);
    }
    const handleAddress = (e) => {
        const value = e.target.value;
        setAddress(value);
    }
    const handleLinkedin = (e) => {
        const value = e.target.value;
        setLinkedin(value);
    }

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const newProfile = {
            name: user.displayName,
            email: user.email,
            photoURL: "https://i.ibb.co/HYsFTYc/User-Profile-PNG-Image.png",
            mobile: mobile,
            education: education,
            address: address,
            linkedin: linkedin
        }
        const url = `https://sheltered-wave-82643.herokuapp.com/updateprofile/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newProfile),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUpdate(true);
                    toast.success("Update successfully!")
                    e.target.reset();
                }
                else {
                    toast.error("something wrong. Try again!");
                }
                console.log(data)
            })
    }

    return (
        <div className='py-9 px-3 w-3/4 flex justify-center items-center'>
            <div className="card lg:card-side bg-[#ecebe8] w-full shadow-xl">
                <figure className='flex flex-col justify-center items-center p-6 w-full md:w-1/2'>
                    <img src={profile.photoURL} alt="Album" />
                    <div>
                        <h2>Name: {profile.name}</h2>
                        <p>Email: {profile.email}</p>
                        {
                            update ? <>
                                <p>Mobile: {mobile}</p>
                                <p>Education: {education}</p>
                                <p>Address: {address}</p>
                                <p>Linkedin: {linkedin}</p>
                            </> : <>
                                <p>Mobile: {profile.mobile}</p>
                                <p>Education: {profile.education}</p>
                                <p>Address: {profile.address}</p>
                                <p>Linkedin: {profile.linkedin}</p>
                            </>
                        }
                    </div>
                </figure>
                <div className="card-body">
                    <form onSubmit={handleUpdateInfo} className='form-control justify-start items-start text-left w-full' >
                        <h2 className='text-center text-secondary text-xl font-bold'>Edit Profile <FontAwesomeIcon icon={faEdit} /></h2>
                        <label htmlFor="mobile" className='mb-2 font-medium'>Mobile</label>
                        <input onBlur={handleMobile} className='input input-bordered input-success w-full max-w-xs' type="number" id='mobile' name='mobile' required />

                        <label htmlFor="education" className='mb-2 font-medium'>Education</label>
                        <input onBlur={handleEducation} className='input input-bordered input-success w-full max-w-xs' type="text" id='education' name='education' required />

                        <label htmlFor="address" className='mb-2 font-medium'>Address</label>
                        <textarea onBlur={handleAddress} name="address" id="address" className='textarea textarea-success w-full max-w-xs' cols="30" rows="3"></textarea>

                        <label htmlFor="linkedin" className='mb-2 font-medium'>Linkedin</label>
                        <input onBlur={handleLinkedin} className='input input-bordered input-success w-full max-w-xs' type="text" id='linkedin' name='linkedin' required />
                        <div className="card-actions justify-start mt-3">
                            <input className="btn btn-secondary" type='submit' value='Update Info' />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;