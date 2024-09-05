import * as React from 'react';
import Products from './products';

const productsApiUrl = 'https://fakestoreapi.com/products';

const ProductsController = ({ selectedCategory }) => {
    const [products, setProducts] = React.useState([]);
    const [errorFetch, setErrorFetch] = React.useState(null);

    const fetchProducts = async () => {
        try {
            if (!selectedCategory) {
                const response = await fetch(productsApiUrl);
                const data = await response.json();
                setProducts(data);
                setErrorFetch(null);
            } else {
                const response = await fetch(`${productsApiUrl}/category/${selectedCategory}`);
                const data = await response.json();
                setProducts(data);
                setErrorFetch(null);
            }
            
        } catch (error) {
            console.error('Error fetching products: ', error);
            setErrorFetch(error);
        }
    }


    React.useEffect(() => {
        fetchProducts();
    }, [selectedCategory]);

    return (
        errorFetch ? <h1>There was an error fetching products</h1> :
        <Products products={products} selectedCategory={selectedCategory}/>
    );
}

export default ProductsController;