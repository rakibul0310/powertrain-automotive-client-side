import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import MakeAdminModal from './MakeAdminModal';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [makingAdmin, setMakingAdmin] = useState(null);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/getuser', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h2 className="text-2xl text-center my-5">Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
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