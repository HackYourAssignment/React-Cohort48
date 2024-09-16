//week2/project/ecommerce/src/Product.jsx
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProductDetail = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) throw new Error('Failed to fetch product details');

            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProductDetail();
    }, [id]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return null;

    return (
      <div>
          <img src={product.image} alt={product.title}/>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
      </div>
    );

}