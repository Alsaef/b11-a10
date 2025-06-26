import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardRoot = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <FaBars></FaBars>
                </label>
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* The Outlet renders the matched child route element */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu   text-white bg-[#3B25C1] min-h-full w-[250px] p-4">
                    <h2 className='text-2xl font-semibold py-2'>DashBoard</h2>
                        {/* Sidebar content here */}
                        <li className='py-2'><NavLink to="">Overview</NavLink></li>
                        <li className='py-2'><NavLink to="/dashboard/add-roommate-post">Add Roommate Post</NavLink></li>
                        <li className='py-2'><NavLink to="/dashboard/my-posts">My Posts</NavLink></li>
                        <li className='py-2'><NavLink to="/dashboard/all-aoommates">All Roommates</NavLink></li>
                        <hr />
                        <li className='py-2'><NavLink to="/">Go To Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;