import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center">
                <div className='lg:hidden w-full flex justify-start items-center'>
                    <label for="my-drawer" class="btn btn-secondary drawer-button lg:hidden mt-2 text-base-100"><FontAwesomeIcon className='mr-3 text-xl' icon={faArrowAltCircleLeft} /> Open Sidebar</label>
                </div>
                <h2 className='text-3xl md:text-5xl font-bold text-primary mt-7'>Hey! {user.displayName}</h2>
                <h2 className='text-xl md:text-3xl font-bold text-secondary mt-3'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-primary text-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Dashboard</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/manageorders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    </>}
                    {user && !admin && <>
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link to="/dashboard/addreview">Add Review</Link></li>
                        <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    )
};

export default Dashboard;