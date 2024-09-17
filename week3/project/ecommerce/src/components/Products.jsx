import React from "react";
import { Link } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useFavourites } from "./favouritesContext";

const Products = ({ products }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

    const favouritesArray = favourites.map((favourite) => favourite.id);

    const isFavourite = (id) => {
        if (favouritesArray.includes(id)) {
            return true;
        }
        return false;
    }

    console.log(favouritesArray);


    const handleFavouriteClick = (product) => {
        if (isFavourite(product.id)) {
            removeFromFavourites(product.id);
        } else {
            addToFavourites(product);
        }
    }

    return (
        <ul className="products">
        {products.length !== 0 ? 
        products.map((product) => (
            <li key={product.id} className="product-item">
                <div className="favorite-icon" onClick={() => handleFavouriteClick(product)}>
                <img
                src={isFavourite(product.id) ? heartSolid : heartRegular}
                alt={isFavourite(product.id) ? "Remove from favorites" : "Add to favorites"}
                className="heart-icon"
                />
          </div>
                <Link to={`/product/${product.id}`} > 
                <div className="product">
                    <img className="product-img" src={product.image} alt={product.name} />
                    <span>{product.title}</span>
                </div>
                </Link>
            </li>
        )): <h1>Loading Products...</h1>  }
        </ul>
    );
    }

export default Products;