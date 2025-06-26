import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-base-100 rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-primary">Contact Us</h2>
            <form className="space-y-5">
                <div>
                    <label htmlFor="name" className="block mb-2 text-base-content font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-base-content font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-base-content font-medium">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="How can we help you?"
                        className="textarea textarea-bordered w-full"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;