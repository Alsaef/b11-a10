import React, { useState } from 'react';

const Blogs = () => {
    const [blogs] = useState([
        {
            id: 1,
            title: "Welcome to Our Blog!",
            content: "Stay tuned for the latest updates, tips, and stories from our team.",
            author: "Admin",
            date: "2024-06-10"
        },
        {
            id: 2,
            title: "Getting Started Guide",
            content: "Learn how to make the most of our website with this quick start guide.",
            author: "Jane Doe",
            date: "2024-06-09"
        }
    ]);

    return (
        <div className="max-w-2xl mx-auto p-6 my-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest Blogs</h2>
            {blogs.map(blog => (
                <div
                    key={blog.id}
                    className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{blog.title}</h3>
                    <p className="text-gray-700 mb-4">{blog.content}</p>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                        <span>By {blog.author}</span>
                        <span className="mx-1">|</span>
                        <span>{blog.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;