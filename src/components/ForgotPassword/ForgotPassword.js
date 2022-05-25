import React from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log("in on submit", data.email);
        console.log("in on submit", data.password);
    };
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <form className='form-control justify-center items-center text-left w-full' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered input-success w-full max-w-xs my-3' type="email" id='email' name='email' placeholder='test@email.com' {...register("email")} />
                <input className='btn btn-error mt-3 w-full max-w-xs text-base-100' type="submit" value="Reset password" />
            </form>
        </div>
    );
};

export default ForgotPassword;