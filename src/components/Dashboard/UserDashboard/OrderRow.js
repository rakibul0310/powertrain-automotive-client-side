import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity, _id, paid, status, transactionId } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                {
                    transactionId ? transactionId : "--"
                }
            </td>
            <td>
                {
                    status ? status : "processing"
                }
            </td>
            <td>
                {
                    !paid ? <><label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mb-2">Cancle</label><br /></> :
                        <><label htmlFor="delete-confirm-modal" className="btn btn-xs btn-disabled mb-2">Cancle</label><br /></>
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