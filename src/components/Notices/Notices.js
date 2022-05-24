import React from 'react';
import { Link } from 'react-router-dom';

const Notices = () => {
    return (
        <div className='my-9 px-3 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold text-primary underline decoration-secondary text-center my-5'>Notices</h1>
            <div className="overflow-x-auto w-full md:w-1/2">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <th className='text-center text-gray-400 font-light'>May 24, 2022</th>
                            <td className='text-left text-red-500 underline'><Link to="/">May/June Production Suspension and June Production Plan</Link></td>
                        </tr>
                        <tr>
                            <th className='text-center text-gray-400 font-light'>May 10, 2022</th>
                            <td className='text-left text-red-500 underline'><Link to="/">Adjustments to Domestic Production in May</Link></td>
                        </tr>
                        <tr>
                            <th className='text-center text-gray-400 font-light'>Apr. 18, 2022</th>
                            <td className='text-left text-red-500 underline'><Link to="/">May Production Plan</Link></td>
                        </tr>
                        <tr>
                            <th className='text-center text-gray-400 font-light'>Mar. 22, 2022</th>
                            <td className='text-left text-red-500 underline'><Link to="/">Adjustments to Domestic Production in March (as of March 22)</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notices;