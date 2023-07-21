
const Instructor = ({instructor}) => {
    const { image, email, instructorName } = instructor;

    return (
        <div>
             <div className="">
                <img src={image} className="rounded-lg" alt="" />
                <div className="mt-4">
                    <p className="text-black text-xl">Name: {instructorName}</p>
                    <p className="text-black text-xl">Email: {email}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Instructor;