import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const Overview = () => {
  const { user,logOut } = useContext(AuthContext);
  const [stats, setStats] = useState({
    total: 0,
    mine: 0,
    available: 0,
    unavailable: 0
  });

  useEffect(() => {
    axios.get(`https://server-10-nu.vercel.app/api/roommates/stats?email=${user?.email}`)
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, [user]);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="stat bg-blue-100 text-blue-900 rounded-lg p-4">
          <p className="text-lg font-semibold">Total Posts</p>
          <p className="text-3xl">{stats.total}</p>
        </div>
        <div className="stat bg-green-100 text-green-900 rounded-lg p-4">
          <p className="text-lg font-semibold">My Posts</p>
          <p className="text-3xl">{stats.mine}</p>
        </div>
        <div className="stat bg-yellow-100 text-yellow-900 rounded-lg p-4">
          <p className="text-lg font-semibold">Available</p>
          <p className="text-3xl">{stats.available}</p>
        </div>
        <div className="stat bg-red-100 text-red-900 rounded-lg p-4">
          <p className="text-lg font-semibold">Not Available</p>
          <p className="text-3xl">{stats.unavailable}</p>
        </div>
      </div>

      <div className="bg-base-100 shadow rounded-lg p-4">
        <h3 className="text-xl font-bold mb-2">Logged-in User Info</h3>
        <p><strong>Name:</strong> {user?.displayName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        {user?.photoURL && (
          <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full mt-2" />
        )}
        <button onClick={logOut} className='btn btn-error text-white my-3'>Logout</button>
      </div>
    </div>
  );
};

export default Overview;
