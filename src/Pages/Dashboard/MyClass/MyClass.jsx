import { useEffect } from "react";
import { useState } from "react";
import {  FaTrashAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { BiCommentAdd } from "react-icons/bi";

const MyClass = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
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
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th className="text-center">Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Send Feedback</th>

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
                                        <div>
                                            <div className="font-bold">{courses.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">{course.title}</td>
                                <td className="">{course.instructor}</td>
                                <td className="">{course.email}</td>
                                <td className="">{course.availableSeats}</td>
                                <td className="">${course.price}</td>
                                <td> <button className="btn btn-ghost bg-green-700  text-white"><GiCheckMark></GiCheckMark></button></td>
                                <td> <button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                <td> <button className="btn btn-ghost bg-blue-400  text-white"><BiCommentAdd></BiCommentAdd></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;