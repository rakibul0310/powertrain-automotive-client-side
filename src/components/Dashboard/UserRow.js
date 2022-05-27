import React from 'react';

const UserRow = ({ user, index, refetch, setMakingAdmin }) => {
    const { name, email, role } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            {
                role ? <td>{role}</td> : <td>user</td>
            }
            <td>
                {
                    role ? <button className='btn btn-xs btn-disabled'>Make admin</button> :
                        <label onClick={() => setMakingAdmin(user)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Make admin</label>
                }
            </td>
        </tr>
    );
};

export default UserRow;