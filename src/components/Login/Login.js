import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {
            const getAccesToken = async () => {
                await fetch(`http://localhost:5000/login`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: googleUser?.user.email || user?.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('accessToken', data.accessToken);
                    })
            }

            const updateProfile = async (email) => {
                const newProfile = {
                    name: googleUser?.user.displayName || user?.user.displayName,
                    email: googleUser?.user.email || user?.user.email,
                    photoURL: "https://i.ibb.co/HYsFTYc/User-Profile-PNG-Image.png",
                    mobile: "",
                    education: "",
                    address: "",
                    linkedin: ""
                }
                const url = `http://localhost:5000/updateprofile/${email}`;
                await fetch(url, {
                    method: 'PUT',
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(newProfile),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }

            updateProfile(googleUser?.user.email || user?.user.email)
            getAccesToken();
            return navigate(from, { replace: true });
        }
    }, [user, googleUser, navigate, from])

    const handleTryAgain = () => window.location.reload();
    if (error || googleError) {
        return (
            <div className='min-h-screen text-red-500 flex flex-col justify-center items-center text-3xl text-center'>
                <p>Error: {error?.message || googleError?.message}</p>
                <button onClick={handleTryAgain} className='btn px-6 py-2 btn-primaty text-xl font-medium mt-5'>Try again</button>
            </div>
        );
    }
    if (loading || googleLoading) {
        return <Loading />;
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset()
    };

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-3xl font-bold text-primary underline decoration-secondary mb-5'>Login</h2>
            <form className='form-control justify-center items-center text-left w-full' onSubmit={handleSubmit(onSubmit)} >
                <input className='input input-bordered input-success w-full max-w-xs my-3' type="email" id='email' name='email' placeholder='test@email.com' required {...register("email")} autoComplete="off" />
                <input className='input input-bordered input-success w-full max-w-xs' type="password" id='password' name='password' placeholder='password' {...register("password", { required: true })} autoComplete="off" />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-secondary mt-3 w-full max-w-xs text-base-100' type="submit" value="Login" />
                <Link to="/forgotpassword"><span className='text-sm mt-1 text-blue-500 underline decoration-blue-500'>Forgot password?</span></Link>
                <span className='text-sm'>Don't have any account? <Link to="/register"><button className='text-blue-500 underline decoration-blue-500'>register</button></Link></span>
            </form>
            <div className='mt-8'>
                <div className='flex justify-center items-center'>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                    <small className='mx-2 text-lg font-semibold'>Or</small>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} className='my-5 px-6 py-1 btn text-white border-0 bg-red-600 hover:bg-red-500'>
                        <FontAwesomeIcon className='text-red-500 text-lg mx-3 bg-slate-100 p-2 rounded-full' icon={faGoogle} />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;