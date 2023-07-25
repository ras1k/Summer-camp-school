
const Instructor = ({instructor}) => {
    const { image, email, instructorName } = instructor;

    return (
        <div>
             <div className="mt-2">
                <img src={image} className="rounded-lg" alt="" />
                <div className="mt-4">
                    <p className=" text-xl">Name: {instructorName}</p>
                    <p className=" text-xl">Email: {email}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Instructor;