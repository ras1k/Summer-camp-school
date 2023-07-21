

const SingleCourse = ({course}) => {
    const { title, image, students } = course;
    return (
        <div>
            <div className="courses ">
                <img src={image} className="rounded" alt="" />
                <div className="p-5 ">
                    <p className="text-black font-semibold">{title}</p>
                    <p className="mt-3 text-black rounded-2xl text-[14px]">Number Of Students: {students}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;