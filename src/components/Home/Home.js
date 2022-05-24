import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch("parts.json")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
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
        </div>
    );
};

export default Home;