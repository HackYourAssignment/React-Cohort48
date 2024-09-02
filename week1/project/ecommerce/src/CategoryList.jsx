/* eslint-disable react/prop-types */
import React  from 'react';
import categories from './all-categories.js';


const CategoryList = ({ selectedCategory, onSelectCategory }) => {
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
