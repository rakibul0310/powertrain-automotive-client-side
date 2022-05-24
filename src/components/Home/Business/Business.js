import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faHandshake, faUser, faComment } from '@fortawesome/free-regular-svg-icons';

const Business = () => {

    return (
        <div className='bg-primary h-[700px] lg:h-[300px] text-2xl md:text-4xl text-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className="flex flex-col justify-center items-center">
                <div className='text-secondary mb-2'>
                    <FontAwesomeIcon icon={faFlag} />
                </div>
                <CountUp start={68} end={82} delay={0} duration={.8}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} /><span>+</span>
                        </div>
                    )}
                </CountUp>
                <h3>Countries</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className='text-secondary mb-2'>
                    <FontAwesomeIcon icon={faHandshake} />
                </div>
                <CountUp start={68} end={562156} delay={0} duration={.8}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} /><span>+</span>
                        </div>
                    )}
                </CountUp>
                <h3>Complete Orders</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className='text-secondary mb-2'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <CountUp start={68} end={270} delay={0} duration={.8}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} /><span>+</span>
                        </div>
                    )}
                </CountUp>
                <h3>Happy clients</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className='text-secondary mb-2'>
                    <FontAwesomeIcon icon={faComment} />
                </div>
                <CountUp start={68} end={670} delay={0} duration={.8}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} /><span>+</span>
                        </div>
                    )}
                </CountUp>
                <h3>Reviews</h3>
            </div>
        </div>
    );
};

export default Business;