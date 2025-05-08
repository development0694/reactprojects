import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Welcome to Our Shopping Cart</h2>
      <p>Your one-stop shop for amazing products at the best prices!</p>

      <div className={styles.sections}>
        <div className={styles.card}>
          <h3>Explore Products</h3>
          <p>Browse our latest collection of high-quality products.</p>
          <Link to="/products" className={styles.button}>View Products</Link>
        </div>

        <div className={styles.card}>
          <h3>Shopping Cart</h3>
          <p>Review the items you've added to your cart.</p>
          <Link to="/cart" className={styles.button}>Go to Cart</Link>
        </div>

        <div className={styles.card}>
          <h3>Order History</h3>
          <p>Check your past orders and track your purchases.</p>
          <Link to="/orders" className={styles.button}>View Orders</Link>
        </div>

        <div className={styles.card}>
          <h3>Join Us</h3>
          <p>Create an account to start shopping with us.</p>
          <Link to="/register" className={styles.button}>Register Now</Link>
        </div>

        <div className={styles.card}>
          <h3>Feedback</h3>
          <p>We value your opinion! Let us know how we can improve.</p>
          <Link to="/feedback" className={styles.button}>Give Feedback</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;