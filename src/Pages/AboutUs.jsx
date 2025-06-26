import React from 'react';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-base-100 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
            <p className="mb-6 text-lg">
                Welcome to our website! We are dedicated to helping people find the perfect roommates and shared living spaces easily and securely.
                Our team is passionate about making the roommate search process simple, safe, and effective for everyone.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-secondary">Our Mission</h2>
            <p className="mb-6">
                Our mission is to connect individuals seeking roommates or shared accommodations, making it easier to find compatible living partners and affordable housing options.
                We strive to provide a trustworthy platform that prioritizes user safety and satisfaction.
            </p>
            <h2 className="text-2xl font-semibold mb-2 text-secondary">Why Choose Us?</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Easy-to-use roommate finder platform</li>
                <li>Secure and verified user profiles</li>
                <li>Advanced search and matching features</li>
                <li>Responsive support and continuous improvements</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2 text-secondary">Contact Us</h2>
            <p>
                Have questions or feedback? Feel free to{' '}
                <Link to="/contact" className="link link-primary underline">
                    contact us
                </Link>
                . We look forward to helping you find your ideal roommate!
            </p>
        </div>
    );
};

export default AboutUs;