

const SingleCourse = ({course}) => {
    const { title, image, students } = course;
    return (
        <div>
            <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">{title}</p>
                    <button className="bg-[#000] mt-3 text-white rounded-2xl px-2 text-[14px] py-1">Number Of Students: {students}</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;