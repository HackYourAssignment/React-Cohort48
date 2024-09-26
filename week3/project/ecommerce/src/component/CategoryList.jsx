/* eslint-disable react/prop-types */
import React , {useState , useEffect}  from 'react';


const CategoryList = ({ selectedCategory, onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, [selectedCategory]);

  return (
    <div>
      {categories.map((categoryName, index) => {
        const cleanedCategoryName = categoryName.replace('FAKE: ', '').trim();
        return (
          <button
            key={index}
            onClick={() => onSelectCategory(cleanedCategoryName)}
            style={{
              fontWeight: cleanedCategoryName === selectedCategory ? 'bold' : 'normal',
            }}
          >
            {cleanedCategoryName}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;
