import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { email, productName, quantity, paid, _id, status } = order;
    const [updateStatus, setUpdateStatus] = useState("");

    const handleStatus = (e) => {
        const value = e.target.value;
        setUpdateStatus(value);
    }

    const handleUpdate = () => {
        const newStatus = {
            status: updateStatus
        }
        fetch(`https://powertrain.onrender.com/status/${_id}`, {
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
            <th className='border-[1px]'>{index + 1}</th>
            <td className='border-[1px]'>{email}</td>
            <td className='border-[1px]'>{productName}</td>
            <td className='border-[1px]'>{quantity}</td>
            <td className='border-[1px]'>
                {
                    paid ? "paid" : "unpaid"
                }
            </td>
            <td className='border-[1px]'>
                <select onChange={handleStatus} className="select input-bordered w-full max-w-xs">
                    {
                        status === "Shiped" ? <><option value={status}>{status}</option>
                            <option value="Processing">Processing</option></> :
                            <>
                                <option value="Processing">Processing</option>
                                <option value="Shiped">Shiped</option>
                            </>
                    }
                    {/* {
                        !status ? <option value="Processing">Processing</option> :
                            <option value="Shiped">Shiped</option>
                    } */}
                </select>
            </td>
            <td className='border-[1px]'>
                {
                    paid ? <><label htmlFor="delete-confirm-modal" className="btn btn-xs btn-disabled mb-2">Delete</label><br /></> :
                        <><label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error mb-2">Delete</label><br /></>
                }
                <label onClick={handleUpdate} htmlFor="delete-confirm-modal" className="btn btn-xs btn-secondary">Update</label>
                <ToastContainer />
            </td>
        </tr>
    );
};

export default OrderRow;