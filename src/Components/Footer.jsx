import React from 'react';
import Logo from '../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer flex flex-col sm:flex-row sm:justify-between bg-gray-100 text-black p-10">
                {/* Logo and About */}
                <aside className="mb-6 sm:mb-0">
                    <img className="w-[150px] mb-4" src={Logo} alt="Logo" />
                    <p>
                        NY Apartment. <br />
                        Providing reliable tech since 2025
                    </p>
                </aside>

                {/* Relevant Links */}
                <nav>
                    <h6 className="footer-title uppercase">Links</h6>
                    <ul>
                        <li>
                            <Link className="link link-hover" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/browse">All Roommates</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                {/* Terms & Policy */}
                <nav>
                    <h6 className="footer-title uppercase">Legal</h6>
                    <ul>
                        <li>
                            <Link className="link link-hover" to="/terms">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link className="link link-hover" to="/support">Support</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Media */}
                <nav>
                    <h6 className="footer-title uppercase">Social</h6>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebook className="text-3xl hover:text-blue-600" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-3xl hover:text-blue-700" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className="text-3xl hover:text-pink-700" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube className="text-3xl hover:text-red-700" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
