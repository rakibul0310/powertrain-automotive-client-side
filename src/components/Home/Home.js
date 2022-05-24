import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';
import Business from './Business/Business';
import Reviews from './Reviews/Reviews';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    const [parts, setParts] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("parts.json")
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);

    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className=''>
            <TopBanner />
            <div>
                <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-9'>Parts</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-6 my-12 gap-4'>
                    {
                        parts.map(part => <Parts part={part}></Parts>)
                    }
                </div>
            </div>
            <Business />
            <div className='flex flex-col justify-center items-center mb-9'>
                <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-9'>Reviews({reviews.length})</h1>
                <div className='w-full md:w-1/2 carousel'>
                    {
                        reviews.map((reviewItem, index) => <Reviews itemIndex={index} reviewItem={reviewItem} length={reviews.length}></Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;