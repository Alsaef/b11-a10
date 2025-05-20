import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../Components/GoogleLoginButton ';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
const Signup = () => {
    const {createAccount}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        if (!uppercaseRegex.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        if (!lowercaseRegex.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        // All good, create user
        createAccount(email, password, name, photoURL)
            .then((user) => {
                toast.success("User created successfully!");
                console.log("User created:", user);
                form.reset();
                navigate('/');
            })
            .catch((error) => {
                console.error(error.message);
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-base-200">
                <div className="w-full max-w-sm rounded-lg bg-base-100 p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Create a password" className="input input-bordered" />
                        </div>

                        {/* ✅ Photo URL Field */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="Enter your photo URL" className="input input-bordered" />
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Sign Up
                        </button>
                    </form>
                    <GoogleLoginButton></GoogleLoginButton>
                    <p className="mt-2 text-sm text-center">
                        Already have an account? <Link to="/login" className="text-blue-600 underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
