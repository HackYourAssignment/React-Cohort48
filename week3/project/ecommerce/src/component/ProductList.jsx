import React, { useContext, useState } from 'react';
import { Context } from '../context/context';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch'; 
import FavoriteButton from './FavoriteButton';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { favourites, toggleFavorite } = useContext(Context);
  console.log(favourites, toggleFavorite);


  const url = selectedCategory === 'all' 
    ? 'https://fakestoreapi.com/products' 
    : `https://fakestoreapi.com/products/category/${selectedCategory}`;
  
  const { data: products, loading, error } = useFetch(url); 
  const { data: categories } = useFetch('https://fakestoreapi.com/products/categories'); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      
      <div className="mb-4">
        <button 
          className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
          onClick={() => setSelectedCategory('all')}
        >
          All Categories
        </button>
        {categories && categories.map((category) => (
          <button 
            key={category}
            className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {products && products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </Link>
              <FavoriteButton productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
