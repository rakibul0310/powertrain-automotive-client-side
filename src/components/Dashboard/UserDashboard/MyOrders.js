import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfrimModal from './DeleteConfrimModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://sheltered-wave-82643.herokuapp.com/myorder?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-full px-4 md:px-10'>
            <h2 className="text-2xl text-center my-5">My Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto table-compact w-full">
                    <thead className='bg-secondary'>
                        <tr>
                            <th></th>
                            <th className='border-b-[1px]'>Email</th>
                            <th className='border-b-[1px]'>Product</th>
                            <th className='border-b-[1px]'>Quantity</th>
                            <th className='border-b-[1px]'>Status</th>
                            <th className='border-b-[1px]'>Transaction ID</th>
                            <th className='border-b-[1px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                deletingOrder={deletingOrder}
                                setDeletingOrder={setDeletingOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteConfrimModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteConfrimModal>}
        </div>
    );
};

export default MyOrders;