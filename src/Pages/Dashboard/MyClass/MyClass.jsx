import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { BiCommentAdd } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import FeedbackModal from "../FeedBackModal/FeedbackModal";

const MyClass = () => {
    const [courses, setCourses] = useState([]);
    const [status, setStatus] = useState('pending');
    const [isDisabled, setIsDisabled] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-eight.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
            })
    }, []);

    const handleApprove = () => {
        setStatus('approved');
        setIsDisabled(true);
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
            <Helmet>
                <title>Cascade School of Music | Dashboard | My Class</title>
            </Helmet>
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
                                            <div className="font-bold">{courses.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">{course.title}</td>
                                <td className="">{course.instructor}</td>
                                <td className="">{course.email}</td>
                                <td className="">{course.availableSeats}</td>
                                <td className="">${course.price}</td>
                                <td className="text-right">{status}</td>
                                <td> <button className="btn btn-ghost bg-green-700  text-white" onClick={handleApprove} disabled={isDisabled || status !== 'pending'}><GiCheckMark /></button></td>
                                <td> <button className="btn btn-ghost bg-red-600  text-white" onClick={handleDeny} disabled={isDisabled || status !== 'pending'}><FaTrashAlt /></button></td>
                                <td> <button className="btn btn-ghost bg-blue-400  text-white" onClick={handleSendFeedback} disabled={isDisabled}><BiCommentAdd /></button></td>
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

export default MyClass;