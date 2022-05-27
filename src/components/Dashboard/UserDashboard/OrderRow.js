import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity, _id } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label><br />
                <Link to={`/payment/${_id}`}><button className="btn btn-xs btn-error">Pay</button></Link>
            </td>
        </tr>
    );
};

export default OrderRow;