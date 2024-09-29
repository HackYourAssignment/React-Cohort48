/* eslint-disable react/prop-types */
import React from 'react';
import products from './all-products.js';
import './ProductList.css';


const ProductList = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
