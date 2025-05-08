import React from "react";
import { useLocation } from "react-router-dom";
import OrderDetails from "../components/OrderDetails.jsx";
import styles from "../styles/Orders.module.css";

const Orders = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  return (
    <div className={styles.container}>
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>No items in your order.</p>
      ) : (
        <div className={styles.orderDetailsContainer}>
          <OrderDetails items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Orders;