import * as React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState(null);
    const [error, setError] = React.useState(null);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching product: ', error);
            setError(error);
        }
    }

    React.useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        error ? <h1>There was an error fetching product</h1> :
        product ? (
            <div className="product">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <img className="product-img" src={product.image} alt={product.name} />
            </div>
        ) : <h1>Loading Product...</h1>
    );
}

export default Product;