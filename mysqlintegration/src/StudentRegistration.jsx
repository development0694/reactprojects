import { useState, useEffect } from 'react';
import { fetchStudents, addStudent } from './api.js';
import "./StudentRegistration.css";

function StudentRegistration() {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ stdid: '', stdname: '', standard: '', roll: '', age: '', termsAccepted: false });

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const data = await fetchStudents();
        setStudents(data);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.stdid && form.stdname && form.standard && form.roll && form.age && form.termsAccepted) {
            await addStudent(form);
            setForm({ stdid: '', stdname: '', standard: '', roll: '', age: '', termsAccepted: false });
            getStudents(); // Refresh student list
        }
    };

    return (
        <div className="form-container">
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <input type="text" name="stdid" placeholder="Enter Student ID" value={form.stdid} onChange={handleChange} required />
                <input type="text" name="stdname" placeholder="Enter Student Name" value={form.stdname} onChange={handleChange} required />
                <input type="text" name="standard" placeholder="Enter Class" value={form.standard} onChange={handleChange} required />
                <input type="number" name="roll" placeholder="Enter Roll No" value={form.roll} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Enter Age" value={form.age} onChange={handleChange} required />

                <div className="checkbox-container">
                    <input type="checkbox" name="termsAccepted" checked={form.termsAccepted} onChange={handleChange} />
                    <label>I accept all terms & conditions</label>
                </div>

                <button type="submit">Register Now</button>
            </form>

            <h2>Student List</h2>
            <ul className="student-list">
                {students.map((student) => (
                    <li key={student.stdid}>
                        {student.stdname} - Class {student.standard}, Roll: {student.roll}, Age: {student.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentRegistration;