import React, { useState } from "react";

const ProductForm = ({ onSubmit, initialData }) => {
  const [product, setProduct] = useState(
    initialData || { title: "", price: "", image: "" }
  );

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={product.title} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} required />
      <button type="submit">{initialData ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;