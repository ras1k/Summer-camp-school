import Tilt from 'react-parallax-tilt';

const Class = ({ course }) => {
    const { title, image, instructor, availableSeats, price } = course;
    return (
        <div>
            <div className="">
                <img src={image} className="rounded-lg" alt="" />
                <div className="mt-4 h-[150px]">
                    <p className="text-black text-2xl font-bold">{title}</p>
                    <p className="text-black text-xl">Instructor: {instructor}</p>
                    <p className="text-black text-xl">Seats: {availableSeats}</p>
                    <p className="text-black text-xl">Price: {price}</p>
                </div>
                <Tilt>
                    <div className="text-center">
                        <button className="btn btn-sm btn-outline border-0 border-e-4 border-s-4 border-b-4 text-black mt-2">Select</button>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Class;