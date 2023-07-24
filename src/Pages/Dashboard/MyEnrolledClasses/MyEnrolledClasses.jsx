import { useEffect } from "react";
import { useState } from "react";

const MyEnrolledClasses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        console.log('hello')
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
            })
    }, []);

    return (
        <div className="w-full h-full ms-10 mt-4">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {courses.map(course =>
                            <tr key={course._id}>
                                <td>
                                    <div className="flex courses-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">{course.title}</td>
                                <td className="">{course.instructor}</td>
                                <td className="">{course.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;

