import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "./FavouritesContext";
import ProductList from "./ProductList";

const FavouritesPage = () => {
  const { favourites } = useContext(FavouritesContext); //without passing prop to FavouritesPage, we can access the context directly using useContext hook
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavouriteProducts = async () => {
      const products = await Promise.all(
        favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
        )
      );
      setFavouriteProducts(products);
    };

    if (favourites.length > 0) {
      fetchFavouriteProducts();
    }
  }, [favourites]);

  return (
    <div>
      <h1>Your Favourites</h1>
      {favourites.length === 0 ? (
        <p>You have no favourite products.</p>
      ) : (
        <ProductList products={favouriteProducts} />
      )}
    </div>
  );
};

export default FavouritesPage;
