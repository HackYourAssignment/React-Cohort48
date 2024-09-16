/* eslint-disable react/prop-types */
import React from 'react';
import products from '../data/all-products.js';
import '../styles/ProductList.css';

const ProductList = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => {
        const cleanedTitle = product.title.replace('FAKE: ', '').trim();

        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={cleanedTitle} className="product-image" />
            <h2>{cleanedTitle}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
