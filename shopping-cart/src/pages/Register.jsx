import React, { useState } from "react";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" className={styles.input} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className={styles.input} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className={styles.input} onChange={handleChange} required />
          <button type="submit" className={styles.btn}>Sign Up</button>
        </form>
        <a href="/login" className={styles.link}>Already have an account? Login</a>
      </div>
    </div>
  );
};

export default Register;