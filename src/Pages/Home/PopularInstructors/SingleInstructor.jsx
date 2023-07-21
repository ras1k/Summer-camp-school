

const SingleInstructor = ({ instructor }) => {
    const { name, image, students } = instructor;
    return (
        <div>
            <div className="h-1/2">
                <div className="h-[300px]">
                    <img src={image} className="rounded" alt="" />
                </div>
                <div className="p-5 ">
                    <p className="text-black font-semibold">{name}</p>
                    <p className="mt-3 text-black rounded-2xl text-[14px]">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;