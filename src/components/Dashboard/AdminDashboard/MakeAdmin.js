import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MakeAdminModal from './MakeAdminModal';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [makingAdmin, setMakingAdmin] = useState(null);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://sheltered-wave-82643.herokuapp.com/getuser', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full px-10'>
            <h2 className="text-2xl text-center my-5">Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto table-compact w-full">
                    <thead className='bg-secondary'>
                        <tr>
                            <th></th>
                            <th className='border-b-[1px]'>Email</th>
                            <th className='border-b-[1px]'>Role</th>
                            <th className='border-b-[1px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                makingAdmin={makingAdmin}
                                setMakingAdmin={setMakingAdmin}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {makingAdmin && <MakeAdminModal
                makingAdmin={makingAdmin}
                refetch={refetch}
                setMakingAdmin={setMakingAdmin}
            ></MakeAdminModal>}
        </div>
    );
};

export default MakeAdmin;