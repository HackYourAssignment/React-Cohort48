import * as React from "react";

const Categories = ({ categories, selectedCategory, handleCategoryClick }) => {
    return (
        <div className="categories">
        { categories.length !== 0 ? (
        categories.map((category) => (
            <div key={category} 
            className = {`category ${category === selectedCategory ? 'category-selected' : ''}`}>
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            </div>
        ))) : <h1>Loading Categories...</h1>}
        </div>
    );
    }

export default Categories;