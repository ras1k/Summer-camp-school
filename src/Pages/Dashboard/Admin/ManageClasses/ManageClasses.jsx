import { useEffect } from "react";
import { useState } from "react";
import { FaBackspace, FaTrashAlt, FaHandHolding } from "react-icons/fa";
import FeedbackModal from "../../FeedBackModal/FeedbackModal";

const ManageClasses = () => {
    const [courses, setCourses] = useState([]);
    const [status, setStatus] = useState('pending');
    const [isDisabled, setIsDisabled] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    // const [checkIndex, setCheckIndex] = useState(null);

    useEffect(() => {
        console.log('hello')
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
            })
    }, []);

    const handleApprove = (id) => {
        // setCheckIndex(id);
        setStatus('approved');
        setIsDisabled(true);
        console.log(id);
    };

    const handleDeny = () => {
        setStatus('denied');
        setIsDisabled(true);
    };

    const handleSendFeedback = () => {
        setShowFeedbackModal(true);
    };

    const handleSubmitFeedback = (feedback) => {
        console.log(`Feedback: ${feedback}`);
    };

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
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
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
                                            <div className="font-bold">{course.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">{course.title}</td>
                                <td className="text-right">{course.instructor}</td>
                                <td className="text-right">{course.email}</td>
                                <td className="text-right">{course.availableSeats}</td>
                                <td className="text-right">${course.price}</td>
                                <td className="text-right">{status}</td>
                                <td> <button className="btn btn-ghost bg-green-700  text-white" onClick={() => handleApprove(course._id)} disabled={isDisabled || status !== 'pending'}><FaHandHolding></FaHandHolding></button></td>
                                <td> <button className="btn btn-ghost bg-red-600  text-white" onClick={handleDeny} disabled={isDisabled || status !== 'pending'}><FaTrashAlt></FaTrashAlt></button></td>
                                <td> <button className="btn btn-ghost bg-blue-400  text-white" onClick={handleSendFeedback} disabled={isDisabled}><FaBackspace></FaBackspace></button></td>
                                <FeedbackModal
                                    isOpen={showFeedbackModal}
                                    onClose={() => setShowFeedbackModal(false)}
                                    onSubmit={handleSubmitFeedback}
                                />
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;

