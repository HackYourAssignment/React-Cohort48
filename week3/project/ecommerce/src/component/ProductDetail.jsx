import React from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import useFetch from './useFetch';

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price : ${product.price}</p>
      <img src={product.image} alt={product.title} />
      <FavoriteButton productId={product.id} />
    </div>
  );
};

export default ProductDetail;
