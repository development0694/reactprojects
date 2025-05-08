import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import styles from "../styles/Feedback.module.css"; // Import CSS

const Feedback = () => {
  return (
    <div className={styles.container}>
      <h2>Feedback</h2>
      <FeedbackForm />
    </div>
  );
};

export default Feedback;