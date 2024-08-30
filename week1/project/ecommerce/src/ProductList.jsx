import products from './all-products.js';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ selectedCategory }) => {
    const filterProduct = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;
    return (
        <div className="product-list">
            {filterProduct.map((product) => (
                <div key={product.id} className="product-card">
                     <img src={product.image} alt={product.name} className="product-image" /> 
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price : ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    selectedCategory: PropTypes.string,
};

export default ProductList;
