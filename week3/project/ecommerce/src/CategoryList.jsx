/* eslint-disable react/prop-types */
const CategoryList = ({ categories, selectedCategory, handleCategoryChange }) => {
  if (!Array.isArray(categories)) {
    return <div>Error: Categories data is not an array.</div>;
  }

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div
          key={index} // Use index as the key since categories are strings
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
