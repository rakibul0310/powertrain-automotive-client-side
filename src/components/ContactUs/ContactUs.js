import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const handleContact = (e) => {
        e.preventDefault();
        toast.success("Successfully Sent!");
        e.target.reset();
    }
    return (
        <div className='flex flex-col justify-center items-center mt-10 mb-14'>
            <h2 className='text-4xl font-bold underline decoration-secondary'>Contact With Us</h2>
            <form onSubmit={handleContact} className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5 text-left' htmlFor="name">Name</label>
                <input className='h-10 pl-3 outline-primary border-[1px] border-gray-200' type="text" name="name" id="name" placeholder='Enter your full name' required />
                <label className='text-lg mt-3 text-left' htmlFor="email">Email</label>
                <input className='h-10 pl-3 outline-primary border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3 text-left' htmlFor="subject">Subject</label>
                <input className='h-10 pl-3 outline-primary border-[1px] border-gray-200' type="text" name="subject" id="subject" placeholder='Subject' required />
                <label className='text-lg mt-3 text-left' htmlFor="details">Details</label>
                <textarea className='outline-primary border-[1px] border-[#EBEBEB]' name="details" id="details" cols="30" rows="10" placeholder='say something' required></textarea>
                <input className='my-5 px-6 py-1 bg-secondary text-white text-lg font-semibold cursor-pointer' type="submit" value="Send" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;