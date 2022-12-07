import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DeleteConfrimModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { productName, email } = deletingOrder;
    const handleDelete = () => {
        fetch(`https://powertrain.onrender.com/order/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order: ${productName} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold py-4 text-lg text-red-500">{`Are you sure you want to delete  ${productName}!`}</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default DeleteConfrimModal;