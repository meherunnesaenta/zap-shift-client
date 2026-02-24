import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { SocialLogin } from '../Auth/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, forgetPassword } = useAuth();
    const handleLogin = async (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }
    const handleForgetPassword = (data) => {
        const email = data.email;
        if (email) {
            forgetPassword(email)
                .then(() => {
                    Swal.fire({
                        title: "Password reset email sent!",
                        icon: "success",
                        draggable: true,
                        confirmButtonColor:"#CAEB66"
                    });
                })
                .catch(err => Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                    footer: '<a href="#">Why do I have this issue?</a>',
                    confirmButtonColor:"#CAEB66"
                })
                );
        } else {
            alert('Email address is required to reset password.');
        }

    }


    return (
        <div className="w-full max-w-md mx-auto mt-8 px-4 sm:px-0">
            <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
                <div className="card-body p-6 sm:p-8 lg:p-10">
                    <h2 className="card-title text-2xl sm:text-3xl font-bold text-secondary mb-6 text-center">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-base-content">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className={`input input-bordered w-full focus:input-primary focus:ring-2 focus:ring-primary/30 transition-all ${errors.email ? "input-error" : ""
                                    }`}
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <span className="text-error text-sm mt-1.5 block">
                                    Email is required
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-base-content">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={`input input-bordered w-full focus:input-primary focus:ring-2 focus:ring-primary/30 transition-all ${errors.password ? "input-error" : ""
                                    }`}
                                {...register("password", { required: true, minLength: 6 })}
                            />

                            {errors.password?.type === "required" && (
                                <span className="text-error text-sm mt-1.5 block">
                                    Password is required
                                </span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-error text-sm mt-1.5 block">
                                    Password must be at least 6 characters
                                </span>
                            )}
                        </div>
                        <div className="text-right text-sm">
                            <button type="button"
                                onClick={() => handleSubmit(handleForgetPassword)()}
                                className="link link-hover link-primary font-medium"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button className="btn btn-primary w-full mt-2 text-secondary font-semibold">
                            Login
                        </button>
                        <p>New to Zap shift ? <Link to='/auth/register' className='link link-hover link-primary font-medium'>Register here</Link> </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    )
}
