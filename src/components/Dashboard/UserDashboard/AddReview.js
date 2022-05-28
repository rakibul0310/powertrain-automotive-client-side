import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const handleReview = (e) => {
        const value = e.target.value;
        setReview(value);
    }
    const handleRating = (e) => {
        const value = e.target.value;
        setRating(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(rating) > 5) {
            toast.error("Rating should be out of 5");
            return
        }

        const newReview = {
            name: user.displayName,
            img: "https://i.ibb.co/HYsFTYc/User-Profile-PNG-Image.png",
            review: review,
            rating: rating
        }

        fetch('https://sheltered-wave-82643.herokuapp.com/reviews', {
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
                    toast.success('Review added successfully')
                    e.target.reset();
                }
                else {
                    toast.error('Failed to add the Review');
                }
            })

        console.log(newReview)

    }

    return (
        <div>
            <h2 className='text-xl font-medium my-7 text-center'>Add a review</h2>
            <form className='form-control justify-center items-center text-left w-full' onSubmit={handleSubmit} >
                <input className='input input-bordered input-success w-full max-w-xs my-3' type="text" id='name' name='name' placeholder='Mr. Jhon' required value={user.displayName} disabled />
                <input onBlur={handleRating} className='input input-bordered input-success w-full max-w-xs my-3' type="number" id='rating' name='rating' placeholder='Your rating out of 5' required />
                <textarea onBlur={handleReview} name="textarea" className="textarea textarea-success w-full max-w-xs" id="" cols="30" rows="10" placeholder='Your comment..'></textarea>
                <input className='btn btn-secondary mt-3 w-full max-w-xs text-base-100' type="submit" value="POST" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;