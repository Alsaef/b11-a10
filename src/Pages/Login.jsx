import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLoginButton from '../Components/GoogleLoginButton ';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {LoginUser}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LoginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log("Logged in user:", loggedUser);

                toast.success("Login successful!");
                form.reset();
                navigate("/"); // Redirect to homepage or dashboard
            })
            .catch((error) => {
                console.error(error.message);
                toast.error("Login failed: " + error.message);
            });
    };

    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-base-200">
                <div className="w-full max-w-sm rounded-lg bg-base-100 p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleLogin}>
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
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>
                    <GoogleLoginButton></GoogleLoginButton>
                    <p className="mt-2 text-sm text-center">
                        Don't have an account? <Link to="/signup" className="text-blue-600 underline">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;