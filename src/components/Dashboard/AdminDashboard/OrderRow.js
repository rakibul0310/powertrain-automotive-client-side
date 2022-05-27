import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity, paid, _id } = order;
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        const value = e.target.value;
        setStatus(value);
    }

    const handleUpdate = () => {
        const newStatus = {
            status: status
        }
        fetch(`http://localhost:5000/status/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newStatus)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Update Successfully");
            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>
                {
                    paid ? "paid" : "unpaid"
                }
            </td>
            <td>
                <select onChange={handleStatus} class="select input-bordered w-full max-w-xs">
                    <option value="Processing">Processing</option>
                    <option value="Shiped">Shiped</option>
                </select>
            </td>
            <td>
                <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mb-2">Delete</label><br />
                <label onClick={handleUpdate} htmlFor="delete-confirm-modal" className="btn btn-xs btn-secondary">Update</label>
            </td>
            <ToastContainer />
        </tr>
    );
};

export default OrderRow;