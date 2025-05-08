import React, { useState } from 'react';
import { updateStudent } from './api';
import './UpdateStudent.css';

function UpdateStudent() {
    const [stdid, setStdid] = useState('');
    const [standard, setStandard] = useState('');
    const [roll, setRoll] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { stdid, standard, roll, age };

    const response = await updateStudent(studentData);

    if (response.error) {
        setMessage(response.error); // Show custom error message
    } else {
        setMessage(response.message); // Show success message
    }
   };

    return (
        <div className="update-student-container">
            <div className="card">
                <h2>Update Student Details</h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Student ID:</label>
                        <input type="text" value={stdid} onChange={(e) => setStdid(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Standard:</label>
                        <input type="text" value={standard} onChange={(e) => setStandard(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Roll:</label>
                        <input type="number" value={roll} onChange={(e) => setRoll(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <button type="submit">Update Student</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateStudent;