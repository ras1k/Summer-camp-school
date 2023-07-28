import img from '/CSM+LOGO.png'
import Tilt from 'react-parallax-tilt';
import { FaTelegramPlane } from "react-icons/fa";

const NewsLetter = () => {
    return (
        <div>
            <div className="hero mb-20 mt-10 rounded-lg">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="lg:text-5xl text-3xl font-bold">Subscribe To Our NewsLetter</h1>
                        <p className="lg:py-6 py-2">We will send you updates about our new courses.</p>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm md:btn-md bg-white btn-outline">Subscribe <FaTelegramPlane/></button>
                            </div>
                        </div>
                    </div>
                    <Tilt>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <img src={img} alt="" className='w-4/5 rounded-lg lg:w-full' />

                        </div>
                    </Tilt>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;