import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useFavorites} from "../context/FavoritesContext.jsx";
import {ProductCard} from "./ProductCard.jsx";


export const FavoritesList = () => {
    const {favorites = [], toggleFavorite } = useFavorites();
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       const fetchFavoriteProducts = async () => {
         const fetchedProducts = await Promise.all(
             favorites.map(async (id) => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (response.ok) {
                    return await response.json();
                } else {
                    throw new Error(`Failed to fetch favorite product`);
                }
             })
         );

         setFavoriteProducts(fetchedProducts);
       };

       if (favorites.length >0) {
           fetchFavoriteProducts();
       }
    }, [favorites]);

    return (
        <div className="product-grid">
            <h1>Your Favorites</h1>
            {favoriteProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isFavorited={favorites.includes(product.id)}  // Check if the product is favorited
                    toggleFavorite={toggleFavorite}  // Pass the toggleFavorite function
                    navigate={navigate}  // Pass the navigate function for routing
                />
            ))}
        </div>
    );
};