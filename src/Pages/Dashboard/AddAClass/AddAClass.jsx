import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const AddAClass = () => {
    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth();

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { title, price, instructor, availableSeats, email } = data;
                    const newItem = { title, price: parseFloat(price), instructor,email, availableSeats, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <div className='w-full h-full ms-10 mt-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Type here"
                        {...register("title", { required: true, maxLength: 120 })}
                        className="input input-bordered lg:w-[900px]" />

                </div>

                <div className="form-control  lg:w-[700px]">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>

                    </label>
                    <input type="text" placeholder='name' defaultValue={user.displayName}
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered lg:w-[900px]" />

                </div>
                <div className="form-control  lg:w-[700px]">
                    <label className="label">
                        <span className="label-text">Instructor Email*</span>

                    </label>
                    <input type="email" placeholder='email' defaultValue={user.email}
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered lg:w-[900px]" />

                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered lg:w-[900px]" />

                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered lg:w-[900px]" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className="py-5 flex items-center">
                    <input className="btn btn-outline w-2/6 text-black mt-2" type="submit" value="Add Course" />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;