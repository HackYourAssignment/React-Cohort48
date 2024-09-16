import React,{useContext , useEffect, useState} from "react";
import {Context} from './context';
import {Link} from 'react-router-dom';

const FavouritesPage = () =>{
    const {favourites} = useContext(Context);
    const [favouritesProducts , setFavouiteProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        const fetchFavouriteProduct = async () => {
            try{
                setLoading(true);
                const products = await Promise.all(
                    favourites.map(async (id)=>{
                        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                        if(!response.ok) throw new Error('failed to fetch');
                        return await response.json();
                    })
                );
                setFavouiteProducts(products);
            } catch(error){
                setError(error.message);

            } finally{
                setLoading(false);
            }
        };

        if(favourites.length > 0 ){
            fetchFavouriteProduct();
        } else {
            setFavouiteProducts([]);
            setLoading(false);
        }
    }, [favourites]);

    if (loading) return <p>Loading ... </p>;
    if(error) return <p>{error}</p>;

    return(
        <div className="container">
        <h1>Favourites</h1>
        {favouritesProducts.length === 0 ? (
          <p>No favourites added yet.</p>
        ) : (
          <div className="row">
            {favouritesProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}

export default FavouritesPage;