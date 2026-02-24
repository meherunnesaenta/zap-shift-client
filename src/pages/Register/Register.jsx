
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { SocialLogin } from '../Auth/SocialLogin/SocialLogin';
import axios from 'axios';

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser,updatePhoto } = useAuth();
    const handleRegister = async (data) => {
        const profileImg=data.photo[0];
        registerUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const formData =new FormData()
                formData.append('image',profileImg);
                const imageApiUrl=`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`;
                axios.post(imageApiUrl,formData)
                .then(res=>{
                    const userProfile ={
                        displayName : data.name,
                        photoUrl : res.data.data.url
                    }
                    updatePhoto(userProfile)
                    .then()
                    .catch(error=>console.log(error));
                })
                
                console.log(user);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="w-full max-w-md mx-auto mt-8 px-4 sm:px-0">
            <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
                <div className="card-body p-6 sm:p-8 lg:p-10">
                    <h2 className="card-title text-2xl sm:text-3xl font-bold text-secondary mb-6 text-center">
                        Create Your Account
                    </h2>

                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-base-content">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name "
                                className={`input input-bordered w-full focus:input-primary focus:ring-2 focus:ring-primary/30 transition-all ${errors.name ? "input-error" : ""
                                    }`}
                                {...register("name", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <span className="text-error text-sm mt-1.5 block">
                                    Email is required
                                </span>
                            )}
                        </div>
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
                        <input type="file" {...register('photo',{required:true})} className="file-input file-input-sm " />

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
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).*$/,
                                })}
                            />

                            {/* Error messages - stacked vertically */}
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
                            {errors.password?.type === "pattern" && (
                                <span className="text-error text-sm mt-1.5 block">
                                    Must contain uppercase, number & special character
                                </span>
                            )}
                        </div>

                        {/* Register Button */}
                        <button className="btn btn-primary  w-full mt-2 text-secondary font-semibold">
                            Register
                        </button>
                        <p className="mt-2">Already have an account ? <Link to="/auth/login" className="link link-hover link-primary font-medium">Login</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    )


}


