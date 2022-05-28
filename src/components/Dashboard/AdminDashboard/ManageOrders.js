import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfrimModal from '../AdminDashboard/DeleteConfrimModal';
import OrderRow from './OrderRow';

const ManageOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://sheltered-wave-82643.herokuapp.com/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <h2 className="text-2xl text-center my-5">Manage Orders: {orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
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

export default ManageOrders;