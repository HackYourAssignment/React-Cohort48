import products from "../fake-data/all-products";
import "../App.css";
const WomensClothing = () => {
    const womensClothingItems = products.filter(
        (product) => product.category === "women's clothing"
    );

    return (
      <div>
        <h1>wowowomans sheets clothings</h1>
        <div>
          {womensClothingItems.map((item) => (
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

export default WomensClothing;
