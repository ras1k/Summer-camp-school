

const SingleCourse = ({course}) => {
    const { title, image, students } = course;
    return (
        <div>
            <div className="">
                <img src={image} className="rounded-lg mb-4" alt="" />
                <div className="mb-2">
                    <h4 className="text-black text-xl font-semibold">{title}</h4>
                    <p className="mt-3 text-black">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;