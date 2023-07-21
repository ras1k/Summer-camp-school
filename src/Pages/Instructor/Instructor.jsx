
const Instructor = ({instructor}) => {
    const { image, email, instructorName } = instructor;

    return (
        <div>
            
             <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">Name: {instructorName}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Email: {email}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Instructor;