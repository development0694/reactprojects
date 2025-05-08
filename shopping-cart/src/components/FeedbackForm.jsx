import React, { useState } from "react";
import styles from "../styles/Feedback.module.css"; // Import CSS

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder="Enter your feedback"
        onChange={(e) => setFeedback(e.target.value)}
        required
      ></textarea>
      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;