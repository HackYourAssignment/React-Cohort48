// src/pages/MensClothing.jsx
import products from "../fake-data/all-products"; // Adjust the path as necessary
import "../App.css";
const MensClothing = () => {

    const mensClothingItems = products.filter(
      (product) => product.category === "men's clothing"
    );
            
    return <div>
        <h1>man clothing</h1>
        <div>
            {
                mensClothingItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.title} />
                        <p>Price: ${item.price}</p>
                        <p>
                            Rating: {item.rating.rate} ({item.rating.count} reviews)
                        </p>
                    </div>
                ))
            }
            </div>
        
        </div>;
};

export default MensClothing;
