import { useEffect } from "react";
import { useState } from "react";
import { FaBackspace, FaTrashAlt, FaHandHolding } from "react-icons/fa";
import FeedbackModal from "../../FeedBackModal/FeedbackModal";

const ManageClasses = () => {
    const [courses, setCourses] = useState([]);
    const [status, setStatus] = useState('pending');
    const [isDisabled, setIsDisabled] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-eight.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log('lol',data);
                
            })
    }, []);


    const handleApprove = (id) => {
        setStatus('approved');
        setIsDisabled(true);
        console.log(id);
    };

    const handleDeny = (id) => {
        setStatus('denied');
        setIsDisabled(true);
        console.log(id)
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
                                <td className="">{course.title}</td>
                                <td className="">{course.instructor}</td>
                                <td className="">{course.email}</td>
                                <td className="">{course.availableSeats}</td>
                                <td className="">${course.price}</td>
                                <td className="">{status}</td>
                                <td> <button className="btn btn-ghost bg-green-700  text-white" onClick={() => handleApprove(course._id)} disabled={isDisabled || status !== 'pending'}><FaHandHolding></FaHandHolding></button></td>
                                <td> <button className="btn btn-ghost bg-red-600  text-white" onClick={() =>handleDeny(course._id)} disabled={isDisabled || status !== 'pending'}><FaTrashAlt></FaTrashAlt></button></td>
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

