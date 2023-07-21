

const SingleInstructor = ({ instructor }) => {
    const { name, image, students } = instructor;
    return (
        <div>
            <div className="h-1/2">
                <div className="mb-4">
                    <img src={image} className="rounded-lg" alt="" />
                </div>
                <div className="mb-2">
                    <h4 className="text-black text-xl font-semibold">{name}</h4>
                    <p className="text-black">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;