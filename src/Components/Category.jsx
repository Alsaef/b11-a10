import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [select,setSelect]=useState('Pets Allowed')
    useEffect(() => {
        axios.get("https://server-10-nu.vercel.app/api/all-roommates") // API endpoint
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
                setLoading(false)
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        );
    }

    const handelSelect=(event)=>{
     setSelect(event)
    }

    const filterPost=posts?.filter(post=>post.lifestyle===select)
    return (
        <div className='my-4 my-16'>
            <h2 className="text-4xl font-extrabold text-center mb-10 text-primary">🌟 Categories Roommates</h2>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button onClick={()=>handelSelect('Pets Allowed')} className={`${select==='Pets Allowed'?'btn  btn-primary rounded-full px-6 py-2 text-base':'btn btn-outline btn-primary rounded-full px-6 py-2 text-base'}`}>Pets Allowed</button>
                <button onClick={()=>handelSelect('Smoking')} className={`${select==='Smoking'?'btn btn-primary rounded-full px-6 py-2 text-base':'btn btn-outline btn-primary rounded-full px-6 py-2 text-base'}`}>Smoking</button>
                <button onClick={()=>handelSelect('Night Owl')} className={`${select==='Night Owl'?'btn  btn-primary rounded-full px-6 py-2 text-base':'btn btn-outline btn-primary rounded-full px-6 py-2 text-base'}`}>Night Owl</button>
                <button onClick={()=>handelSelect('Early Bird')} className={`${select==='Early Bird'?'btn  btn-primary rounded-full px-6 py-2 text-base':'btn btn-outline btn-primary rounded-full px-6 py-2 text-base'}`}>Early Bird</button>
                <button onClick={()=>handelSelect('Clean and Quiet')} className={`${select==='Clean and Quiet'?'btn  btn-primary rounded-full px-6 py-2 text-base':'btn btn-outline btn-primary rounded-full px-6 py-2 text-base'}`}>Clean and Quiet</button>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-[98%]">
                {filterPost.length === 0 ? (
                    <div className="col-span-full text-center text-lg text-gray-500 font-semibold">
                        No Life Style data found
                    </div>
                ) : (
                    filterPost.map(post => (
                        <div
                            key={post._id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col "
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
                                <p className="text-gray-600 mb-3">
                                    <span className="font-semibold">Life Style:</span>{" "}
                                    {post.lifestyle}
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
                    ))
                )}
                </div>
            </div>
        </div>
    );
};

export default Category;