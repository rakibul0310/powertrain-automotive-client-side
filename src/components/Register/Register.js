import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("in on submit", data.email);
        console.log("in on submit", data.password);
    };
    return (
        <div>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <h2 className='text-3xl font-bold text-primary underline decoration-secondary mb-5'>Register</h2>
                <form className='form-control justify-center items-center text-left w-full' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered input-primary w-full max-w-xs my-3' type="text" id='name' name='name' placeholder='Mr. Jhon' {...register("name")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-3' type="email" id='email' name='email' placeholder='test@email.com' {...register("email")} />
                    <input className='input input-bordered input-primary w-full max-w-xs mb-3' type="password" id='password' name='password' placeholder='password' {...register("password", { required: true })} />
                    {errors.password && <span className='font-thin text-red-500'>This field is required</span>}
                    <input className='input input-bordered input-primary w-full max-w-xs' type="password" id='confrim-password' name='confrim-password' placeholder='Confrim password' {...register("confrimPassword", { required: true })} />
                    {errors.password && <span className='font-thin text-red-500'>This field is required</span>}
                    <input className='btn btn-primary mt-3 w-full max-w-xs text-base-100' type="submit" value="Register" />
                    <span className='text-sm mt-1'>Already have an account? <Link to="/login"><button className='text-blue-500 underline decoration-blue-500'>Login</button></Link></span>
                </form>
                <div className='mt-8'>
                    <div className='flex justify-center items-center'>
                        <div className='w-[80px] h-[3px] bg-slate-200'></div>
                        <small className='mx-2 text-lg font-semibold'>Or</small>
                        <div className='w-[80px] h-[3px] bg-slate-200'></div>
                    </div>
                    <div>
                        <button className='my-5 px-6 py-1 btn text-white border-0 bg-red-600 hover:bg-red-500'>
                            <FontAwesomeIcon className='text-red-500 text-lg mx-3 bg-slate-100 p-2 rounded-full' icon={faGoogle} />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;