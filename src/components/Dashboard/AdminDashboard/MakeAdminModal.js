import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MakeAdminModal = ({ makingAdmin, refetch, setMakingAdmin }) => {
    const { name, _id } = makingAdmin;
    const handleDelete = () => {
        const role = {
            role: 'admin'
        }
        fetch(`https://powertrain.onrender.com/makeadmin/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(role),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Order: ${name} is deleted.`)
                    setMakingAdmin(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold py-4 text-lg text-red-500">{`Are you sure you want to make admin  ${name}!`}</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Confrim</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div >
    );
};

export default MakeAdminModal;