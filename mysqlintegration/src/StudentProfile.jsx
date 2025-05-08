// StudentProfile.jsx
import React, { useState } from "react";
import { fetchStudentById } from "./api";
import "./StudentProfile.css";

function StudentProfile() {
  const [stdid, setStdid] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!stdid) {
      alert("Please enter a Student ID.");
      return;
    }

    const response = await fetchStudentById(stdid);
    if (!response || response.error) {
      setError("Student not found or an error occurred.");
      setStudent(null);
    } else {
      setStudent(response);
      setError("");
    }
  };

  return (
    <div className="student-profile-container">
      <div className="card">
        <h2>Fetch Student Details</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Student ID"
            value={stdid}
            onChange={(e) => setStdid(e.target.value)}
          />
          <button onClick={handleFetch}>Fetch Student</button>
        </div>

        {error && <p className="error">{error}</p>}

        {student && (
  <div className="student-details">
    <h3>Student Details</h3>
    <div className="details-grid">
      <p className="label">ID:</p> <p className="value">{student.stdid}</p>
      <p className="label">Name:</p> <p className="value">{student.stdname}</p>
      <p className="label">Standard:</p> <p className="value">{student.standard}</p>
      <p className="label">Roll No:</p> <p className="value">{student.roll}</p>
      <p className="label">Age:</p> <p className="value">{student.age}</p>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default StudentProfile;