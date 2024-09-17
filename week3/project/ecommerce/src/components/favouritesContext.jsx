import * as React from 'react';

export const FavouritesContext = React.createContext();

export const useFavourites = () => {
    const context = React.useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
}

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = React.useState([]);

    const addToFavourites = (id) => {
        setFavourites([...favourites, id]);
    }

    const removeFromFavourites = (id) => {
        setFavourites(favourites.filter(item => item.id !== id));
    }

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
}