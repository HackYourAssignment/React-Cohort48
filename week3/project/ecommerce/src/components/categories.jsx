import * as React from "react";

const Categories = ({ categories, selectedCategory, handleCategoryClick }) => {
    return (
        <div className="categories">
        { categories.length !== 0 ? (
        categories.map((category) => (
            <button key={category}
            className = {`category ${category === selectedCategory ? 'category-selected' : ''}`}
            onClick={() => handleCategoryClick(category)}>
                {category}
            </button>
        ))) : <h1>Loading Categories...</h1>}
        </div>
    );
    }

export default Categories;