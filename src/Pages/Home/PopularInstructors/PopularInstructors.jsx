import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            setInstructors(data[0].popularInstructors);
        })
    },[])
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-semibold mb-4">Popular Instructors</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    instructors.map(instructor =><SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;