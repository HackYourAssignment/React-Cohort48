import * as React from 'react';
import { useFavourites } from './favouritesContext';
import NavBar from './NavBar';
import heartSolid from "../assets/heart-solid.svg";
import { Link } from 'react-router-dom';

const Favourites = () => {
    const { favourites, removeFromFavourites } = useFavourites();

    const handleFavouriteClick = (product) => {
        removeFromFavourites(product.id);
    }

    return (
        <>
        <NavBar />
            <ul className="products">
            {favourites.length === 0 ? (
            <p>No favourited products.</p>
            ) : (
            favourites.map((favouriteItem, id) => (
                <li key={id} className="product-item">
                <div className="favourite-icon" onClick={() => handleFavouriteClick(favouriteItem)}>
                <img className="heart-icon" src={heartSolid} alt="Remove from favourites" />
                    <Link to={`/product/${favouriteItem.id}`}>
                    <div className="product">
                        <img className="product-img" src={favouriteItem.image} alt={favouriteItem.title} />
                        <span title={favouriteItem.title}>{favouriteItem.title}</span>
                    </div>
                    </Link>
                </div>
                </li>
            ))
            )}
        </ul>
      </>
    );
}

export default Favourites;