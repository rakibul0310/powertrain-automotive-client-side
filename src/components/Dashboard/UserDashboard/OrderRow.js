import React from 'react';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default OrderRow;