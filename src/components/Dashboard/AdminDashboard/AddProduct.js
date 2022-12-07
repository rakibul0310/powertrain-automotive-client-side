import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddProduct = () => {
    const [productDescrioption, setProductDescription] = useState("");
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '4ff7566f1114e862b51a25ca4f5003bd';

    const onSubmit = async data => {
        const formData = new FormData();
        const image = data.img[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newParts = {
                        name: data.name,
                        img: img,
                        description: productDescrioption,
                        features: [data.feature1, data.feature2, data.feature3],
                        minOrder: parseInt(data.minOrder),
                        availableQuantity: parseInt(data.availableQuantity),
                        price: parseInt(data.price)
                    }

                    fetch('https://powertrain.onrender.com/parts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newParts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Parts added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the parts');
                            }
                        })

                }

            })
    }

    const handleDescription = (e) => {
        const value = e.target.value;
        setProductDescription(value);
    }


    return (
        <div className=''>
            <h2 className="text-2xl font-bold text-center my-7">Add a New Parts</h2>
            <form className='mb-12' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-success w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Despription</span>
                    </label>
                    <textarea onBlur={handleDescription} name="desccription" id="description" className='textarea textarea-success w-full max-w-xs' cols="30" rows="3" placeholder='Product descrioption'></textarea>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Features</span>
                    </label>
                    <label className="label">
                        <span className="label-text text-sm">feature 1:</span>
                    </label>
                    <input className="input input-success w-full max-w-xs"
                        {...register("feature1")} type="text" />

                    <label className="label">
                        <span className="label-text text-sm">feature 2:</span>
                    </label>
                    <input className="input input-success w-full max-w-xs"
                        {...register("feature2")} type="text" />

                    <label className="label">
                        <span className="label-text text-sm">feature 3:</span>
                    </label>
                    <input className="input input-success w-full max-w-xs"
                        {...register("feature3")} type="text" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum order"
                        className="input input-success w-full max-w-xs"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'Minimum order is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available quantity"
                        className="input input-success w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-medium">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="$$"
                        className="input input-success w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-success w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn btn-secondary w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;