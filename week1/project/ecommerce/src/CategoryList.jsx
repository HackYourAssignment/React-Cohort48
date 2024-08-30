
import PropTypes from 'prop-types';
import categories from './all-categories.js';

const CategoryList = ({ selectedCategory, onSelectCategory }) => { 
    return (
        <div>
            {categories.map((category) => (
                <button
                    key={category.id} 
                    onClick={() => onSelectCategory(category.name)}
                    style={{
                        fontWeight: category.name === selectedCategory ? 'bold' : 'normal',
                    }}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

CategoryList.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
