import React, { useEffect, useState } from 'react';
import InvestorRelations from '../InvestorRelations/InvestorRelations';
import Notices from '../Notices/Notices';
import Technologies from '../Technologies/Technologies';
import Business from './Business/Business';
import Reviews from './Reviews/Reviews';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className=''>
            <TopBanner />
            <Technologies />
            <Business />
            <div className='flex flex-col justify-center items-center mb-9'>
                <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-9'>Reviews({reviews.length})</h1>
                <div className='w-full md:w-1/2 carousel'>
                    {
                        reviews.map((reviewItem, index) => <Reviews key={reviewItem._id} itemIndex={index} reviewItem={reviewItem} length={reviews.length}></Reviews>)
                    }
                </div>
            </div>
            <InvestorRelations />
            <Notices />
        </div>
    );
};

export default Home;