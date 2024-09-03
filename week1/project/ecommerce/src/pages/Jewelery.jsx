// src/pages/Jewelery.jsx
import products from "../fake-data/all-products"; // Adjust the path as necessary
import  "../App.css";
const Jewelery = () => {
  // Filter products to get only jewelery items
  const jeweleryItems = products.filter(
    (product) => product.category === "jewelery"
  );

  return (
    <div>
      <h1>Jewelery</h1>
      <div>
        {jeweleryItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
            <p>Price: ${item.price}</p>
            <p>
              Rating: {item.rating.rate} ({item.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelery;
