/* eslint-disable react/prop-types */
const CategoryList = ({ categories, selectedCategory, handleCategoryChange }) => {
    return (
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category}
            className={`category ${category === selectedCategory ? 'category-selected' : ''}`}
          >
            <h3 onClick={() => handleCategoryChange(category)}>
              {category}
            </h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryList;
  