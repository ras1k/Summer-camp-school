import img from '/CSM+LOGO.png'
import Tilt from 'react-parallax-tilt';
const NewsLetter = () => {
    return (

        <div>

            <Tilt>
                <div className="hero mb-20 mt-10 rounded-lg">
                    <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                        <div className="text-center w-1/2 lg:text-left">
                            <h1 className="md:text-5xl font-bold">Subscribe To Our NewsLetter</h1>
                            <p className="py-6">We will send you updates about our new collection of toys. </p>
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
                                    <button className="btn btn-sm md:btn-md btn-neutral btn-outline">Subscribe</button>
                                </div>
                            </div>
                        </div>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <img src={img} alt="" className='w-4/5 lg:w-full' />
                        </div>

                    </div>
                </div>
            </Tilt>

        </div>
    );
};

export default NewsLetter;