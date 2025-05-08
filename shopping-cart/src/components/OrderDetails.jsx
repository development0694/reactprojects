import React from "react";
import styles from "../styles/OrderDetails.module.css"; // Import styles

const OrderDetails = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2>Order Details</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.price}>${item.price} x {item.quantity}</p>
            <p className={styles.totalPrice}>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <button className={styles.backButton} onClick={() => window.history.back()}>
        Back to Orders
      </button>
    </div>
  );
};

export default OrderDetails;