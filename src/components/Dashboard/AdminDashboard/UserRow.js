import React from 'react';

const UserRow = ({ user, index, refetch, setMakingAdmin }) => {
    const { email, role } = user;
    return (
        <tr>
            <th className='border-[1px]'>{index + 1}</th>
            <td className='border-[1px]'>{email}</td>
            {
                role ? <td className='border-[1px]'>{role}</td> : <td className='border-[1px]'>user</td>
            }
            <td className='border-[1px]'>
                {
                    role ? <button className='btn btn-xs btn-disabled'>Make admin</button> :
                        <label onClick={() => setMakingAdmin(user)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Make admin</label>
                }
            </td>
        </tr>
    );
};

export default UserRow;