import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const handleReview = (e) => {
        const value = e.target.value;
        setReview(value);
    }
    const handleRating = (e) => {
        const value = parseInt(e.target.value);
        setRating(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            name: name,
            img: "https://i.ibb.co/HYsFTYc/User-Profile-PNG-Image.png",
            review: review,
            rating: rating
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Parts added successfully')
                    e.target.reset();
                }
                else {
                    toast.error('Failed to add the parts');
                }
            })

    }

    return (
        <div>
            <h2 className='text-xl font-medium my-7 text-center'>Add a review</h2>
            <form className='form-control justify-center items-center text-left w-full' onSubmit={handleSubmit} >
                <input onBlur={handleName} className='input input-bordered input-success w-full max-w-xs my-3' type="text" id='name' name='name' placeholder='Mr. Jhon' required value={user.displayName} disabled />
                <input onBlur={handleReview} className='input input-bordered input-success w-full max-w-xs my-3' type="number" id='rating' name='rating' placeholder='Your rating out of 5' required />
                <textarea onBlur={handleRating} name="textarea" className="textarea textarea-success w-full max-w-xs" id="" cols="30" rows="10" placeholder='Your comment..'></textarea>
                <input className='btn btn-secondary mt-3 w-full max-w-xs text-base-100' type="submit" value="POST" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;