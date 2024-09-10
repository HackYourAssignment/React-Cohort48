/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <div className="product">
              <img className="product-img" src={product.image} alt={product.name} />
              <span>{product.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
