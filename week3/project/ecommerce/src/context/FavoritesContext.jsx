//week3/project/ecommerce/src/context/FavoritesContext.jsx
import {createContext, useState, useContext} from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (productId) => {
        const prevFavorites = [...favorites];

        let updatedFavorites;
        if (prevFavorites.includes(productId)) {
            updatedFavorites = prevFavorites.filter(function (id) {
                return id !== productId;
            });
        } else {
            updatedFavorites = [...favorites, productId];
        }

        setFavorites(updatedFavorites);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );

};

export const useFavorites = () => {
    return useContext(FavoritesContext);
}