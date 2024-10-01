import * as React from 'react';
import { useFavourites } from './favouritesContext';
import NavBar from './NavBar';
import heartSolid from "../assets/heart-solid.svg";
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Favourites = () => {

    const { favourites, removeFromFavourites } = useFavourites();
    const productsApiUrl = 'https://fakestoreapi.com/products';
    const { data: products, loading, error } = useFetch(productsApiUrl);

    const handleFavouriteClick = (product) => {
        removeFromFavourites(product.id);
    }

    const currentFavourites = products.filter(product => favourites.includes(product.id));

    if (loading) {
        return <h1>Loading products...</h1>
    }

    if (error) {
        return <h1>There was an error fetching products</h1>
    }

    return (
        <>
        <NavBar />
            <ul className="products">
            {favourites.length === 0 ? (
            <p>No favourited products.</p>
            ) : (
            currentFavourites.map((favouriteItem, id) => (
                <li key={id} className="product-item">
                <img className="heart-icon" src={heartSolid} alt="Remove from favourites"  onClick={() => handleFavouriteClick(favouriteItem)}/>
                    <Link to={`/product/${favouriteItem.id}`}>
                    <div className="product">
                        <img className="product-img" src={favouriteItem.image} alt={favouriteItem.title} />
                        <span title={favouriteItem.title}>{favouriteItem.title}</span>
                    </div>
                    </Link>
                </li>
            ))
            )}
        </ul>
      </>
    );
}

export default Favourites;