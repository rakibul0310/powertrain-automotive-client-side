import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [user, loading] = useAuthState(auth);
    const [crossQuantity, setCrossQuantity] = useState(true);
    const [orderQuantity, setOrderQuantity] = useState(0);
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
        if (value < parseInt(item.minOrder)) {
            setCrossQuantity(false);
            console.log(crossQuantity)
        } else {
            setCrossQuantity(true);
            console.log(crossQuantity)
        }
    }

    const handlePlaceOrder = () => {

    }

    return (
        <div className='py-9 px-3 flex justify-center items-center'>
            <div class="card lg:card-side bg-[#ecebe8] w-full md:w-3/4 h-[500px] shadow-xl">
                <figure><img src={item.img} alt="Album" /></figure>
                <div class="card-body">
                    <form className='form-control justify-start items-start text-left w-full' >
                        <label htmlFor="email" className='font-medium'>Email</label>
                        <input className='input input-bordered input-success w-full max-w-xs my-3' type="email" id='email' name='email' defaultValue={user.email} disabled />
                        <label htmlFor="productName" className='mb-2 font-medium'>Product Name</label>
                        <input className='input input-bordered input-success w-full max-w-xs' type="text" id='productName' name='productName' defaultValue={item.name} disabled />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        <label htmlFor="quantity" className='mb-2 font-medium'>Quantity</label>
                        <input onChange={handleQuantity} className='input input-bordered input-success w-full max-w-xs' type="number" id='quantity' name='quantity' defaultValue={item.minOrder} />
                    </form>
                    <div class="card-actions justify-end">
                        {
                            crossQuantity ? <button onClick={handlePlaceOrder} class="btn btn-primary">Place order</button> :
                                <input class="btn btn-primary" type="submit" value="Place order" disabled />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;