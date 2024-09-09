//week1/project/ecommerce/src/ProductList.jsx
import * as React from 'react';
import products from './fake-data/all-products.js';

export const ProductList = ({selectedCategory}) => {
    let filteredProducts;

    // Normalize selected category by removing the "FAKE: " prefix if it exists
    const normalizedCategory = selectedCategory ? selectedCategory.replace("FAKE: ", "").trim().toLowerCase() : null;

    // Filter products based on the selected category
    if (normalizedCategory) {
        filteredProducts = products.filter((product) =>
            product.category.includes(normalizedCategory)
        );
    } else {
        // If no category is selected, show all products
        filteredProducts = products;
    }

    return (
        <div className="product-grid">
            {filteredProducts.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};