// import { useState } from 'react';
import img from '../../assets/CSM+LOGO.png'
import { Link, useNavigate } from 'react-router-dom';
// import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // const saveUser = { name: data.name, email: data.email }
                        // console.log(saveUser)
                        Swal.fire({
                            title: 'User Signup successful',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate('/')

                        // .then(res => res.json())
                        // .then(data => {
                        //     if (data.insertedId) {
                        //         reset();
                        //         Swal.fire({
                        //             title: 'User Signup successful',
                        //             showClass: {
                        //                 popup: 'animate__animated animate__fadeInDown'
                        //             },
                        //             hideClass: {
                        //                 popup: 'animate__animated animate__fadeOutUp'
                        //             }
                        //         });
                        //         navigate('/')
                        //     }
                        // })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Cascade School of Music | Signup</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="mr-12 lg:w-2/5">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Signup</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URl</span>
                                    </label>
                                    <input type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className='label-text'>Password</span>
                                    </label>
                                    <input type="password" name='password' {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        // pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                                    })}
                                        placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must Be Six Characters</span>}
                                    {/* {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must Be 1 upper case, 1 lower case, 1 special character</span>} */}

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" /> <br />
                                    <SocialLogin/>
                                    <br />
                                    <p className='my-4 text-center'>Already have an account? <Link to='/login' className='no-underline text-orange-600 font-bold'>Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;