import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity, _id, paid, status, transactionId } = order;

    return (
        <tr>
            <th className='border-[1px]'>{index + 1}</th>
            <td className='border-[1px]'>{email}</td>
            <td className='border-[1px]'>{productName}</td>
            <td className='border-[1px]'>{quantity}</td>
            <td className='border-[1px]'>
                {
                    transactionId ? transactionId : "--"
                }
            </td>
            <td className='border-[1px]'>
                {
                    status ? status : "processing"
                }
            </td>
            <td className='border-[1px]'>
                {
                    !paid ? <><label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mb-2">Cancel</label><br /></> :
                        <><label htmlFor="delete-confirm-modal" className="btn btn-xs btn-disabled mb-2">Cancel</label><br /></>
                }
                {
                    paid ? <button className='btn btn-disabled btn-xs'>paid</button> :
                        <Link to={`/payment/${_id}`}><button className="btn btn-xs btn-secondary">Pay</button></Link>
                }
            </td>
        </tr>
    );
};

export default OrderRow;