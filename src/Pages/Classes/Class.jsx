import Tilt from 'react-parallax-tilt';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const Class = ({ course }) => {
    const { id, title, image, instructor, availableSeats, price } = course;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    const handleAddToCart = cart =>{
        console.log(cart);
        if (user && user.email) {
            const cartItem = { courseItemId: id, title, price, image, email: user.email }
            fetch('https://summer-camp-school-server-side-eight.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course Added Successfully.',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }

                    console.log(data);
                })
        }
        else {
            Swal.fire({
                title: 'Please login for add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="mb-2 p-4 lg:p-0">
                <img src={image} className="rounded-lg" alt="" />
                <div className="mt-4 h-[150px]">
                    <p className="text-black text-2xl font-bold">{title}</p>
                    <p className="text-black text-xl">Instructor: {instructor}</p>
                    <p className="text-black text-xl">Seats: {availableSeats}</p>
                    <p className="text-black text-xl">Price: {price}</p>
                </div>
                <Tilt>
                    <div className="text-center">
                        <button onClick={() => handleAddToCart(course)} className="btn btn-sm btn-outline border-0 border-e-4 border-s-4 border-b-4 text-black mt-2">Select</button>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Class;