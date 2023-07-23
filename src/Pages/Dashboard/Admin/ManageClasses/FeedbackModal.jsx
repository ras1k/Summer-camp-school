import { useState } from 'react';
import Modal from 'react-modal';



const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
    const [feedback, setFeedback] = useState('');

    const handleInputChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(feedback);
        setFeedback('');
        onClose();
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '400px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2'>Provide Feedback</h2>
                <textarea
                    className='p-2 border lg:w-[300px] lg:h-[200px] rounded-lg border-black'
                    value={feedback}
                    onChange={handleInputChange}
                    placeholder="Write your feedback here..."
                /> <br />
                <button onClick={handleSubmit} className='btn btn-sm btn-outline text-green-600 me-2'>Send</button>
                <button onClick={onClose} className='btn btn-sm btn-outline text-red-500'>Cancel</button>
            </div>
        </Modal>
    );
};

export default FeedbackModal;