import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Student Management System</h1>
      <p>Manage student records efficiently with our system.</p>
      <div className="features">
        <div className="feature-card" onClick={() => navigate("/profile")}>
          <h2>Student Profile</h2>
          <p>View and manage student details.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/register")}>
          <h2>Registration</h2>
          <p>Add new students to the system.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/update")}>
          <h2>Update Records</h2>
          <p>Modify existing student information.</p>
        </div>
        <div className="feature-card" onClick={() => navigate("/delete")}>
          <h2>Delete Records</h2>
          <p>Remove student data securely.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
