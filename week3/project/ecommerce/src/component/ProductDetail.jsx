import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import { Context } from './context';

const ProductDetail =()=>{
    const {id} = useParams();
    const[product,setProduct] = useState(null);
    const [loading,setLoading]= useState(true);
    const[error,setError] = useState(null);

    const { favourites, toggleFavorite } = React.useContext(Context);

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if(!response.ok) throw new Error('failed to fetch product details');
                const data = await response.json();
                setProduct(data);
            } catch (error){
                setError(error.message);
            } finally{
                setLoading(false);
            }
        };
        fetchProduct();
    },[id]);

    if(loading){
        return <p>Lading ...</p>
    } if(error){
        return <p>{error}</p>
    }

    return(
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price : ${product.price}</p>
            <img src={product.image} alt={product.title}/>
            <button onClick={() => toggleFavorite(product.id)}>
        {favourites.includes(product.id) ? '❤️' : '🤍'}
      </button>
        </div>
    )
}
export default ProductDetail;