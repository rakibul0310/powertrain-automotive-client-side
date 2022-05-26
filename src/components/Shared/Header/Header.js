import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate("/")
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li><Link to="/investorrelations">Investor Relations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    const handleTryAgain = () => window.location.reload();
    if (error) {
        return (
            <div className='min-h-screen text-red-500 flex flex-col justify-center items-center text-3xl text-center'>
                <p>Error: {error?.message}</p>
                <button onClick={handleTryAgain} className='btn px-6 py-2 btn-primaty text-xl font-medium mt-5'>Try again</button>
            </div>
        );
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="navbar bg-primary text-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="normal-case text-2xl font-bold flex flex-col">
                    <Link to="/">Powertrain</Link>
                    <span className='text-xs font-thin'>manufacturer Co.</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className="btn btn-error text-base-100">Logout</button> :
                        <Link to="/login" className="btn btn-secondary text-base-100">Login</Link>
                }
                {
                    user && <h5 className='btn btn-circle btn-outline bg-[#333333] text-base-100 text-sm font-light p-1 mx-3'>{user.displayName}</h5>
                }
            </div>
        </div>
    );
};

export default Header;