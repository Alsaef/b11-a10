import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrowseListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    axios.get('https://server-10-nu.vercel.app/api/all-roommates')
      .then(res => {
        setListings(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };



  // Filter and sort listings
  const filteredListings = listings
    .filter(post =>
      post.name.toLowerCase().includes(filterText.toLowerCase()) ||
      post.location.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rent - b.rent;
      } else {
        return b.rent - a.rent;
      }
    });
  return (
    <div className="px-4 py-10 mx-auto w-[95%]">
      <h2 className="text-2xl font-bold text-center mb-6">Browse Listings</h2>
      <div className="flex flex-col sm:flex-row items-center justify-end mb-6 gap-4">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="select select-bordered w-full sm:w-40"
        >
          <option value="asc">Rent: Low to High</option>
          <option value="desc">Rent: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredListings.map(post => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.name}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.name}</h3>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Description:</span>{" "}
                {post.description?.slice(0, 50)}...
              </p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">
                  <span className="font-semibold">Location:</span> {post.location}
                </span>
                <span className="text-sm text-primary font-semibold">
                  {post.rent}৳
                </span>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  to={`/details/${post._id}`}
                  className="btn btn-primary w-full rounded-full"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseListings;
