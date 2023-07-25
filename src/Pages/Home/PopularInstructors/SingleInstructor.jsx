import Tilt from 'react-parallax-tilt';

const SingleInstructor = ({ instructor }) => {
    const { name, image, students } = instructor;
    return (
        <div>
            <div className="h-1/2">
                <div className="mb-4">
                    <Tilt>
                        <img src={image} className="rounded-lg" alt="" />
                    </Tilt>
                </div>
                <div className="mb-2">
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p className="">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;