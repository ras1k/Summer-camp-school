
import { useEffect, useState } from "react";
import Instructor from "./Instructor";
import { FaMusic } from "react-icons/fa";

const AllInstructor = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setAllInstructors(data[0].instructors);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className="lg:text-[150px] md:text-[140px] text-[30px] mt-48  flex items-center justify-center">L<span><FaMusic/></span>ading...</div>
            ) : (
                <div className="courses p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        allInstructors.map(instructor => <Instructor key={instructor._id} instructor={instructor}></Instructor>)
                    }
                </div>
            )}
        </div>
    );
};

export default AllInstructor;