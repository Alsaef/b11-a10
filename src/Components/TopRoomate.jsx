import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopRoomate = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://server-10-nu.vercel.app/api/top-roommates") // API endpoint
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

  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-primary">🌟 Top Roommates</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-[98%] py-10">
        {posts.map(post => (
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
                <span className="font-semibold">Likes:</span>{" "}
                {post.likeCount}
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

export default TopRoomate;
