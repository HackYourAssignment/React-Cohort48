//week3/project/ecommerce/src/Product.jsx
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.js";


export const Product = () => {
    const {id} = useParams();

    const url = `https://fakestoreapi.com/products/${id}`;
    const { data: product, loading, error } = useFetch(url);


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