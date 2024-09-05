import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
    return (
        <ul className="products">
        {products.length !== 0 ? 
        products.map((product) => (
            <li key={product.id} className="product-item">
                <Link to={`/product/${product.id}`} > 
                <div className="product">
                    <img className="product-img"src={product.image} alt={product.name} />
                    <span>{product.title}</span>
                </div>
                </Link>
            </li>
        )): <h1>Loading Products...</h1>  }
        </ul>
    );
    }

export default Products;