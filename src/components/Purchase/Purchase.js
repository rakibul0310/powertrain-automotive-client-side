import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [user, loading] = useAuthState(auth);
    const [crossQuantity, setCrossQuantity] = useState(true);
    const [orderQuantity, setOrderQuantity] = useState(12);
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [other, setOther] = useState("");
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    const handleQuantity = (e) => {
        const value = parseInt(e.target.value);
        setOrderQuantity(value);
        if (value < parseInt(item.minOrder) || value > parseInt(item.availableQuantity)) {
            setCrossQuantity(false);
            toast.error(`You can order minimum ${item.minOrder} and maximum ${item.availableQuantity} units`)
        } else {
            setCrossQuantity(true);
        }
    }

    const handleAddress = (e) => {
        const value = e.target.value;
        setAddress(value);
    }
    const handleMobile = (e) => {
        const value = e.target.value;
        setMobile(value);
    }
    const handleOther = (e) => {
        const value = e.target.value;
        setOther(value);
    }

    const handlePlaceOrder = () => {
        const orderItem = {
            email: user.email,
            name: user.displayName,
            productName: item.name,
            address: address,
            mobile: mobile,
            productId: item._id,
            quantity: orderQuantity,
            price: parseInt(item.price) * parseInt(orderQuantity),
            other: other
        }

        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(orderItem),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success("Order placed successfully")

        const updatedItem = {
            name: item.name,
            img: item.img,
            description: item.description,
            features: item.features,
            minOrder: item.minOrder,
            availableQuantity: parseInt(item.availableQuantity) - orderQuantity,
            price: item.price
        }

        const url = `http://localhost:5000/updateparts/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedItem),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='py-9 px-3 flex justify-center items-center'>
            <div className="card lg:card-side bg-[#ecebe8] w-full md:w-3/4 shadow-xl">
                <figure className='flex flex-col justify-center items-center p-6'>
                    <img className='w-fit' src={item.img} alt="Album" />
                    <h2>Name: {item.name}</h2>
                    <p>Min order: {item.minOrder} units</p>
                    <p>Price: ${item.price} /unit</p>
                    <br />
                    <p>Features: <br />
                    </p>
                    <ol className=''>
                        {
                            item?.features?.map((feature, index) => <li key={index}>{feature}</li>)
                        }
                    </ol>
                </figure>
                <div className="card-body w-full lg:w-1/2">
                    <form className='form-control justify-start items-start text-left w-full' >
                        <label htmlFor="email" className='font-medium'>Email</label>
                        <input className='input input-bordered input-success w-full max-w-xs my-3' type="email" id='email' name='email' defaultValue={user.email} disabled />
                        <label htmlFor="name" className='mb-2 font-medium'>Name</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="text" id='name' name='name' defaultValue={user.displayName} disabled />
                        <label htmlFor="address" className='mb-2 font-medium'>Address</label>
                        <input onChange={handleAddress} className='input input-bordered input-success w-full max-w-xs' type="text" id='address' name='address' />
                        <label htmlFor="mobile" className='mb-2 font-medium'>Mobile</label>
                        <input onChange={handleMobile} className='input input-bordered input-success w-full max-w-xs' type="number" id='mobile' name='mobile' />
                        <label htmlFor="other" className='mb-2 font-medium'>Others</label>
                        <input onChange={handleOther} className='input input-bordered input-success w-full max-w-xs' type="text" id='other' name='other' />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        <label htmlFor="quantity" className='mb-2 font-medium'>Quantity</label>
                        <input onChange={handleQuantity} className='input input-bordered input-success w-full max-w-xs' type="number" id='quantity' name='quantity' defaultValue={item.minOrder} required />
                    </form>
                    <div className="card-actions justify-start mt-3">
                        {
                            crossQuantity ? <button onClick={handlePlaceOrder} className="btn btn-primary">Place order</button> :
                                <input className="btn btn-primary" type="submit" value="Place order" disabled />
                        }
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Purchase;