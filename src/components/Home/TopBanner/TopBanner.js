import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="hero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">"PRICE IS WHAT YOU PAY"</h1>
                    <p className="mb-5 text-5xl font-bold text-secondary">"VALUE IS WHAT YOU GET"</p>
                    <button className="btn btn-primary text-base-100">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;