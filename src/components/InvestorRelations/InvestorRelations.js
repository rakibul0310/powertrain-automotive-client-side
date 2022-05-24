import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faMessage } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const InvestorRelations = () => {
    return (
        <div className='bg-[#FBFAF8] py-5'>
            <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-5'>Investor Relations</h1>
            <div className='bg-[#FBFAF8] h-[700px] lg:h-[300px] text-xl md:text-2xl text-accent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="flex flex-col justify-center items-center cursor-pointer duration-700 hover:scale-110">
                    <Link to="/anualreport">
                        <div className='text-secondary mb-2 text-center'>
                            <FontAwesomeIcon className='text-6xl' icon={faAddressBook} />
                        </div>
                        <h3>Anual Report</h3>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer duration-700 hover:scale-110">
                    <Link to="/contact">
                        <div className='text-secondary text-center mb-2'>
                            <FontAwesomeIcon className='text-6xl' icon={faAddressCard} />
                        </div>
                        <h3>Contact Info</h3>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center cursor-pointer duration-700 hover:scale-110">
                    <Link to="/">
                        <div className='text-secondary text-center mb-2'>
                            <FontAwesomeIcon className='text-6xl' icon={faMessage} />
                        </div>
                        <h3>Subscribe to Notification</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InvestorRelations;