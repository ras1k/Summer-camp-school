import Tilt from 'react-parallax-tilt';

const SingleCourse = ({ course }) => {
    const { title, image, students } = course;
    return (
        <div>
            <div className="">
                <Tilt>
                    <img src={image} className="rounded-lg mb-4" alt="" />
                </Tilt>
                <div className="mb-2 p-2">
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <p className="mt-3">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;