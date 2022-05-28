import React from 'react';
import profile from '../../images/profile-pic.png';

const MyPortfolio = () => {
    return (
        <div className='px-3 py-7 flex justify-center items-center min-h-screen'>
            <div className="card flex justify-center items-center min-h-screen bg-[#ecebe8] w-full md:w-3/4 shadow-xl">
                <figure className='flex flex-col justify-center items-center p-6'>
                    <img src={profile} alt="Album" />
                    <h2 className='mt-7'>Name: Md. Rakibul Hasan</h2>
                    <p>Email: rakibul2180@gmail.com</p>
                    <p>Education: B.Sc in CSE from Daffodil International Univarsity</p>
                    <div>
                        <p className='mt-5 mb-1'>Skills: <br />
                        </p>
                        <ul>
                            <li>1. HTML</li>
                            <li>2. CSS (Bootstrap, Tailwind css)</li>
                            <li>3. Javascript</li>
                            <li>4. React JS</li>
                            <li>5. Node JS</li>
                            <li>6. MongoDB</li>
                        </ul>
                        <p className='mt-5 mb-1'>Recent projects:</p>
                        <ul>
                            <li className='flex flex-col'>
                                <a className='text-blue-500 underline decoration-blue-500' href="https://book-inventory-21052.web.app/" target="_blank" rel='noreferrer' >1. Inventory Management</a>
                                <a className='text-blue-500 underline decoration-blue-500' href="https://dental-care-bc7b9.web.app/" target="_blank" rel='noreferrer' >2. Service Provider</a>
                                <a className='text-blue-500 underline decoration-blue-500' href="https://incandescent-rugelach-89e11f.netlify.app/" target="_blank" rel='noreferrer' >3. Random Pets</a>
                            </li>
                        </ul>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default MyPortfolio;