import { useParams } from "react-router-dom";
import plantData from "../data/plants";
import "./PlantDetail.css";

function PlantDetail() {
  const { id } = useParams();
  const plant = plantData.find((plant) => plant.id === parseInt(id));

  if (!plant) {
    return <h2>Plant not found</h2>;
  }

  return (
    <div className="plant-detail">
      <img src={plant.imageUrl} alt={plant.title} className="plant-image" />
      <div className="plant-info">
        <h2>{plant.title}</h2>
        <p className="plant-description">{plant.description}</p>
        <div className="price-rating">
          <span className="price">Price: ₹{plant.price * 10}</span>
          <span className="rating">Rating: {plant.rating} stars</span>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default PlantDetail;
