import { useEffect, useState } from "react";
import SingleCourse from "./SingleCourse";

const PopularClasses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data =>{
            setCourses(data[0].popularClasses);
        })
    },[])
    return (
        <div className="my-10">
            <h1 className="text-center text-4xl font-semibold mb-4">Popular Classes</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    courses.map(course =><SingleCourse key={course.id} course={course}></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;