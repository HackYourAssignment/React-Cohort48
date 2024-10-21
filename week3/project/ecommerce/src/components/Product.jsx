import * as React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setError(null);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product: ', error);
            setError(error);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading) {
        return <h1>Loading Product...</h1>
    }

    if (error) {
        return <h1>There was an error fetching the product</h1>
    }

    return (
            <div className="product">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <img className="product-img" src={product.image} alt={product.name} />
            </div>
    );
}

export default Product;