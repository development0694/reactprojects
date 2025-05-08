import React, { useState } from 'react';
import { deleteStudent } from './api';
import './DeleteStudent.css'; // Reusing the same CSS for consistent design

function DeleteStudent() {
    const [stdid, setStdid] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        if (!stdid) {
            setMessage('Please enter a Student ID.');
            return;
        }

        const response = await deleteStudent(stdid);
        if (response.error) {
            setMessage(`Error: ${response.error}`);
        } else {
            setMessage('Student deleted successfully!');
            setStdid('');
        }
    };

    return (
        <div className="update-student-container">
            <div className="card">
                <h2>Delete Student</h2>
                {message && <p className="message">{message}</p>}
                <div className="input-group">
                    <label>Student ID:</label>
                    <input
                        type="text"
                        placeholder="Enter Student ID"
                        value={stdid}
                        onChange={(e) => setStdid(e.target.value)}
                        required
                    />
                </div>
                <button onClick={handleDelete} className="delete-button">Delete Student</button>
            </div>
        </div>
    );
}

export default DeleteStudent;