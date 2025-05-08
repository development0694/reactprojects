import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css";

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    ));
  };

  const goToOrders = () => {
    navigate("/orders", { state: { cartItems: cart } }); // Pass cart data
  };

  return (
    <div className={styles.container}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.grid}>
            {cart.map((item) => (
              <div key={item.id} className={styles.card}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>${item.price} x {item.quantity}</p>

                <div className={styles.quantityControls}>
                  <button className={styles.btn} onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className={styles.btn} onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Proceed to Orders Button */}
          <button className={styles.checkoutBtn} onClick={goToOrders}>
            Proceed to Orders
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;