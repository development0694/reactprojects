import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/ProductList.module.css";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + (quantities[product.id] || 1) } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: quantities[product.id] || 1 }]);
    }
    setQuantities({ ...quantities, [product.id]: 1 }); // Reset quantity after adding
  };

  const increaseQuantity = (productId) => {
    setQuantities({ ...quantities, [productId]: (quantities[productId] || 1) + 1 });
  };

  const decreaseQuantity = (productId) => {
    setQuantities({ ...quantities, [productId]: Math.max((quantities[productId] || 1) - 1, 1) });
  };

  return (
    <div className={styles.container}>
      <h2>Product List</h2>
      <div className={styles.grid}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            
            {/* Quantity Control */}
            <div className={styles.quantityControl}>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{quantities[product.id] || 1}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>

            {/* Add to Cart Button */}
            <button className={styles.addButton} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;